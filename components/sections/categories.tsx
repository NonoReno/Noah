"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CATS = [
  {
    href: "/femme",
    label: "Femme",
    sub: "Hauts · Bas · Une pièce",
    img: "https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=1200&q=85",
    span: "lg:col-span-2 lg:row-span-2",
    h: "h-[600px] lg:h-full",
  },
  {
    href: "/homme",
    label: "Homme",
    sub: "Shorts essentiels",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    span: "",
    h: "h-[420px]",
  },
  {
    href: "/limited",
    label: "Limited",
    sub: "Velours côtelé Repreve™",
    img: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?auto=format&fit=crop&w=900&q=85",
    span: "",
    h: "h-[420px]",
  },
  {
    href: "/onepiece",
    label: "Une pièce",
    sub: "Maillot Essentiel · Velours",
    img: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?auto=format&fit=crop&w=900&q=85",
    span: "lg:col-span-2",
    h: "h-[420px]",
  },
];

export function Categories() {
  return (
    <section className="relative bg-sand-2 py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow text-stone mb-4">L'univers</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              Trouvez <em className="text-orange">votre pièce</em>.
            </h2>
          </div>
          <Link href="/colls" className="slink">
            Toutes les collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-1.5">
          {CATS.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.08,
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={cat.span}
            >
              <Link
                href={cat.href}
                className={`group relative block overflow-hidden bg-kaki ${cat.h}`}
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-mayina group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-sand">
                  <p className="eyebrow text-[0.55rem] opacity-75 mb-2">
                    {cat.sub}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide flex items-baseline gap-3">
                    {cat.label}
                    <span className="inline-block transition-transform duration-700 group-hover:translate-x-3">
                      →
                    </span>
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
