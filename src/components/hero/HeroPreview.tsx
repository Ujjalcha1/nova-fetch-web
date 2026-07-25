"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";

export default function HeroPreview() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative"
    >
      {/* Purple Glow */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-violet-600/20 blur-3xl" />

      {/* Window */}
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 shadow-2xl backdrop-blur-xl">
        {/* Window Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-gray-400">Nova Fetch</span>
        </div>

        {/* Screenshot */}
        <Image
          src="/screenshots/home.jpg"
          alt="Nova Fetch"
          width={1400}
          height={900}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full object-cover"
        />
      </div>

      {/* Downloads Card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Download className="text-violet-400" />

          <div>
            <h4 className="font-bold text-white">50K+</h4>

            <p className="text-xs text-gray-400">Downloads</p>
          </div>
        </div>
      </motion.div>

      {/* Rating Card */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -bottom-6 right-8 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Star className="fill-yellow-400 text-yellow-400" />

          <div>
            <h4 className="font-bold text-white">4.9★</h4>

            <p className="text-xs text-gray-400">User Rating</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
