"use client";

import { logos } from "@/data/logos";

export default function LogoCloud() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-gray-500">
          Trusted by Thousands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {logos.map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                text-sm
                text-gray-300
                backdrop-blur-xl
                transition
                hover:border-violet-500/40
                hover:text-white
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
