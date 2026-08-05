// Must match the key used in src/lib/analytics/visitor.ts and
// src/lib/analytics/download.ts so every service shares one visitorId.
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

export function getVisitorId(): string {
  try {
    const existing = localStorage.getItem(VISITOR_ID_KEY);
    if (existing) {
      return existing;
    }

    const visitorId = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
    return visitorId;
  } catch {
    // localStorage unavailable (e.g. privacy mode) — return a fresh
    // non-persisted UUID so tracking still works for this session.
    return generateVisitorId();
  }
}
