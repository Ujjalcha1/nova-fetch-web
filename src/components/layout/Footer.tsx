import Link from "next/link";
import { GitBranch, Play, MessageCircle } from "lucide-react";
import { footerLinks } from "@/data/footerLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 font-bold text-white">
                N
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Nova Fetch</h3>

                <p className="text-sm text-gray-400">Fast Video Downloader</p>
              </div>
            </div>

            <p className="max-w-sm text-gray-400">
              Download videos, playlists, subtitles and audio with a modern,
              fast and beautiful desktop application.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                <GitBranch size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                <Play size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Product</h4>

            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Resources</h4>

            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Legal</h4>

            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-violet-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Nova Fetch. All rights reserved.</p>

          <p>Made with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
