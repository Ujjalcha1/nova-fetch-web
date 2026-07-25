"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
