import Badge from "@/components/ui/Badge";
import HeroButtons from "./HeroButtons";
import HeroBadges from "./HeroBadges";
import HeroStats from "./HeroStats";
import SplitText from "@/components/reactbits/SplitText";

export default function HeroContent() {
  return (
    <div className="text-center">
      <Badge>🚀 The fastest, most secure downloader for Windows</Badge>

      <SplitText text="Download Videos Faster Than Ever" />

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Nova Fetch lets you download videos, audio and subtitles in the highest
        quality with a beautiful Windows-native experience.
      </p>

      <HeroButtons />

      <HeroBadges />

      <HeroStats />
    </div>
  );
}
