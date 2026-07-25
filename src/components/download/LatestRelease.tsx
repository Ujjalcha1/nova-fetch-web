"use client";

import { Calendar } from "lucide-react";

import { useLatestRelease } from "@/hooks/useLatestRelease";

export default function LatestRelease() {
  const { release, isLoading } = useLatestRelease();

  if (isLoading) {
    return <p className="text-gray-400">Loading latest version...</p>;
  }

  if (!release) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-3xl font-bold text-white">{release.tag_name}</h2>

      <p className="mt-3 text-gray-400">{release.name}</p>

      <div className="mt-6 flex items-center gap-2 text-gray-400">
        <Calendar size={18} />

        {new Date(release.published_at).toLocaleDateString()}
      </div>
    </div>
  );
}
