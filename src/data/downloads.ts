import {
  DOWNLOAD_URL,
  INSTALLER_FILENAME,
  RELEASE_NOTES_URL,
  WINDOWS_ARCHITECTURE,
  WINDOWS_PLATFORM,
  WINDOWS_VERSION,
} from "@/lib/downloads";

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  file: string;
  version: string;
  platform: string;
  architecture: string;
  size: string;
  downloadUrl: string;
  releaseNotesUrl: string;
}

export const downloads: DownloadItem[] = [
  {
    id: "windows",
    title: "Download for Windows",
    description:
      "The official Nova Fetch installer for Windows. Fast setup with automatic updates and a desktop shortcut.",
    file: INSTALLER_FILENAME,
    version: WINDOWS_VERSION,
    platform: WINDOWS_PLATFORM,
    architecture: WINDOWS_ARCHITECTURE,
    size: "-- MB",
    downloadUrl: DOWNLOAD_URL,
    releaseNotesUrl: RELEASE_NOTES_URL,
  },
];
