import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const pages = [
  "",
  "/features",
  "/download",
  "/faq",
  "/support",
  "/changelog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
  }));
}
