export function detectBrowser(): string {
  const ua = navigator.userAgent;

  // Order matters: Edge and Opera user agents also contain "Chrome"
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/Chrome\//.test(ua)) return "Chrome";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Safari\//.test(ua)) return "Safari";

  return "Unknown";
}

export function detectOS(): string {
  const ua = navigator.userAgent;

  if (/Windows/.test(ua)) return "Windows";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPod/.test(ua)) return "iOS";
  // iPad must be checked before macOS — iPad user agents contain "Mac OS X"
  if (/iPad/.test(ua)) return "iPadOS";
  if (/Mac OS X/.test(ua)) return "macOS";
  if (/CrOS/.test(ua)) return "Chrome OS";
  if (/Linux/.test(ua)) return "Linux";

  return "Unknown";
}

export function detectDeviceType(): string {
  const ua = navigator.userAgent;

  if (/iPad|Tablet|PlayBook/.test(ua)) return "Tablet";
  if (/Mobi|Android|iPhone|iPod/.test(ua)) return "Mobile";

  return "Desktop";
}
