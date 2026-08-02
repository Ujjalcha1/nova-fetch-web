import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import { downloads } from "@/data/downloads";

import DownloadCard from "@/components/download/DownloadCard";
import SystemRequirements from "@/components/download/SystemRequirements";
import ReleaseNotes from "@/components/download/ReleaseNotes";
import JsonLd from "@/components/seo/JsonLd";

import { getInstallerSize } from "@/lib/installer-size";
import {
  breadcrumbJsonLd,
  pageMetadata,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import {
  WINDOWS_ARCHITECTURE,
  WINDOWS_PLATFORM,
  WINDOWS_VERSION,
} from "@/lib/downloads";

export const metadata: Metadata = pageMetadata({
  title: "Download Nova Fetch for Windows",
  description:
    "Download Nova Fetch v1.0.0 for Windows 10/11 (x64). A free video, audio and subtitle downloader with multi-threaded downloads, resume support and a smart download queue.",
  keywords: [
    "Download Nova Fetch",
    "Nova Fetch Windows downloader",
    "Video downloader for Windows",
    "Free video download manager for Windows",
    "Windows 11 downloader",
  ],
  path: "/download",
});

export default function DownloadPage() {
  const installer = downloads[0];

  return (
    <main>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Download", path: "/download" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Download Nova Fetch",
          description:
            "Free download of Nova Fetch v1.0.0 for Windows 10/11 (x64).",
          path: "/download",
        })}
      />
      <Container className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-black text-white">
            Download Nova Fetch
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Fast, modern and secure. Get the latest installer for{" "}
            {WINDOWS_PLATFORM} ({WINDOWS_ARCHITECTURE}), version{" "}
            {WINDOWS_VERSION}.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <DownloadCard
            {...installer}
            size={getInstallerSize()}
          />
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 lg:grid-cols-2">
          <SystemRequirements />
          <ReleaseNotes />
        </div>
      </Container>
    </main>
  );
}
