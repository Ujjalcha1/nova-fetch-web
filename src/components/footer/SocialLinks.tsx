import Link from "next/link";
import { socialLinks } from "@/data/footer";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-violet-500 hover:bg-violet-500/20"
          >
            <Icon className="h-5 w-5 text-white" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
