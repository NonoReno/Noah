"use client";

import { motion } from "framer-motion";
import { Leaf, Hourglass, Heart, Sparkles, Eye } from "lucide-react";

const ENG = [
  {
    icon: Leaf,
    title: "Production raisonnée",
    desc: "Quantités maîtrisées, jamais de surproduction. Capsule limitée.",
  },
  {
    icon: Hourglass,
    title: "Pensé pour durer",
    desc: "Pièces conçues pour traverser plusieurs étés, pas une saison.",
  },
  {
    icon: Heart,
    title: "Matières recyclées",
    desc: "ECONYL® · Repreve™ · Rib Gili. Certifications réelles, pas de greenwashing.",
  },
  {
    icon: Eye,
    title: "Transparence radicale",
    desc: "Composition affichée, prix justes expliqués, origines documentées.",
  },
  {
    icon: Sparkles,
    title: "Vision longue",
    desc: "Des pièces qui vieillissent bien, pas qui se jettent.",
  },
];

export function Engagements() {
  return (
    <section className="bg-sand py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow text-stone mb-4">Engagements</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-wide">
            Cinq promesses, <em className="text-orange">une seule façon</em> de faire.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-sand-3/30 border border-sand-3/30">
          {ENG.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="bg-sand p-8 lg:p-10 flex flex-col gap-5 transition-colors duration-700 hover:bg-sand-2"
              >
                <Icon size={22} strokeWidth={1.2} className="text-kaki" />
                <h3 className="font-serif text-xl font-light leading-snug">
                  {e.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-2">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
