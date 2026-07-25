import { requirements } from "@/data/requirements";

export default function SystemRequirements() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        System Requirements
      </h2>

      <div className="space-y-4">
        {requirements.map((item) => (
          <div
            key={item.title}
            className="flex justify-between border-b border-white/10 pb-3"
          >
            <span className="text-gray-400">{item.title}</span>

            <span className="font-medium text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
