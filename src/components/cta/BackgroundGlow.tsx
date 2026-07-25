"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]"
      />
    </>
  );
}
