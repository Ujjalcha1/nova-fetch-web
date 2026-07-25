export default function DownloadButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 md:flex-row">
      <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white">
        Download Video
      </button>

      <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white">
        Download MP3
      </button>
    </div>
  );
}
