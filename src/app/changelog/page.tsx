import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Button, GlassCard } from "@/components/ui";
import { Check, Download } from "lucide-react";

import { releaseNotes } from "@/data/release-notes";
import {
  DOWNLOAD_URL,
  INSTALLER_FILENAME,
  WINDOWS_VERSION,
} from "@/lib/downloads";
import DownloadLink from "@/components/download/DownloadLink";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Release Notes",
  description:
    "What's new in Nova Fetch v1.0.0 — a modern UI, smart download queue, batch downloads, subtitle downloader, resume support, performance improvements and bug fixes.",
  keywords: [
    "Nova Fetch release notes",
    "Nova Fetch changelog",
    "Nova Fetch v1.0.0",
  ],
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Release Notes", path: "/changelog" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Release Notes",
          description: "What's new in Nova Fetch v1.0.0.",
          path: "/changelog",
        })}
      />
      <Container className="py-24">
        <div className="mx-auto max-w-3xl">
          <Heading
            badge="RELEASE NOTES"
            title="What's new in Nova Fetch"
            level={1}
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
                  <DownloadLink
                    href={DOWNLOAD_URL}
                    version={WINDOWS_VERSION}
                    fileName={INSTALLER_FILENAME}
                  >
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                    Download for Windows
                  </DownloadLink>
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
