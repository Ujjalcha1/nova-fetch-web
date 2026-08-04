import { CheckCircle2 } from "lucide-react";

const items = [
  "Free forever",
  "No ads or tracking",
  "Resume downloads",
];

export default function HeroTrust() {
  return (
    <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />

          {item}
        </li>
      ))}
    </ul>
  );
}
