import {
  CheckCircle2,
  Languages,
  ListVideo,
  Music4,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: CheckCircle2,
    text: "4K Video",
  },
  {
    icon: ListVideo,
    text: "Batch Downloads",
  },
  {
    icon: Music4,
    text: "MP3 Audio",
  },
  {
    icon: Languages,
    text: "Subtitles",
  },
  {
    icon: ShieldCheck,
    text: "No Ads",
  },
];

export default function HeroBadges() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.text}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
          >
            <Icon className="h-4 w-4 text-violet-400" />

            {item.text}
          </div>
        );
      })}
    </div>
  );
}
