import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import { downloads } from "@/data/downloads";

import DownloadCard from "@/components/download/DownloadCard";
import SystemRequirements from "@/components/download/SystemRequirements";
import ReleaseNotes from "@/components/download/ReleaseNotes";

import { getInstallerSize } from "@/lib/installer-size";

export const metadata: Metadata = {
  title: "Download",
};

export default function DownloadPage() {
  const installer = downloads[0];

  return (
    <main>
      <Container className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-black text-white">
            Download Nova Fetch
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Fast, modern and secure. Get the latest installer for Windows.
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
