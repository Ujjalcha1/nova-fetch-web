import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";

// Must match the key used in src/lib/analytics/visitor.ts so both
// services attribute events to the same persistent visitor.
const VISITOR_ID_KEY = "novaFetchVisitorId";

function generateVisitorId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  // Fallback UUID v4 generator for browsers without crypto.randomUUID
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function getOrCreateVisitorId(): string {
  const existing = localStorage.getItem(VISITOR_ID_KEY);
  if (existing) {
    return existing;
  }

  const visitorId = generateVisitorId();
  localStorage.setItem(VISITOR_ID_KEY, visitorId);
  return visitorId;
}

function detectPlatform(): string {
  const ua = navigator.userAgent;

  if (/Windows/.test(ua)) return "Windows";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Mac OS X/.test(ua)) return "macOS";
  if (/CrOS/.test(ua)) return "Chrome OS";
  if (/Linux/.test(ua)) return "Linux";

  return "Unknown";
}

function detectBrowser(): string {
  const ua = navigator.userAgent;

  // Order matters: Edge and Opera user agents also contain "Chrome"
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/Chrome\//.test(ua)) return "Chrome";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Safari\//.test(ua)) return "Safari";

  return "Unknown";
}

export interface TrackDownloadOptions {
  version: string;
  fileName: string;
  platform?: string;
  browser?: string;
  page?: string;
}

export async function trackDownload(
  options: TrackDownloadOptions
): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  const { version, fileName, platform, browser, page } = options;

  let visitorId: string;
  try {
    visitorId = getOrCreateVisitorId();
  } catch {
    visitorId = generateVisitorId();
  }

  await addDoc(collection(db, "websiteDownloads"), {
    visitorId,
    version,
    fileName,
    platform: platform ?? detectPlatform(),
    browser: browser ?? detectBrowser(),
    page: page ?? window.location.pathname,
    downloadedAt: serverTimestamp(),
  });
}

let downloadInFlight = false;

/**
 * Waits for the Firestore write to finish (or fail), then starts the
 * download. The download is never blocked by analytics: on error the
 * failure is logged and the download still proceeds.
 */
export async function startDownload(
  url: string,
  version: string,
  fileName: string
): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  // Guard against rapid double-clicks creating duplicate documents.
  if (downloadInFlight) {
    return;
  }
  downloadInFlight = true;

  console.log("Download button clicked");
  console.log("Tracking download...");

  try {
    await trackDownload({ version, fileName, page: window.location.pathname });
  } catch (error) {
    console.error(error);
  }

  console.log("Tracking finished");
  console.log("Starting download...");

  // Programmatic anchor click — the same mechanism as a native <a href>
  // click, which reliably turns the cross-origin installer URL into a
  // download (window.location.href navigation is unreliable for this).
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  link.remove();

  // The download does not unload the page, so allow future clicks.
  downloadInFlight = false;
}
