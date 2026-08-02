import type { Metadata } from "next";

import { features } from "@/data/features";
import {
  DOWNLOAD_URL,
  RELEASE_NOTES_URL,
  WINDOWS_PLATFORM,
  WINDOWS_VERSION,
} from "@/lib/downloads";
import { siteConfig } from "@/lib/site";

/**
 * Resolves a site-relative path to an absolute URL.
 * Always uses the production origin from `siteConfig`.
 */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export interface PageSeoOptions {
  /** Unique, keyword-relevant <title>. The layout template appends " | Nova Fetch". */
  title: string;
  /** Unique meta description, ~150–160 characters. */
  description: string;
  /** Optional page-specific keywords (never stuffed). */
  keywords?: string[];
  /** Canonical path, e.g. "/download". */
  path: string;
  /** Render the title as-is (no template suffix). Used for the homepage. */
  absoluteTitle?: boolean;
}

/**
 * Builds complete, page-unique metadata. Pages fully overwrite the layout's
 * nested `openGraph` / `twitter` / `robots` objects, so this helper returns a
 * complete object for every page instead of relying on inheritance.
 */
export function pageMetadata({
  title,
  description,
  keywords,
  path,
  absoluteTitle = false,
}: PageSeoOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // Must be an absolute URL for Twitter.
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Organization schema — global site identity. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.supportEmail,
  founder: {
    "@type": "Person",
    name: siteConfig.creator,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.supportEmail,
    contactType: "customer support",
    url: absoluteUrl("/contact"),
  },
} as const;

/** WebSite schema — global site identity. */
export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
} as const;

/**
 * SoftwareApplication schema describing the Nova Fetch desktop app.
 * Built entirely from in-repo data — no ratings, reviews or invented stats.
 */
export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Download Manager",
  operatingSystem: WINDOWS_PLATFORM,
  softwareVersion: WINDOWS_VERSION,
  url: absoluteUrl("/download"),
  downloadUrl: absoluteUrl(DOWNLOAD_URL),
  releaseNotes: absoluteUrl(RELEASE_NOTES_URL),
  featureList: features.map((feature) => feature.title),
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: siteConfig.creator,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.supportEmail,
    contactType: "customer support",
  },
} as const;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList schema — rendered on every sub-page. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema — rendered on the FAQ page where the content is visible. */
export function faqPageJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** WebPage schema — rendered on every page. */
export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    url: absoluteUrl(options.path),
    description: options.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: "en",
  };
}
