"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/30
          blur-[140px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-fuchsia-500/25
          blur-[120px]
        "
      />

      {/* Light Beam */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-violet-500/50
          via-transparent
          to-transparent
        "
      />

      {/* Gradient Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#050816]
        "
      />
    </div>
  );
}
