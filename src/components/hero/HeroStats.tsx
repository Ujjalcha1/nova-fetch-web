import { Download, ShieldCheck, Monitor } from "lucide-react";

const stats = [
  {
    icon: Download,
    value: "Free",
    label: "Forever, no limits",
  },
  {
    icon: ShieldCheck,
    value: "No ads",
    label: "Or tracking, ever",
  },
  {
    icon: Monitor,
    value: "Native",
    label: "Windows 10 & 11",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-xl"
          >
            <Icon className="h-5 w-5 text-violet-400" aria-hidden="true" />

            <p className="mt-3 text-lg font-bold text-white">{stat.value}</p>

            <p className="mt-1 text-sm leading-5 text-gray-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
