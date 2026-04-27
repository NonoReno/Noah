"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { useToastStore } from "@/lib/toast-store";

const BADGE_STYLES: Record<string, string> = {
  "Best-seller": "bg-kaki text-sand",
  Nouveau: "bg-orange text-white",
  Signature: "bg-kaki text-sand",
  Limited: "bg-stone text-sand",
};

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [activeColor, setActiveColor] = useState(0);
  const [quickAdded, setQuickAdded] = useState(false);
  const { addItem, openCart } = useCart();
  const { show } = useToastStore();
  const color = product.colors[activeColor];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: `${product.id}-M-${color.name}`,
      productId: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      size: "M",
      colorName: color.name,
      colorHex: color.hex,
      image: color.image,
      type: product.type,
    });
    setQuickAdded(true);
    show(`${product.name} ajouté au panier ✓`);
    openCart();
    setTimeout(() => setQuickAdded(false), 2000);
  };

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
            <span className={`absolute top-4 left-4 text-[0.5rem] tracking-[0.3em] uppercase font-medium px-3 py-1.5 ${BADGE_STYLES[product.badge]}`}>
              {product.badge}
            </span>
          )}
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-mayina p-4">
            <button
              type="button"
              onClick={handleQuickAdd}
              className={`w-full py-3 text-[0.6rem] tracking-widest2 uppercase font-medium transition-colors duration-300 ${
                quickAdded ? "bg-orange-3 text-white" : "bg-warm/95 backdrop-blur-sm text-kaki hover:bg-kaki hover:text-sand"
              }`}
            >
              {quickAdded ? "✓ Ajouté" : "Ajouter (taille M)"}
            </button>
          </div>
        </div>
      </Link>

      <div className="px-1 pt-5 pb-2 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/produit/${product.id}`}>
              <h3 className="font-serif text-xl font-light leading-tight hover:text-orange transition-colors">{product.name}</h3>
            </Link>
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-3 mt-1">{product.subtitle}</p>
          </div>
          <p className="font-serif text-[1.4rem] font-light text-kaki shrink-0">{product.price} €</p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            {product.colors.map((c, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Couleur ${c.name}`}
                onClick={(e) => { e.preventDefault(); setActiveColor(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeColor ? "ring-1 ring-offset-2 ring-orange ring-offset-sand scale-125" : ""}`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
          <p className="text-[0.6rem] tracking-widest2 uppercase text-ink-3">
            ★ {product.rating.toFixed(1)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
