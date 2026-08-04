import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroAppPreview from "./HeroAppPreview";
import HeroGlow from "./HeroGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroGlow />

      <Section
        className="pt-20 pb-16 lg:pt-28 lg:pb-24"
        containerClassName="relative"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <HeroContent />
          <HeroAppPreview />
        </div>
      </Section>
    </section>
  );
}
