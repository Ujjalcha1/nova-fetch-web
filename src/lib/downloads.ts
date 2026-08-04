/**
 * Single source of truth for the Windows installer.
 * To ship a new build, simply replace the file at this path with the
 * new installer — no code changes required.
 */
import downloadJson from "../../update.json";
export const INSTALLER_FILENAME = "NovaFetch-Setup.exe";

export const DOWNLOAD_URL = downloadJson.downloadUrl;

export const WINDOWS_VERSION = downloadJson.latestVersion;

export const WINDOWS_PLATFORM = "Windows 10 / 11";

export const WINDOWS_ARCHITECTURE = "x64";

export const RELEASE_NOTES_URL = "/changelog";
