import { statSync } from "node:fs";
import path from "node:path";

import { DOWNLOAD_URL } from "./downloads";

/**
 * Reads the installer size from disk and formats it for display.
 * Falls back to "-- MB" when the file is missing or empty.
 *
 * Server-only: uses node:fs, so it must not be imported by client
 * components.
 */
export function getInstallerSize(): string {
  try {
    const { size } = statSync(
      path.join(process.cwd(), "public", DOWNLOAD_URL),
    );

    if (size > 0) {
      const mb = size / (1024 * 1024);

      return mb >= 100 ? `${Math.round(mb)} MB` : `${mb.toFixed(1)} MB`;
    }
  } catch {
    // Installer not present yet — fall through to placeholder.
  }

  return "-- MB";
}
