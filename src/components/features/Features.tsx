import { features } from "@/data/features";
import { Heading, GlassCard } from "@/components/ui";

export default function Features() {
  return (
    <section id="features">
      <Heading title="Everything you need" />

      <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <GlassCard key={feature.title} className="p-8">
            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>

            <p className="mt-4 leading-7 text-gray-400">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
