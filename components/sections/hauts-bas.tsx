"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HautsBas() {
  return (
    <section className="bg-sand-2 py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-1.5">
          <Block
            href="/tops"
            label="Hauts"
            sub="65€ pièce"
            img="https://images.unsplash.com/photo-1570976447640-ac859286ddc7?auto=format&fit=crop&w=1200&q=85"
            line="Triangle · Bandeau · Brassière"
          />
          <Block
            href="/bottoms"
            label="Bas"
            sub="65€ pièce"
            img="https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=1200&q=85"
            line="Taille haute · Classique · Échancrée"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="mt-1.5 bg-kaki text-sand p-10 md:p-14 flex flex-col md:flex-row items-center md:justify-between gap-6"
        >
          <div>
            <p className="eyebrow text-sand/60 mb-2">Ensemble</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight">
              Un haut <em>+</em> un bas <em>=</em> 120€
            </h3>
            <p className="mt-3 text-sm text-sand/70 max-w-md">
              Économisez 10€ automatiquement sur chaque ensemble. Cumulable sur plusieurs paires.
            </p>
          </div>
          <Link href="/femme" className="btn-primary">
            Composer mon ensemble →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Block({
  href,
  label,
  sub,
  img,
  line,
}: {
  href: string;
  label: string;
  sub: string;
  img: string;
  line: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] md:aspect-[4/4.5] overflow-hidden bg-kaki"
    >
      <Image
        src={img}
        alt={label}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1400ms] ease-mayina group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute inset-0 p-10 flex flex-col justify-between text-sand">
        <p className="eyebrow opacity-80">{sub}</p>
        <div>
          <p className="text-[0.7rem] tracking-widest2 uppercase opacity-80 mb-3">
            {line}
          </p>
          <h3 className="font-serif text-5xl md:text-6xl font-light tracking-wide flex items-baseline gap-4">
            {label}
            <span className="inline-block transition-transform duration-700 group-hover:translate-x-3">
              →
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
}
