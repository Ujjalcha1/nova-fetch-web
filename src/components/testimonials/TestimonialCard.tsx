"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Rating from "./Rating";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

interface Props {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  review,
  rating,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <SpotlightCard>
        <Rating rating={rating} />

        <p className="mt-6 leading-7 text-gray-300">"{review}"</p>

        <div className="mt-8 flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={56}
          height={56}
          sizes="56px"
          className="rounded-full"
        />

          <div>
            <h4 className="font-semibold text-white">{name}</h4>

            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
