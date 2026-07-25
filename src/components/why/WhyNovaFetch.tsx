import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { whyFeatures } from "@/data/why";
import WhyCard from "./WhyCard";

export default function WhyNovaFetch() {
  return (
    <Section id="why">
      <Heading
        badge="WHY NOVA FETCH"
        title="Everything you need in one downloader."
        description="Fast, secure and beautifully designed for Windows users."
      />

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {whyFeatures.map((feature) => (
          <WhyCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
