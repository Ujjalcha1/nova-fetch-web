import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui";
import { Mail, Clock } from "lucide-react";

import { siteConfig } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the Nova Fetch team with questions, feedback or anything else. Reach us by email — we usually respond within 24 hours.",
  keywords: ["Contact Nova Fetch", "Nova Fetch email", "Nova Fetch feedback"],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Contact",
          description: "Contact the Nova Fetch team by email.",
          path: "/contact",
        })}
      />
      <Container className="py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>CONTACT</Badge>

          <h1 className="mt-6 text-5xl font-black text-white">Need help?</h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Questions, feedback or anything else — we&apos;d love to hear from you.
          </p>
        </div>

        <GlassCard className="mx-auto mt-16 max-w-xl p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-500">
            <Mail className="h-8 w-8 text-white" aria-hidden="true" />
          </div>

          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="mt-8 inline-block text-2xl font-bold text-white transition hover:text-violet-400"
          >
            📧 {siteConfig.supportEmail}
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
            <Clock className="h-4 w-4 text-violet-400" aria-hidden="true" />

            <span>
              Response time: <strong className="text-white">Usually within 24 hours.</strong>
            </span>
          </div>
        </GlassCard>
      </Container>
    </main>
  );
}
