import { GlassCard } from "@/components/ui";

export default function ChecksumCard() {
  return (
    <GlassCard className="p-8">
      <h2 className="text-2xl font-bold text-white">SHA-256</h2>

      <code className="mt-6 block overflow-x-auto rounded-xl bg-black/30 p-4 text-sm text-green-400">
        8a7d9c61a0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </code>
    </GlassCard>
  );
}
