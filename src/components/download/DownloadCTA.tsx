"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import LatestRelease from "./LatestRelease";
import DownloadButton from "./DownloadButton";

export default function DownloadCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-14 text-center backdrop-blur-2xl"
        >
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-400">
            Download Nova Fetch
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Ready to Download
            <br />
            Videos in Seconds?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Install Nova Fetch today and enjoy blazing fast downloads,
            playlists, subtitles, audio conversion and a beautiful desktop
            experience.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <LatestRelease />
            <DownloadButton />
            <Link
              href="/features"
              className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-violet-500/50"
            >
              Explore Features
              <ArrowRight className="ml-3" size={20} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>✓ Free Forever</span>

            <span>✓ No Ads</span>

            <span>✓ Windows 10 / 11</span>

            <span>✓ 4K Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
