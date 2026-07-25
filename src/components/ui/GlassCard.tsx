import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(139,92,246,0.15)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
