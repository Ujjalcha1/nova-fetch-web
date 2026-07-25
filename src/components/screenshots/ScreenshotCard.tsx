"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import DeviceFrame from "./DeviceFrame";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ScreenshotCard({ title, description, image }: Props) {
  return (
    <SpotlightCard>
      <DeviceFrame>
        <Image
          src={image}
          alt={title}
          width={1400}
          height={900}
          className="w-full object-cover"
        />
      </DeviceFrame>

      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>

      <p className="mt-3 text-gray-400">{description}</p>
    </SpotlightCard>
  );
}
