"use client";

import {
  Download,
  Gauge,
  Languages,
  ListVideo,
  Music4,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";
import type { FeatureIcon } from "@/data/features";

const iconMap = {
  download: Download,
  playlist: ListVideo,
  audio: Music4,
  subtitle: Languages,
  secure: ShieldCheck,
  speed: Gauge,
};

interface Props {
  title: string;
  description: string;
  icon: FeatureIcon;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  className = "",
}: Props) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={className}
    >
      <GlassCard className="group relative h-full overflow-hidden p-8">
        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:scale-150" />

        <div className="relative">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
            <Icon className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white">{title}</h3>

          <p className="mt-4 leading-7 text-gray-400">{description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
