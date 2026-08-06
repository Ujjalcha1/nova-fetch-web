"use client";

import { useEffect, useState } from "react";

import { formatDownloadCount, getDownloadCount } from "@/lib/download-count";

export default function DownloadStat() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    getDownloadCount()
      .then((result) => {
        if (active) {
          setCount(result);
        }
      })
      .catch(() => {
        if (active) {
          setCount(null);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const value = count !== null ? formatDownloadCount(count) : "–";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
      <p className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-3xl font-black text-transparent">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-400">Downloads</p>
    </div>
  );
}
