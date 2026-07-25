import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
    },
    {
      url: `${siteConfig.url}/download`,
    },
    {
      url: `${siteConfig.url}/blog`,
    },
    {
      url: `${siteConfig.url}/changelog`,
    },
    {
      url: `${siteConfig.url}/privacy`,
    },
    {
      url: `${siteConfig.url}/terms`,
    },
  ];
}
