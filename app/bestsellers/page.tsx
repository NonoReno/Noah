import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Best-sellers — MAYINA",
  description: "Les pièces iconiques Mayina. Les plus portées, les plus aimées.",
};

export default function BestsellersPage() {
  const items = PRODUCTS.filter((p) => p.badge === "Best-seller" || p.badge === "Signature");
  return (
    <>
      <section className="relative h-[60vh] min-h-[380px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Selection</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            Best-sellers.
          </h1>
          <p className="font-serif italic text-xl mt-3 opacity-80">
            Les pièces les plus portées de Mayina
          </p>
        </div>
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
