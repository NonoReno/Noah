"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const VOIX = [
  {
    quote:
      "Je porte mon Triangle kaki depuis trois étés. Il n'a pas bougé. Et je crois que c'est ça, le vrai luxe.",
    name: "Camille R.",
    place: "Paris · 32 ans",
  },
  {
    quote:
      "Une coupe parfaite, des matières qu'on sent dès qu'on les enfile. Mayina a redéfini ce que j'attends d'un maillot.",
    name: "Sophie B.",
    place: "Marseille · 38 ans",
  },
  {
    quote:
      "J'ai acheté l'Essentiel pour un été. Je l'ai gardé pour la vie.",
    name: "Léa D.",
    place: "Bordeaux · 29 ans",
  },
  {
    quote:
      "La sobriété portée à un niveau d'art. Rare aujourd'hui.",
    name: "Inès F.",
    place: "Lyon · 41 ans",
  },
];

export function Temoignages() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % VOIX.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-warm py-40 lg:py-56 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none select-none opacity-[0.04]">
        <span
          className="font-serif italic text-[16rem] lg:text-[28rem] leading-none text-kaki"
          aria-hidden
        >
          ”
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <p className="eyebrow text-stone text-center mb-10">Voix</p>

        <div className="min-h-[18rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="max-w-4xl text-center"
            >
              <p className="font-serif italic text-3xl md:text-5xl lg:text-[3.6rem] font-light leading-[1.15] text-ink-1">
                « {VOIX[i].quote} »
              </p>
              <footer className="mt-12 eyebrow text-stone">
                — {VOIX[i].name} · {VOIX[i].place}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          {VOIX.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Témoignage ${k + 1}`}
              className={`h-px transition-all duration-700 ${
                k === i ? "w-12 bg-kaki" : "w-6 bg-stone/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
