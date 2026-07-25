import { features } from "@/data/features";
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  return (
    <div
      className="
        grid
        auto-rows-[260px]
        gap-6
        lg:grid-cols-4
      "
    >
      {features.map((feature) => (
        <BentoCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
