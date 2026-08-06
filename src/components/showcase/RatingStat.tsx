"use client";

import { useEffect, useState } from "react";

import {
  formatAverageRating,
  getRatingSummary,
  type RatingSummary,
} from "@/lib/ratings";

export default function RatingStat() {
  const [summary, setSummary] = useState<RatingSummary | null>(null);

  useEffect(() => {
    let active = true;

    getRatingSummary()
      .then((result) => {
        if (active) {
          setSummary(result);
        }
      })
      .catch(() => {
        if (active) {
          setSummary(null);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const rating = summary ? formatAverageRating(summary.average) : "–";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
      <p className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-3xl font-black text-transparent">
        {rating}★
      </p>

      <p className="mt-2 text-sm text-gray-400">User Rating</p>

      {/* <p className="mt-1 text-xs text-gray-500">
        {summary
          ? `${summary.totalRatings} ratings · ${summary.totalReviews} reviews`
          : "…"}
      </p> */}
    </div>
  );
}
