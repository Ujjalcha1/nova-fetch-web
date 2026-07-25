"use client";

import { motion } from "motion/react";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-1/2
        top-24
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-violet-600/20
        blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-20
        top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-fuchsia-500/15
        blur-[120px]
        "
      />
    </div>
  );
}
