"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50K+",
    label: "Downloads",
  },
  {
    value: "4.9★",
    label: "User Rating",
  },
  {
    value: "100+",
    label: "Supported Sites",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2 * index,
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">{stat.value}</h3>

          <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
