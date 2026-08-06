export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  creator: string;
  supportEmail: string;
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Nova Fetch",
  shortName: "NovaFetch",

  title: "Nova Fetch - Fast, Modern & Secure Downloader",

  description:
    "Nova Fetch is a modern desktop downloader with a beautiful interface, fast downloads, queue management, resume support and more.",

  url: "https://novafetch.ujjal.in",

  creator: "Ujjal Chatterjee",

  supportEmail: "u4472129@gmail.com",

  keywords: [
    "Nova Fetch",
    "Media Downloader",
    "Video Downloader",
    "Download Manager",
    "Windows Downloader",
    "Audio Downloader",
    "Subtitle Downloader",
    "Fast Downloads",
  ],
};
