import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { faqs } from "@/data/faqs";

import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Section id="faq">
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

      <div className="mt-12 text-center">
        <Link
          href="/faq"
          className="font-medium text-violet-400 transition hover:text-violet-300"
        >
          See all questions →
        </Link>
      </div>
    </Section>
  );
}
