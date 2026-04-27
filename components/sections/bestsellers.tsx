"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export function BestSellers() {
  const items = PRODUCTS.filter((p) =>
    ["top-triangle-kaki", "bottom-highwaist-kaki", "onepiece-kaki", "top-bandeau-sable", "bottom-echanc-orange", "onepiece-velours"].includes(
      p.id
    )
  ).slice(0, 6);

  return (
    <section className="bg-sand py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow text-stone mb-4">Best-sellers</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              Les pièces <em className="text-orange">iconiques</em>.
            </h2>
          </div>
          <Link href="/bestsellers" className="slink">
            Tout voir
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1.5 gap-y-12">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
