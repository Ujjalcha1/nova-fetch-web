"use client";

import { startDownload } from "@/lib/analytics/download";

interface DownloadLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  version: string;
  fileName: string;
}

export default function DownloadLink({
  version,
  fileName,
  ...rest
}: DownloadLinkProps) {
  return (
    <a
      {...rest}
      onClick={(event) => {
        // Suppress the anchor's default action so the download is
        // triggered only after analytics finishes.
        event.preventDefault();
        if (!rest.href) {
          return;
        }
        void startDownload(rest.href, version, fileName);
      }}
    />
  );
}
