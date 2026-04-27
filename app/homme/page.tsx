import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Homme — MAYINA",
  description: "Short de bain homme. ECONYL™ recyclé, séchage rapide, coupe droite mi-long.",
};

export default function HommePage() {
  const items = PRODUCTS.filter((p) => p.type === "short");
  return (
    <>
      <section className="relative h-[64vh] min-h-[420px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Collection · Homme</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            Homme.
          </h1>
          <p className="font-serif italic text-xl md:text-2xl mt-3 opacity-85">
            Shorts essentiels · Matières techniques
          </p>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1.5 gap-y-12">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} priority />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
