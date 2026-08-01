import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

import { faqs } from "@/data/faqs";
import FAQItem from "@/components/faq/FAQItem";
import { RELEASE_NOTES_URL } from "@/lib/downloads";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <main>
      <Container className="py-24">
        <Heading
          badge="FAQ"
          title="Frequently Asked Questions"
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
