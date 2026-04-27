"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

const BADGE_STYLES: Record<string, string> = {
  "Best-seller": "bg-kaki text-sand",
  Nouveau: "bg-orange text-white",
  Signature: "bg-kaki text-sand",
  Limited: "bg-stone text-sand",
};

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const [activeColor, setActiveColor] = useState(0);
  const color = product.colors[activeColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="pcard group"
    >
      <Link href={`/produit/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand-2">
          <Image
            src={color.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            priority={priority}
            className="object-cover pcard-img"
          />

          {product.badge && (
            <span
              className={`absolute top-4 left-4 text-[0.5rem] tracking-[0.3em] uppercase font-medium px-3 py-1.5 ${BADGE_STYLES[product.badge]}`}
            >
              {product.badge}
            </span>
          )}

          <button
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-sand/85 backdrop-blur-sm flex items-center justify-center text-kaki opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-mayina"
            aria-label="Ajouter aux favoris"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </Link>

      <div className="px-1 pt-5 pb-2 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/produit/${product.id}`}>
              <h3 className="font-serif text-xl font-light leading-tight">
                {product.name}
              </h3>
            </Link>
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-3 mt-1">
              {product.subtitle}
            </p>
          </div>
          <p className="font-serif text-[1.4rem] font-light text-kaki shrink-0">
            {product.price} €
          </p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            {product.colors.map((c, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Couleur ${c.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveColor(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeColor
                    ? "ring-1 ring-offset-2 ring-orange ring-offset-sand"
                    : ""
                }`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
          <p className="text-[0.6rem] tracking-widest2 uppercase text-ink-3">
            ★ {product.rating.toFixed(1)} ({product.reviewCount})
          </p>
        </div>
      </div>
    </motion.div>
  );
}
