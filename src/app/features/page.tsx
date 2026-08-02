import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { GlassCard } from "@/components/ui";

import { features } from "@/data/features";
import { Comparison } from "@/components/showcase";
import { CTA } from "@/components/cta";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Features",
  description:
    "Explore Nova Fetch features: multi-threaded high-speed downloads, resume support, a smart download queue, batch downloads, subtitle downloading and a clean, modern Windows interface.",
  keywords: [
    "Nova Fetch features",
    "Video downloader features",
    "Download manager queue",
    "Batch downloads",
    "Resume downloads",
    "Subtitle downloader",
  ],
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Features",
          description:
            "Everything Nova Fetch offers: fast, multi-threaded downloads with queue and resume support.",
          path: "/features",
        })}
      />
      <Container className="py-24">
        <Heading
          badge="FEATURES"
          title="Everything you need in one downloader"
          level={1}
          description="Powerful features wrapped in a clean, modern interface."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="p-8">
              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Nova Fetch vs. the alternatives
          </h2>

          <div className="mt-10">
            <Comparison />
          </div>
        </div>
      </Container>

      <CTA />
    </main>
  );
}
