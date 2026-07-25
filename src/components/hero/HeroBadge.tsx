const badges = ["4K", "Playlist", "Audio", "Subtitle", "No Ads", "100% Free"];

export default function HeroBadge() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {badges.map((badge) => (
        <div
          key={badge}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
        >
          {badge}
        </div>
      ))}
    </div>
  );
}
