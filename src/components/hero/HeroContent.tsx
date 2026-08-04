import { Monitor } from "lucide-react";

import Badge from "@/components/ui/Badge";
import SplitText from "@/components/reactbits/SplitText";
import { WINDOWS_PLATFORM, WINDOWS_VERSION } from "@/lib/downloads";

import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="text-left">
      <Badge>🚀 The fastest, most secure downloader for Windows</Badge>

      <SplitText
        text="Download videos faster than ever"
        tag="h1"
        textAlign="left"
        className="mt-6 pb-[0.08em] text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-6xl"
      />

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        Paste any link and Nova Fetch saves videos, audio and subtitles in the
        highest quality — with a fast, secure, Windows-native experience.
      </p>

      <HeroButtons />

      <HeroTrust />

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
          <Monitor className="h-4 w-4 text-violet-400" aria-hidden="true" />
          {WINDOWS_PLATFORM}
        </span>

        <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
          {WINDOWS_VERSION}
        </span>
      </div>

      <HeroStats />
    </div>
  );
}
