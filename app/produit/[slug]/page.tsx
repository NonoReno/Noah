"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/lib/cart-store";
import { useToastStore } from "@/lib/toast-store";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.type !== product.type
  ).slice(0, 4);

  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [sizeError, setSizeError] = useState(false);

  const { addItem, openCart } = useCart();
  const { show } = useToastStore();

  const color = product.colors[activeColor];
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating));

  const handleAddToCart = () => {
    if (!activeSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addItem({
      id: `${product.id}-${activeSize}-${color.name}`,
      productId: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      size: activeSize,
      colorName: color.name,
      colorHex: color.hex,
      image: color.image,
      type: product.type,
    });
    show(`${product.name} ajouté au panier ✓`);
    openCart();
  };

  const ACCORDIONS = [
    { title: "Description", body: product.description },
    { title: "Matière & composition", body: `${product.material} · Fabriqué en Europe.` },
    {
      title: "Coupe & guide des tailles",
      body: "Si vous hésitez entre deux tailles, prenez la taille supérieure. Nos matières ont une légère élasticité naturelle — elles s'adaptent au corps et restent parfaitement en place même en mer.",
    },
    {
      title: "Entretien",
      body: "Rincer à l'eau froide après chaque utilisation. Laver à la main ou machine 30° délicat. Ne pas essorer. Sécher à plat à l'ombre.",
    },
    {
      title: "Livraison & retours",
      body: "Livraison standard 3–5j (offerte dès 150€). Express 24–48h disponible. Retours sous 30 jours, étiquette offerte pour la France.",
    },
  ];

  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <nav className="eyebrow text-stone flex items-center gap-3">
          <Link href="/" className="hover:text-kaki transition-colors">Accueil</Link>
          <span className="opacity-40">/</span>
          <Link href={product.type === "short" ? "/homme" : "/femme"} className="hover:text-kaki transition-colors">
            {product.type === "short" ? "Homme" : "Femme"}
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-ink-2">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Gallery */}
          <div className="flex flex-col gap-2">
            <motion.div
              key={activeColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] overflow-hidden bg-sand-2 group"
            >
              <Image
                src={color.image}
                alt={`${product.name} — ${color.name}`}
                fill priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-mayina group-hover:scale-[1.04]"
              />
              {product.badge && (
                <span className={`absolute top-5 left-5 text-[0.5rem] tracking-[0.3em] uppercase font-medium px-3 py-1.5 ${
                  product.badge === "Nouveau" ? "bg-orange text-white" :
                  product.badge === "Limited" ? "bg-stone text-sand" : "bg-kaki text-sand"
                }`}>
                  {product.badge}
                </span>
              )}
            </motion.div>
            <div className="grid grid-cols-3 gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveColor(i)}
                  className={`relative aspect-[4/3] overflow-hidden bg-sand-2 transition-all duration-300 ${
                    i === activeColor ? "ring-1 ring-kaki ring-offset-2" : "opacity-65 hover:opacity-100"
                  }`}
                  aria-label={c.name}
                >
                  <Image src={c.image} alt={c.name} fill sizes="20vw" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                  {product.name}
                </h1>
                {product.badge && (
                  <span className={`text-[0.5rem] tracking-[0.3em] uppercase font-medium px-3 py-2 shrink-0 mt-1 ${
                    product.badge === "Nouveau" ? "bg-orange text-white" :
                    product.badge === "Limited" ? "bg-stone text-sand" : "bg-kaki text-sand"
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="eyebrow text-stone mt-2">{product.subtitle}</p>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex gap-0.5">
                  {stars.map((f, i) => (
                    <span key={i} className={`text-sm ${f ? "text-orange" : "text-sand-3"}`}>★</span>
                  ))}
                </div>
                <span className="eyebrow text-stone">
                  {product.rating.toFixed(1)} ({product.reviewCount} avis)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <p className="font-serif text-4xl font-light text-kaki">{product.price} €</p>
              {product.bundle && (
                <span className="eyebrow text-orange">Ensemble → 120€</span>
              )}
            </div>

            {product.bundle && (
              <div className="bg-orange/10 border border-orange/20 px-5 py-4">
                <p className="text-sm text-ink-2">
                  Composez un ensemble{" "}
                  <strong className="text-kaki">haut + bas = 120€</strong>{" "}
                  au lieu de 130€. Réduction appliquée automatiquement dans le panier.
                </p>
              </div>
            )}

            {/* Color */}
            <div>
              <p className="eyebrow text-stone mb-3">
                Coloris — <span className="normal-case tracking-normal font-light text-ink-2">{color.name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveColor(i)}
                    aria-label={c.name}
                    title={c.name}
                    className={`w-7 h-7 rounded-full transition-all duration-300 ${
                      i === activeColor ? "ring-2 ring-offset-2 ring-orange ring-offset-sand scale-110" : "hover:scale-110"
                    }`}
                    style={{ background: c.hex, border: c.hex === "#ede5d4" ? "1px solid #d4c9b0" : "none" }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className={`eyebrow transition-colors ${sizeError ? "text-red-500" : "text-stone"}`}>
                  {sizeError ? "Sélectionnez une taille" : "Taille"}
                </p>
                <Link href="/tailles" className="slink text-[0.58rem]">Guide des tailles</Link>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => { if (!s.soldOut) { setActiveSize(s.label); setSizeError(false); }}}
                    disabled={s.soldOut}
                    className={`min-w-[52px] py-3 px-3 border text-[0.65rem] tracking-widest2 uppercase font-medium transition-all duration-300 ${
                      s.soldOut ? "border-sand-3/50 text-ink-3/40 line-through cursor-not-allowed" :
                      activeSize === s.label ? "border-kaki bg-kaki text-sand" :
                      sizeError ? "border-red-300 text-ink-2 hover:border-red-400" :
                      "border-sand-3 text-ink-2 hover:border-kaki"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ATC */}
            <div className="space-y-3">
              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-kaki text-sand text-[0.65rem] tracking-widest2 uppercase font-medium border border-kaki hover:bg-kaki-2 transition-colors duration-500"
              >
                {activeSize ? `Ajouter au panier — ${product.price} €` : "Sélectionnez une taille"}
              </motion.button>

              <button
                onClick={() => setWishlist(v => !v)}
                className="w-full py-4 border border-sand-3 text-[0.65rem] tracking-widest2 uppercase text-ink-2 hover:border-kaki hover:text-kaki transition-all duration-400 flex items-center justify-center gap-2"
              >
                <span>{wishlist ? "♥" : "♡"}</span>
                {wishlist ? "Dans mes favoris" : "Ajouter aux favoris"}
              </button>
            </div>

            {/* Reassurance */}
            <div className="grid grid-cols-3 gap-4 border-t border-sand-3 pt-6">
              {[
                { icon: "🚚", text: "Livraison offerte dès 150€" },
                { icon: "↩", text: "Retours 30 jours" },
                { icon: "🔒", text: "Paiement sécurisé" },
              ].map((it) => (
                <div key={it.text} className="text-center">
                  <p className="text-lg mb-1">{it.icon}</p>
                  <p className="text-[0.58rem] tracking-widest2 uppercase text-stone leading-snug">{it.text}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-sand-3">
              {ACCORDIONS.map((a, i) => (
                <div key={i} className="border-b border-sand-3">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="eyebrow text-ink-2">{a.title}</span>
                    <span className={`text-kaki transition-transform duration-300 ${openAccordion === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-ink-2">{a.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky ATC mobile */}
        <AnimatePresence>
          {activeSize && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="lg:hidden fixed bottom-0 inset-x-0 z-50 p-4 bg-warm/95 backdrop-blur-xl border-t border-sand-3"
            >
              <button onClick={handleAddToCart} className="w-full btn-kaki py-4">
                Ajouter au panier — {product.price} €
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-32">
            <div className="flex items-end justify-between gap-6 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Vous aimerez aussi</h2>
              <Link href="/femme" className="slink">Tout voir</Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1.5 gap-y-10">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
