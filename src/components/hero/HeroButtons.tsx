"use client";

import { Download, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import DownloadButton from "../download/DownloadButton";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        className="h-12 px-8 text-base shadow-[0_10px_40px_rgba(139,92,246,0.35)]"
      >
        <DownloadButton />
      </Button>

      <Button asChild variant="secondary" className="h-12 px-8 text-base">
        <Link href="https://github.com" target="_blank">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Link>
      </Button>
    </div>
  );
}
