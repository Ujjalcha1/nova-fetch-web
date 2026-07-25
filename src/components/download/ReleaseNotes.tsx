import { Check } from "lucide-react";
import { releaseNotes } from "@/data/release-notes";

export default function ReleaseNotes() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">What's New</h2>

      <div className="space-y-4">
        {releaseNotes.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-400" />

            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
