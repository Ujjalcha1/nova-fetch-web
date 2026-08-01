"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import BackgroundGlow from "./BackgroundGlow";
import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <Section id="download" className="relative overflow-hidden">
      <BackgroundGlow />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300"
        >
          🚀 Ready to Download Faster?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl"
        >
          Download videos
          <br />
          <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            without limits.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Download videos, audio and subtitles with a fast, secure and
          modern desktop experience.
        </motion.p>

        <CTAButtons />
      </div>
    </Section>
  );
}
