import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
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
        variant={props.primary ? "default" : "secondary"}
      >
        <a href={props.downloadUrl}>
          <Download className="mr-2 h-5 w-5" />
          Download
        </a>
      </Button>
    </div>
  );
}
