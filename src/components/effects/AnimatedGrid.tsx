"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Vertical Lines */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Horizontal Lines */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          y: [-200, 800],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          h-[350px]
          w-[1px]
          bg-gradient-to-b
          from-transparent
          via-violet-500
          to-transparent
          opacity-40
        "
      />
    </div>
  );
}
