"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Download,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import type { WhyIcon } from "@/data/why";
import GlassCard from "@/components/ui/GlassCard";

const iconMap = {
  zap: Zap,
  shield: ShieldCheck,
  download: Download,
  monitor: MonitorSmartphone,
  cpu: Cpu,
  sparkles: Sparkles,
};

interface Props {
  title: string;
  description: string;
  icon: WhyIcon;
}

export default function WhyCard({ title, description, icon }: Props) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <GlassCard className="group h-full p-8 transition-all duration-300 hover:border-violet-500/30">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
          <Icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-gray-400">{description}</p>
      </GlassCard>
    </motion.div>
  );
}
