"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Spotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-500/15
        blur-[140px]
      "
    />
  );
}
