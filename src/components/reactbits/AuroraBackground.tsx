"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [100, -120, 80, 100],
          y: [60, -60, 20, 60],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[140px]"
      />
    </div>
  );
}
