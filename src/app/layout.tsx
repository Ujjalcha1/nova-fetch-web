import type { Metadata, Viewport } from "next";

import "./globals.css";
import { siteConfig } from "@/lib/site";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { Aurora, Spotlight } from "@/components/reactbits";

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

  applicationName: siteConfig.name,

  icons: {
    icon: [
      { url: "/logos/logo.png", sizes: "500x500", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logos/logo.png", sizes: "500x500", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  other: {
    "contact:email": siteConfig.supportEmail,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd} />
        <div className="fixed inset-0 -z-10">
          <Aurora />
        </div>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
