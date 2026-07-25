export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  creator: string;
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Nova Fetch",
  shortName: "NovaFetch",
  description:
    "A fast, modern Windows video downloader powered by yt-dlp and FFmpeg.",

  url: "https://novafetch.app",

  ogImage: "/og-image.png",

  creator: "Ujjal Chatterjee",

  keywords: [
    "Nova Fetch",
    "Video Downloader",
    "YouTube Downloader",
    "yt-dlp GUI",
    "Windows Downloader",
    "FFmpeg",
    "Playlist Downloader",
    "MP3 Converter",
  ],
};
