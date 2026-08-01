import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "Nova Fetch is a desktop application that processes the links you provide locally on your device. We do not require an account, and we do not collect personal information such as your name, email address or payment details to use the software.",
  },
  {
    title: "2. How Your Data Is Used",
    body: "Download requests are handled directly by the application on your computer. Nova Fetch does not upload your download history or files to our servers.",
  },
  {
    title: "3. Analytics & Cookies",
    body: "The website uses no advertising trackers. We may collect anonymous, aggregate statistics about the number of downloads to improve the product, without identifying individual users.",
  },
  {
    title: "4. Third-Party Services",
    body: "The application connects directly to the websites you choose to download from. Those platforms have their own privacy policies, and we encourage you to review them.",
  },
  {
    title: "5. Your Rights",
    body: "You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at any time.",
  },
  {
    title: "6. Changes to This Policy",
    body: "We may update this privacy policy from time to time. We will post any changes on this page with a revised date.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Container className="py-24">
        <div className="mx-auto max-w-3xl">
          <Heading
            badge="PRIVACY"
            title="Privacy Policy"
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
              <h2 className="text-2xl font-bold text-white">
                7. Contact Us
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                If you have any questions about this privacy policy, reach out
                to us at{" "}
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
