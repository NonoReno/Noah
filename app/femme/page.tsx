import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Femme — MAYINA",
  description:
    "Maillots de bain femme. Hauts, bas, une pièce. ECONYL™ recyclé. Ensemble 120€.",
};

export default function FemmePage() {
  const items = PRODUCTS.filter((p) => p.type !== "short");
  return (
    <>
      <section className="relative h-[64vh] min-h-[420px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Collection · Femme</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            Femme.
          </h1>
          <p className="font-serif italic text-xl md:text-2xl mt-3 opacity-85">
            Hauts · Bas · Une pièce
          </p>
        </div>
      </section>

      <section className="bg-orange/15 border-y border-orange/25 py-5">
        <p className="text-center text-[0.65rem] tracking-widest2 uppercase text-kaki font-medium">
          Ensemble = 1 haut + 1 bas → <strong>120€</strong> au lieu de 130€
        </p>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1.5 gap-y-12">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
