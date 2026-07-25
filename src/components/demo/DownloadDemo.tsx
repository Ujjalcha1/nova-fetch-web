"use client";

import { useCallback, useState } from "react";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import UrlInput from "./UrlInput";
import FakeLoader from "./FakeLoader";
import VideoPreview from "./VideoPreview";

export default function DownloadDemo() {
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const [quality, setQuality] = useState("1080p");

  const handleFetch = useCallback(() => {
    if (!url.trim()) return;

    setLoading(true);
    setLoaded(false);

    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1800);
  }, [url]);

  return (
    <Section id="demo">
      <Heading
        badge="LIVE DEMO"
        title="See how Nova Fetch works"
        description="Experience the download workflow before installing the desktop application."
      />

      <div className="mx-auto mt-16 max-w-5xl">
        <UrlInput value={url} onChange={setUrl} onFetch={handleFetch} />

        <div className="mt-10">
          {loading && <FakeLoader />}

          {!loading && loaded && (
            <VideoPreview quality={quality} setQuality={setQuality} />
          )}

          {!loading && !loaded && (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-16 text-center">
              <h3 className="text-2xl font-semibold text-white">
                Paste a video URL
              </h3>

              <p className="mt-4 text-gray-400">
                Click <strong>Fetch</strong> to preview the download
                information.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
