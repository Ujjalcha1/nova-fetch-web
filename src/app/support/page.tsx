import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { GlassCard } from "@/components/ui";
import { Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { faqs } from "@/data/faqs";
import FAQItem from "@/components/faq/FAQItem";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description:
    "Get help with Nova Fetch. Find quick answers in the FAQ, or contact email support — usually a response within 24 hours.",
  keywords: ["Nova Fetch support", "Nova Fetch help", "Nova Fetch contact"],
  path: "/support",
});

export default function SupportPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Support", path: "/support" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Support",
          description: "Get help with Nova Fetch via FAQ and email support.",
          path: "/support",
        })}
      />
      <Container className="py-24">
        <Heading
          badge="SUPPORT"
          title="How can we help?"
          level={1}
          description="Find quick answers below, or reach out and we'll get back to you."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          <GlassCard className="flex flex-col items-center p-8 text-center lg:col-span-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-500">
              <Mail className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Email Support
            </h3>

            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-4 break-all text-lg font-medium text-violet-300 transition hover:text-violet-400"
            >
              {siteConfig.supportEmail}
            </a>

            <p className="mt-4 text-sm text-gray-400">
              Response time: usually within 24 hours.
            </p>
          </GlassCard>

          <div className="lg:col-span-2">
            <div className="space-y-5">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
