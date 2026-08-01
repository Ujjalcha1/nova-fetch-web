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
      "Multi-threaded downloads tuned for maximum speed and reliability.",
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
    title: "Lightweight",
    description:
      "Runs smoothly on modest hardware without slowing down your system.",
    icon: "cpu",
  },
  {
    title: "Always Free",
    description: "Use every feature without paying a subscription.",
    icon: "sparkles",
  },
];
