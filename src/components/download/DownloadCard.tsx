"use client";

import { Download, FileText, Monitor } from "lucide-react";
import { Button, GlassCard } from "@/components/ui";
import { INSTALLER_FILENAME } from "@/lib/downloads";
import DownloadLink from "./DownloadLink";

interface Props {
  title: string;
  version: string;
  platform: string;
  architecture: string;
  size: string;
  description: string;
  downloadUrl: string;
  releaseNotesUrl: string;
}

export default function DownloadCard(props: Props) {
  const specRows = [
    { label: "Version", value: props.version },
    { label: "Platform", value: props.platform },
    { label: "Architecture", value: props.architecture },
    { label: "Installer Size", value: props.size },
  ];

  return (
    <GlassCard className="p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-500">
          <Monitor className="h-7 w-7 text-white" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">{props.title}</h3>

          <p className="mt-1 text-sm text-gray-400">{props.version}</p>
        </div>
      </div>

      <p className="mt-6 leading-7 text-gray-400">{props.description}</p>

      <dl className="mt-8 space-y-3">
        {specRows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border-b border-white/10 pb-3"
          >
            <dt className="text-gray-400">{row.label}</dt>

            <dd className="font-medium text-white">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild className="flex-1">
          <DownloadLink
            href={props.downloadUrl}
            version={props.version}
            fileName={INSTALLER_FILENAME}
          >
            <Download className="mr-2 h-5 w-5" aria-hidden="true" />
            Download for Windows
          </DownloadLink>
        </Button>

        <Button asChild variant="secondary" className="flex-1">
          <a href={props.releaseNotesUrl}>
            <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
            View Release Notes
          </a>
        </Button>
      </div>
    </GlassCard>
  );
}
