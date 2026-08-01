import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import Stats from "./Stats";
import Workflow from "./Workflow";
import PlatformSecurity from "./PlatformSecurity";
import Comparison from "./Comparison";

export default function Showcase() {
  return (
    <Section id="how-it-works">
      <Heading
        badge="HOW IT WORKS"
        title="Downloading, made effortless"
        description="A clean workflow with the power you expect — and none of the clutter."
      />

      <div className="mt-16">
        <Stats />
      </div>

      <div className="mt-20">
        <Workflow />
      </div>

      <div className="mt-20">
        <PlatformSecurity />
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <Comparison />
      </div>
    </Section>
  );
}
