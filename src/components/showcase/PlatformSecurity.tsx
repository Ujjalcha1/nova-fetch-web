import { Monitor, ShieldCheck } from "lucide-react";

import { platforms, securityBadges } from "@/data/showcase";
import { GlassCard } from "@/components/ui";

export default function PlatformSecurity() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard className="p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500">
            <Monitor className="h-5 w-5 text-white" aria-hidden="true" />
          </div>

          <h3 className="text-xl font-bold text-white">Supported Platforms</h3>
        </div>

        <ul className="mt-6 space-y-3">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="font-medium text-white">{platform.name}</span>

              <span className="text-sm text-gray-400">{platform.detail}</span>
            </li>
          ))}

          <li className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="font-medium text-white">Architecture</span>

            <span className="text-sm text-gray-400">x64</span>
          </li>
        </ul>
      </GlassCard>

      <GlassCard className="p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500">
            <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
          </div>

          <h3 className="text-xl font-bold text-white">Security</h3>
        </div>

        <ul className="mt-6 space-y-3">
          {securityBadges.map((badge) => (
            <li
              key={badge.title}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

              <div>
                <p className="font-medium text-white">{badge.title}</p>

                <p className="text-sm text-gray-400">{badge.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
