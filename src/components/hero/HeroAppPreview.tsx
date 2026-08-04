import {
  Captions,
  CheckCircle2,
  Clock,
  Download,
  Film,
  FolderDown,
  Gauge,
  ListVideo,
  Monitor,
  Music4,
  Zap,
} from "lucide-react";

const categories = [
  { label: "Videos", count: 3, icon: ListVideo, active: true },
  { label: "Audio", count: 1, icon: Music4, active: false },
  { label: "Subtitles", count: 2, icon: Captions, active: false },
];

const queue = [
  {
    title: "Big Buck Bunny — 4K HDR",
    category: "Video · 4K",
    icon: Film,
    progress: 72,
    speed: "24.6 MB/s",
    eta: "00:14 left",
    size: "412 MB",
  },
  {
    title: "Lo-fi Study Mix — MP3",
    category: "Audio · 320 kbps",
    icon: Music4,
    progress: 34,
    speed: "8.2 MB/s",
    eta: "01:02 left",
    size: "96 MB",
  },
  {
    title: "Documentary — English SRT",
    category: "Subtitles",
    icon: Captions,
    progress: 0,
    queued: true,
  },
];

const completed = [
  { title: "Nova Fetch Launch Trailer", size: "128 MB" },
  { title: "Nature Reel — 1080p", size: "1.2 GB" },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function HeroAppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-violet-600/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-violet-950/40 backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3.5">
          <span aria-hidden="true" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </span>

          <span className="ml-3 flex items-center gap-2 text-sm font-semibold text-white">
            <Monitor className="h-4 w-4 text-violet-400" aria-hidden="true" />
            Nova Fetch
          </span>

          <span className="ml-auto rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-violet-300">
            v1.0.0
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* Paste URL row */}
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 pl-4">
            <span className="flex-1 truncate text-sm text-gray-500" aria-hidden="true">
              https://youtube.com/watch?v=…
            </span>

            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-violet-600 to-fuchsia-500 px-3.5 py-2 text-xs font-semibold text-white"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Add
            </span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <span
                  key={category.label}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
                    category.active
                      ? "border border-violet-500/40 bg-violet-500/15 text-violet-200"
                      : "border border-white/10 bg-white/5 text-gray-400"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {category.label}
                  <span className="opacity-60">{category.count}</span>
                </span>
              );
            })}
          </div>

          {/* Queue */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Download Queue
            </p>

            {queue.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-3.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>

                    {item.queued ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-400">
                        Queued
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-white">
                        {item.progress}%
                      </span>
                    )}
                  </div>

                  {!item.queued && (
                    <div className="mt-3 space-y-2">
                      <ProgressBar value={item.progress!} />

                      <div className="flex items-center justify-between text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Zap className="h-3 w-3 text-violet-400" aria-hidden="true" />
                          {item.speed}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {item.eta}
                        </span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completed */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Completed
            </p>

            <div className="space-y-2">
              {completed.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5"
                >
                  <CheckCircle2
                    className="h-4.5 w-4.5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />

                  <p className="min-w-0 flex-1 truncate text-sm text-gray-300">
                    {item.title}
                  </p>

                  <span className="text-[11px] text-gray-500">{item.size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
              Total 32.8 MB/s
            </span>

            <span className="flex items-center gap-1.5">
              <FolderDown className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
              2 downloading · 1 queued
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
