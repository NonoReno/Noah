"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MATIERES = [
  {
    name: "ECONYL™",
    short: "Nylon régénéré",
    desc: "Tissu technique premium issu de nylon régénéré. Maintien irréprochable, résistance au sel, au chlore et aux UV — pour accompagner le corps plusieurs étés.",
    img: "https://images.unsplash.com/photo-1600298882525-5c04f3c80d15?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Repreve™",
    short: "Velours côtelé recyclé",
    desc: "Texture douce et distinctive. Fibre recyclée pour les séries limitées — une pièce mode à part entière avec une sensation tactile forte.",
    img: "https://images.unsplash.com/photo-1612464354283-3eb52e54e3ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rib Gili",
    short: "Côte premium",
    desc: "Relief subtil qui valorise naturellement la silhouette. Rendu reconnaissable, excellent maintien et souplesse parfaite.",
    img: "https://images.unsplash.com/photo-1574786527860-9bf65b9b4d8b?auto=format&fit=crop&w=900&q=85",
  },
];

export function Materiaux() {
  return (
    <section className="bg-kaki text-sand py-32 lg:py-44 relative overflow-hidden">
      <div className="sun-glow -top-40 -left-40 opacity-40" aria-hidden />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="eyebrow text-sand/60 mb-4">Les matières · 03</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-[1.05]">
              Choisies <em className="text-orange-3">avec soin.</em>
              <br />
              Pensées pour <em>durer.</em>
            </h2>
          </div>
          <p className="text-base lg:text-[17px] leading-relaxed text-sand/75 max-w-md lg:justify-self-end">
            Trois textures. Trois caractères. Toutes recyclées, toutes durables, toutes parfaitement maîtrisées dans nos ateliers partenaires.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {MATIERES.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.12,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative bg-kaki-2/40 border border-sand/10 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-mayina group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="eyebrow text-orange-3 mb-3">{m.short}</p>
                <h3 className="font-serif text-3xl font-light tracking-wide mb-4">
                  {m.name}
                </h3>
                <p className="text-sm leading-relaxed text-sand/75">{m.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
