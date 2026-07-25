import Badge from "@/components/ui/Badge";
import HeroButtons from "./HeroButtons";
import HeroBadges from "./HeroBadges";
import HeroStats from "./HeroStats";
import SplitText from "@/reactbits/SplitText/SplitText";

export default function HeroContent() {
  return (
    <div>
      <Badge>🚀 The fastest downloader powered by yt-dlp + FFmpeg</Badge>

      <SplitText text="Download Videos Faster Than Ever" />

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Nova Fetch lets you download videos, playlists, subtitles and audio in
        the highest quality with a beautiful Windows-native experience.
      </p>

      <HeroButtons />

      <HeroBadges />

      <HeroStats />
    </div>
  );
}
