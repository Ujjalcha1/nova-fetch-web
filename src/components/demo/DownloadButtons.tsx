import { Button } from "@/components/ui";

export default function DownloadButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 md:flex-row">
      <Button>Download Video</Button>

      <Button variant="secondary">Download MP3</Button>
    </div>
  );
}
