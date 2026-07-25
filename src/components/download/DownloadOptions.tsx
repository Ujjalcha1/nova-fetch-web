import Link from "next/link";
import { Download, Star } from "lucide-react";
import { downloads } from "@/data/downloads";

export default function DownloadOptions() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black text-white">Download Options</h2>

          <p className="mt-4 text-gray-400">
            Choose the version that best fits your needs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {downloads.map((item) => (
            <div
              key={item.filename}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {item.version} • {item.size} • {item.architecture}
                  </p>
                </div>

                {item.recommended && (
                  <span className="flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                    <Star size={16} />
                    Recommended
                  </span>
                )}
              </div>

              <Link
                href={`/downloads/${item.filename}`}
                className="mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3 font-semibold text-white transition hover:scale-105"
              >
                <Download className="mr-3" size={20} />
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
