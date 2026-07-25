"use client";

import { motion } from "framer-motion";
import {
  Download,
  Gauge,
  Languages,
  ListVideo,
  Music4,
  ShieldCheck,
} from "lucide-react";
import { FeatureIcon } from "@/data/features";

const iconMap = {
  gauge: Gauge,
  playlist: ListVideo,
  music: Music4,
  subtitle: Languages,
  shield: ShieldCheck,
  download: Download,
} satisfies Record<
  FeatureIcon,
  React.ComponentType<{ size?: number; className?: string }>
>;

interface Props {
  title: string;
  description: string;
  icon: FeatureIcon;
  className?: string;
}

export default function BentoCard({
  title,
  description,
  icon,
  className = "",
}: Props) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        ${className}
      `}
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
          <Icon size={30} className="text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
