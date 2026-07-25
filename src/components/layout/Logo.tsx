import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-lg font-bold text-white shadow-lg">
        N
      </div>

      <div>
        <p className="text-lg font-bold text-white">Nova Fetch</p>

        <p className="text-xs text-gray-400">Video Downloader</p>
      </div>
    </Link>
  );
}
