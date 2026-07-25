import { features } from "@/data/features";
import MagicBento from "@/reactbits/MagicBento/MagicBento";
import { Heading } from "../ui";

export default function Features() {
  return (
    <section id="features">
      <Heading title="Everything you need" />

      <MagicBento items={features} />
    </section>
  );
}
