import { Download } from "lucide-react";
import { Button, GlassCard } from "@/components/ui";

interface Props {
  title: string;
  version: string;
  file: string;
  size: string;
  description: string;
  downloadUrl: string;
  primary?: boolean;
}

export default function DownloadCard(props: Props) {
  return (
    <GlassCard className="p-8">
      <h3 className="text-2xl font-bold text-white">{props.title}</h3>

      <p className="mt-2 text-gray-400">{props.description}</p>

      <div className="mt-6 space-y-2 text-sm text-gray-400">
        <p>Version: {props.version}</p>
        <p>File: {props.file}</p>
        <p>Size: {props.size}</p>
      </div>

      <Button
        asChild
        className="mt-8 w-full"
        variant={props.primary ? "primary" : "secondary"}
      >
        <a href={props.downloadUrl}>
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download
        </a>
      </Button>
    </GlassCard>
  );
}
