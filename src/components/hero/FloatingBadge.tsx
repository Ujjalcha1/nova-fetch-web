"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  className?: string;
}

export default function FloatingBadge({
  title,
  subtitle,
  icon,
  className = "",
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-2xl
        border border-white/10
        bg-black/50
        backdrop-blur-xl
        px-4
        py-3
        shadow-2xl
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {icon}

        <div>
          <p className="text-lg font-bold text-white">{title}</p>

          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
