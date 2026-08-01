import { Download, GitBranch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { DOWNLOAD_URL } from "@/lib/downloads";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
      <Button
        asChild
        className="h-12 px-8 text-base shadow-[0_10px_40px_rgba(139,92,246,0.35)]"
      >
        <a href={DOWNLOAD_URL}>
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download for Windows
        </a>
      </Button>

      <Button asChild variant="secondary" className="h-12 px-8 text-base">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch className="mr-2 h-5 w-5" aria-hidden="true" />
          GitHub
        </Link>
      </Button>
    </div>
  );
}
