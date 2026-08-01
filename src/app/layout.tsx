import type { Metadata, Viewport } from "next";

import "./globals.css";
import { siteConfig } from "@/lib/site";
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

  icons: {
    icon: [
      {
        url: "/logos/logo.png",
      },
    ],
    apple: [
      {
        url: "/logos/logo.png",
      },
    ],
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows 10/11",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="fixed inset-0 -z-10">
          <Aurora />
        </div>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
