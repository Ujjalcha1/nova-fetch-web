export type WhyIcon =
  | "zap"
  | "shield"
  | "download"
  | "monitor"
  | "cpu"
  | "sparkles";

export interface WhyFeature {
  title: string;
  description: string;
  icon: WhyIcon;
}

export const whyFeatures: WhyFeature[] = [
  {
    title: "Blazing Fast",
    description:
      "Powered by yt-dlp with multi-thread downloading for maximum speed.",
    icon: "zap",
  },
  {
    title: "100% Safe",
    description: "No ads. No malware. No bundled software. Just downloads.",
    icon: "shield",
  },
  {
    title: "One Click Download",
    description: "Paste a link and start downloading instantly.",
    icon: "download",
  },
  {
    title: "Modern UI",
    description: "Beautiful Windows 11 inspired interface.",
    icon: "monitor",
  },
  {
    title: "Powered by FFmpeg",
    description: "Automatic merge, conversion and audio extraction.",
    icon: "cpu",
  },
  {
    title: "Always Free",
    description: "Use every feature without paying a subscription.",
    icon: "sparkles",
  },
];
