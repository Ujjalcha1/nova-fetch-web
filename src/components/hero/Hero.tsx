import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroGlow from "./HeroGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroGlow />

      <Section className="pt-36 pb-32" containerClassName="relative">
        <div className="mx-auto max-w-4xl">
          <HeroContent />
        </div>
      </Section>
    </section>
  );
}
