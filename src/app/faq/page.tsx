import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

import { faqs } from "@/data/faqs";
import FAQItem from "@/components/faq/FAQItem";
import JsonLd from "@/components/seo/JsonLd";
import { RELEASE_NOTES_URL } from "@/lib/downloads";
import { siteConfig } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Nova Fetch — what it is, supported platforms, pricing, resume support, security and updates.",
  keywords: [
    "Nova Fetch FAQ",
    "Is Nova Fetch free",
    "Nova Fetch supported platforms",
    "Nova Fetch help",
  ],
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: "Frequently Asked Questions",
          description: "Answers to common questions about Nova Fetch.",
          path: "/faq",
        })}
      />
      <Container className="py-24">
        <Heading
          badge="FAQ"
          title="Frequently Asked Questions"
          level={1}
          description="Everything you need to know about Nova Fetch."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Still have questions? Check the{" "}
            <a
              href={RELEASE_NOTES_URL}
              className="font-medium text-violet-400 transition hover:text-violet-300"
            >
              release notes
            </a>{" "}
            or contact{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-violet-400 transition hover:text-violet-300"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>

          <Button asChild className="mt-8">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </Container>
    </main>
  );
}
