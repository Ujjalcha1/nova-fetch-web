import { requirements } from "@/data/requirements";
import { GlassCard } from "@/components/ui";

export default function SystemRequirements() {
  return (
    <GlassCard className="p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        System Requirements
      </h2>

      <dl className="space-y-4">
        {requirements.map((item) => (
          <div
            key={item.title}
            className="flex justify-between border-b border-white/10 pb-3"
          >
            <dt className="text-gray-400">{item.title}</dt>

            <dd className="font-medium text-white">{item.value}</dd>
          </div>
        ))}
      </dl>
    </GlassCard>
  );
}
