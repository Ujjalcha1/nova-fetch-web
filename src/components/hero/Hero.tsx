import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section
      className="
    relative
    overflow-hidden
    pt-32
    pb-24
  "
    >
      <Section
        className="overflow-hidden pt-20 lg:pt-32"
        containerClassName="relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="absolute right-10 top-32 h-75 w-75 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroPreview />
        </div>
      </Section>
    </section>
  );
}
