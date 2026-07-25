import Link from "next/link";
import { Download, ShieldCheck, Cpu } from "lucide-react";

export default function DownloadHero() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-violet-500/10 px-5 py-2 text-violet-400">
            Latest Version
          </span>

          <h1 className="mt-8 text-6xl font-black text-white">
            Download Nova Fetch
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Fast, secure and modern video downloader for Windows. Download
            videos, playlists, audio and subtitles effortlessly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/downloads/NovaFetchSetup.exe"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              <Download className="mr-3" size={22} />
              Download v1.0.0
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Digitally Signed
            </div>

            <div className="flex items-center gap-2">
              <Cpu size={18} />
              Windows 10 / 11
            </div>

            <div>Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
}
