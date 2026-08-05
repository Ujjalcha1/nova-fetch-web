import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";

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

function detectOS(): string {
  const ua = navigator.userAgent;

  if (/Windows/.test(ua)) return "Windows";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPod/.test(ua)) return "iOS";
  if (/iPad/.test(ua)) return "iPadOS";
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

function detectDeviceType(): string {
  const ua = navigator.userAgent;

  if (/iPad|Tablet|PlayBook/.test(ua)) return "Tablet";
  if (/Mobi|Android|iPhone|iPod/.test(ua)) return "Mobile";

  return "Desktop";
}

export async function trackVisitor(): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  let visitorId: string;
  try {
    visitorId = getOrCreateVisitorId();
  } catch {
    visitorId = generateVisitorId();
  }

  await setDoc(
    doc(db, "websiteVisitors", visitorId),
    {
      visitorId,
      os: detectOS(),
      browser: detectBrowser(),
      deviceType: detectDeviceType(),
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      page: window.location.pathname,
      referrer: document.referrer,
      visitedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
