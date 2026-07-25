export interface DownloadItem {
  id: string;
  title: string;
  file: string;
  version: string;
  size: string;
  description: string;
  downloadUrl: string;
  primary: boolean;
}

export const downloads: DownloadItem[] = [
  {
    id: "installer",
    title: "Windows Installer",
    file: "NovaFetch-Setup.exe",
    version: "v1.0.0",
    size: "52 MB",
    description:
      "Recommended for most users. Includes automatic installation and desktop shortcut.",
    downloadUrl: "#",
    primary: true,
  },
  {
    id: "portable",
    title: "Portable ZIP",
    file: "NovaFetch-Portable.zip",
    version: "v1.0.0",
    size: "48 MB",
    description:
      "Run without installation. Perfect for USB drives and portable use.",
    downloadUrl: "#",
    primary: false,
  },
];
