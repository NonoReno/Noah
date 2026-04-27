"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LINES = [
  "MAYINA imagine des maillots de bain",
  "minimalistes, durables et confortables.",
  "Des pièces pensées pour accompagner",
  "le corps dans le temps,",
  "résister à l'été",
  "et rester belles saison après saison.",
];

export function Manifeste() {
  return (
    <section className="relative bg-sand py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <p className="eyebrow text-stone mb-6">Manifeste · 01</p>
          <div className="w-12 h-px bg-orange mb-10" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-12">
            Moins de modèles.
            <br />
            <em className="text-kaki">Plus de qualité.</em>
          </h2>

          <div className="space-y-1 max-w-md">
            {LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-base lg:text-[17px] leading-relaxed text-ink-2"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <p className="mt-12 font-serif italic text-2xl text-kaki">
            L'essentiel, parfaitement maîtrisé.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <a href="/about" className="slink">
              Notre histoire
            </a>
            <span className="text-stone text-[0.6rem] tracking-widest2 uppercase">
              Depuis 2024
            </span>
          </div>
        </div>

        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=85"
            alt="Portrait"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-sand pointer-events-none">
            <p className="font-serif italic text-xl">Côte atlantique</p>
            <p className="eyebrow text-[0.55rem] opacity-80">N°01 / 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
