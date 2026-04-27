"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MoodFull() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[560px] overflow-hidden bg-kaki"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=90"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-sand">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="eyebrow text-sand mb-6"
        >
          Le rituel · L'oasis
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] max-w-4xl"
        >
          Entrer dans <em>l'oasis</em> Mayina.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 font-serif italic text-xl md:text-2xl"
        >
          Coucher de soleil. Matière. Mouvement. Peau dorée.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mt-10"
        >
          <Link href="/lookbook" className="btn-outline">
            Voir le lookbook
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
