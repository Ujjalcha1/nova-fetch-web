import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Button, GlassCard } from "@/components/ui";
import { Check, Download } from "lucide-react";

import { releaseNotes } from "@/data/release-notes";
import { DOWNLOAD_URL, WINDOWS_VERSION } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Release Notes",
};

export default function ChangelogPage() {
  return (
    <main>
      <Container className="py-24">
        <div className="mx-auto max-w-3xl">
          <Heading
            badge="RELEASE NOTES"
            title="What's new in Nova Fetch"
            description="The latest changes and improvements, shipped with every release."
          />

          <div className="mt-16 space-y-6">
            <GlassCard className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Nova Fetch {WINDOWS_VERSION}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Windows 10 / 11 · x64
                  </p>
                </div>

                <Button asChild>
                  <a href={DOWNLOAD_URL}>
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                    Download for Windows
                  </a>
                </Button>
              </div>

              <div className="mt-8 space-y-4">
                {releaseNotes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-green-400" />

                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </main>
  );
}
