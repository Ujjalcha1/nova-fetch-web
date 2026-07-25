"use client";

import Button from "@/components/ui/Button";

import { useLatestRelease } from "@/hooks/useLatestRelease";

export default function DownloadButton() {
  const { release, isLoading } = useLatestRelease();

  if (isLoading) {
    return <Button disabled>Loading...</Button>;
  }

  const asset = release?.assets?.find((asset) => asset.name.endsWith(".exe"));

  if (!asset) {
    return <Button disabled>No Windows Download</Button>;
  }

  return (
    <Button asChild>
      <a
        href={asset.browser_download_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download {release?.tag_name}
      </a>
    </Button>
  );
}
