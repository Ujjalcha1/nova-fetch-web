"use client";

import { screenshots } from "@/data/screenshots";
import ScreenshotCard from "./ScreenshotCard";

export default function ScreenshotCarousel() {
  return (
    <div
      className="
        flex
        gap-8
        overflow-x-auto
        pb-4
        snap-x
        snap-mandatory
        scrollbar-hide
      "
    >
      {screenshots.map((item) => (
        <div key={item.title} className="snap-center">
          <ScreenshotCard {...item} />
        </div>
      ))}
    </div>
  );
}
