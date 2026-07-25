import type { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
