export type FeatureIcon =
  | "download"
  | "playlist"
  | "audio"
  | "subtitle"
  | "secure"
  | "speed";

export interface Feature {
  title: string;
  description: string;
  icon: FeatureIcon;
  className?: string;
}

export const features: Feature[] = [
  {
    title: "Ultra Fast Downloads",
    description:
      "Powered by yt-dlp and FFmpeg with optimized multi-thread downloading.",
    icon: "speed",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Playlist Download",
    description: "Download an entire playlist with a single click.",
    icon: "playlist",
  },
  {
    title: "MP3 Converter",
    description: "Extract high-quality audio from any supported video.",
    icon: "audio",
  },
  {
    title: "Subtitle Support",
    description: "Download subtitles in multiple languages.",
    icon: "subtitle",
    className: "lg:col-span-2",
  },
  {
    title: "Secure",
    description: "No malware, no ads and no tracking.",
    icon: "secure",
  },
  {
    title: "4K Downloads",
    description: "Download videos up to 4K resolution.",
    icon: "download",
  },
];
