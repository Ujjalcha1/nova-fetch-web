"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
        >
          <ChevronDown className="h-5 w-5 text-violet-400" aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="px-6 pb-6 leading-7 text-gray-400">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
