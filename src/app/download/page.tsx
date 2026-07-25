import Container from "@/components/ui/Container";

import { downloads } from "@/data/downloads";

import DownloadCard from "@/components/download/DownloadCard";
import SystemRequirements from "@/components/download/SystemRequirements";
import ReleaseNotes from "@/components/download/ReleaseNotes";
import ChecksumCard from "@/components/download/ChecksumCard";

export default function DownloadPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-black text-white">Download Nova Fetch</h1>

        <p className="mt-6 text-lg text-gray-400">
          Choose the version that best suits your workflow.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        {downloads.map((item) => (
          <DownloadCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        <SystemRequirements />
        <ReleaseNotes />
        <ChecksumCard />
      </div>
    </Container>
  );
}
