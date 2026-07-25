import type { Metadata } from "next";

import "./globals.css";
import Aurora from "@/reactbits/Aurora/Aurora";
import { siteConfig } from "@/lib/site";
import { AuroraBackground, Spotlight } from "@/components/reactbits";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
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
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Aurora colorStops={["#7c3aed", "#2563eb", "#ec4899"]} />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
