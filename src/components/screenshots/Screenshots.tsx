"use client";

import { useMemo, useState } from "react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { screenshots } from "@/data/screenshots";

import ScreenshotCard from "./ScreenshotCard";
import ScreenshotTabs from "./ScreenshotTabs";

export default function Screenshots() {
  const [active, setActive] = useState(screenshots[0].title);

  const current = useMemo(
    () => screenshots.find((item) => item.title === active) ?? screenshots[0],
    [active],
  );

  return (
    <Section id="screenshots">
      <Heading
        badge="SCREENSHOTS"
        title="A modern interface you'll love."
        description="Built for speed, clarity and simplicity."
      />

      <div className="mt-16">
        <ScreenshotTabs
          tabs={screenshots.map((s) => s.title)}
          active={active}
          onChange={setActive}
        />

        <div className="mx-auto max-w-5xl">
          <ScreenshotCard
            title={current.title}
            description={current.description}
            image={current.image}
          />
        </div>
      </div>
    </Section>
  );
}
