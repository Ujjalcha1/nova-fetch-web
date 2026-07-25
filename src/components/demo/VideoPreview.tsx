"use client";

import Image from "next/image";
import { demoVideo } from "@/data/demoVideo";
import { GlassCard } from "@/components/ui";
import QualitySelector from "./QualitySelector";
import DownloadButtons from "./DownloadButtons";

interface Props {
  quality: string;
  setQuality: (quality: string) => void;
}

export default function VideoPreview({ quality, setQuality }: Props) {
  return (
    <GlassCard className="overflow-hidden p-6">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={demoVideo.thumbnail}
          alt={demoVideo.title}
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">{demoVideo.title}</h3>

      <p className="mt-2 text-gray-400">
        {demoVideo.channel} • {demoVideo.duration}
      </p>

      <QualitySelector
        qualities={demoVideo.qualities}
        selected={quality}
        onChange={setQuality}
      />

      <DownloadButtons />
    </GlassCard>
  );
}
