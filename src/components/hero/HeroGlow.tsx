"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-40 h-75 w-75 rounded-full bg-fuchsia-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-[110px]"
      />
    </div>
  );
}
