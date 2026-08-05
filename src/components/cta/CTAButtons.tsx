import { ArrowRight, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import DownloadLink from "@/components/download/DownloadLink";
import {
  DOWNLOAD_URL,
  INSTALLER_FILENAME,
  RELEASE_NOTES_URL,
  WINDOWS_VERSION,
} from "@/lib/downloads";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg">
        <DownloadLink
          href={DOWNLOAD_URL}
          version={WINDOWS_VERSION}
          fileName={INSTALLER_FILENAME}
        >
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download for Windows
        </DownloadLink>
      </Button>

      <Button asChild variant="secondary" size="lg">
        <a href={RELEASE_NOTES_URL}>
          View Release Notes
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}
