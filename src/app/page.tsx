import type { Metadata } from "next";

import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import { WhyNovaFetch } from "@/components/why";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  pageMetadata,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd
        data={webPageJsonLd({
          name: siteConfig.title,
          description: siteConfig.description,
          path: "/",
        })}
      />
      <Navbar />
      <main>
        <Hero />
        <WhyNovaFetch />
        <Features />
        <Showcase />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
