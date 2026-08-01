import { ArrowRight, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import { DOWNLOAD_URL, RELEASE_NOTES_URL } from "@/lib/downloads";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg">
        <a href={DOWNLOAD_URL}>
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download for Windows
        </a>
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
