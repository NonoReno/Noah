"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = [
  "ECONYL",
  "ESSENTIEL",
  "KAKI",
  "RIB GILI",
  "DURABLE",
  "SLOW",
  "ÉTÉ",
  "MATIÈRE",
];

export function Kinetic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative bg-sand py-32 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <p className="eyebrow text-stone mb-4">Univers Mayina</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide max-w-2xl">
          Le geste avant la matière. <em className="text-orange">La matière</em> avant la pièce.
        </h2>
      </div>

      <motion.div style={{ x: x1 }} className="will-change-transform">
        <div className="flex items-center gap-16 whitespace-nowrap">
          {[...WORDS, ...WORDS].map((word, i) => (
            <span
              key={`a-${i}`}
              className="ticker-item inline-flex items-center gap-16"
            >
              <span className="ticker-text">{word}</span>
              <span className="ticker-sep" />
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="will-change-transform mt-6 lg:mt-10 opacity-90"
      >
        <div className="flex items-center gap-16 whitespace-nowrap">
          {[...WORDS, ...WORDS].reverse().map((word, i) => (
            <span
              key={`b-${i}`}
              className="ticker-item inline-flex items-center gap-16"
            >
              <span className="ticker-text">{word}</span>
              <span className="ticker-sep" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
