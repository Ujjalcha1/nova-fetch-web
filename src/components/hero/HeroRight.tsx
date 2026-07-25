"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[140px]" />

      {/* App Window */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020] shadow-[0_40px_120px_rgba(124,58,237,.35)]">
        <Image
          src="/screenshots/home.jpg"
          alt="Nova Fetch"
          width={900}
          height={600}
          priority
          className="rounded-3xl"
        />
      </div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-white">50K+</h3>

        <p className="text-sm text-gray-400">Downloads</p>
      </motion.div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -right-8 bottom-10 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-white">4.9★</h3>

        <p className="text-sm text-gray-400">Rating</p>
      </motion.div>
    </motion.div>
  );
}
