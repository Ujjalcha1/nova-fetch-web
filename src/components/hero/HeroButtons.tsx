import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { DOWNLOAD_URL, INSTALLER_FILENAME, WINDOWS_VERSION } from "@/lib/downloads";
import DownloadLink from "@/components/download/DownloadLink";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="h-14 px-9 text-base shadow-[0_10px_40px_rgba(139,92,246,0.35)]"
      >
        <DownloadLink
          href={DOWNLOAD_URL}
          version={WINDOWS_VERSION}
          fileName={INSTALLER_FILENAME}
        >
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download for Windows
        </DownloadLink>
      </Button>

      <Button asChild variant="secondary" size="lg" className="h-14 px-9 text-base">
        <Link href="/features">
          Explore Features
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
