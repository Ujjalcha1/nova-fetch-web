import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading or using Nova Fetch, you agree to these Terms of Service. If you do not agree, please do not use the software.",
  },
  {
    title: "2. License",
    body: "Nova Fetch is provided to you free of charge for personal, non-commercial use. You may not resell, redistribute or modify the software without permission.",
  },
  {
    title: "3. Acceptable Use",
    body: "You agree to use Nova Fetch only for lawful purposes and in accordance with the terms of service of the websites you download from. Respect copyright and intellectual property rights.",
  },
  {
    title: "4. No Warranty",
    body: "The software is provided 'as is' without warranty of any kind, express or implied. We do not guarantee that Nova Fetch will be error-free or uninterrupted.",
  },
  {
    title: "5. Limitation of Liability",
    body: "To the maximum extent permitted by law, Nova Fetch and its creator shall not be liable for any indirect, incidental or consequential damages arising from the use of the software.",
  },
  {
    title: "6. Changes to These Terms",
    body: "We may revise these terms at any time. Continued use of Nova Fetch after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <Container className="py-24">
        <div className="mx-auto max-w-3xl">
          <Heading
            badge="TERMS"
            title="Terms of Service"
            description={`Last updated: August 2026 · ${siteConfig.name}`}
          />

          <div className="mt-16 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <p className="mt-4 leading-8 text-gray-400">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-white">7. Contact</h2>

              <p className="mt-4 leading-8 text-gray-400">
                Questions about these terms? Contact us at{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-medium text-violet-400 transition hover:text-violet-300"
                >
                  {siteConfig.supportEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
