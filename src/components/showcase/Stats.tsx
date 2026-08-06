import { stats } from "@/data/showcase";

import DownloadStat from "./DownloadStat";
import RatingStat from "./RatingStat";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      <DownloadStat />

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
        >
          <p className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-3xl font-black text-transparent">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
        </div>
      ))}

      <RatingStat />
    </div>
  );
}
