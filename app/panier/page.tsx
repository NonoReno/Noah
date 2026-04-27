"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-store";

export default function PanierPage() {
  const { items, removeItem, updateQty, totals } = useCart();
  const t = totals();
  const toFreeShipping = Math.max(0, 150 - (t.subtotal - t.bundleDiscount));

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-40 min-h-screen bg-sand flex flex-col items-center justify-center text-center px-6 gap-8">
        <ShoppingBag size={56} strokeWidth={0.8} className="text-sand-3" />
        <div>
          <h1 className="font-serif text-4xl font-light mb-3">Votre panier est vide</h1>
          <p className="text-ink-2">Découvrez nos collections pour commencer.</p>
        </div>
        <Link href="/femme" className="btn-kaki">Explorer les collections</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 min-h-screen bg-sand">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-4">
          Votre panier
        </h1>
        <p className="eyebrow text-stone mb-16">
          {items.reduce((s, i) => s + i.quantity, 0)} article
          {items.reduce((s, i) => s + i.quantity, 0) > 1 ? "s" : ""}
        </p>

        {/* Free shipping bar */}
        {toFreeShipping > 0 && (
          <div className="mb-10 bg-sand-2 border border-sand-3 px-6 py-4">
            <p className="text-sm text-ink-2 mb-2">
              Plus que{" "}
              <strong className="text-kaki">{toFreeShipping.toFixed(0)} €</strong>{" "}
              pour bénéficier de la livraison gratuite
            </p>
            <div className="h-0.5 bg-sand-3 relative overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-kaki transition-all duration-700 rounded-full"
                style={{ width: `${Math.min(100, ((t.subtotal - t.bundleDiscount) / 150) * 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_380px] gap-16">
          {/* Items */}
          <div className="space-y-6">
            <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto] gap-6 eyebrow text-stone pb-3 border-b border-sand-3">
              <span className="w-20" />
              <span>Produit</span>
              <span>Quantité</span>
              <span>Total</span>
            </div>

            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto_auto] gap-6 items-start md:items-center border-b border-sand-3 pb-6"
              >
                <Link href={`/produit/${item.productId}`}>
                  <div className="relative w-20 h-24 bg-sand-2 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                  </div>
                </Link>
                <div>
                  <Link href={`/produit/${item.productId}`}>
                    <h3 className="font-serif text-xl font-light leading-snug hover:text-orange transition-colors">{item.name}</h3>
                  </Link>
                  <p className="eyebrow text-stone mt-1">{item.colorName} · {item.size}</p>
                  <p className="font-serif text-lg text-kaki mt-1">{item.price} € / pièce</p>
                  <button onClick={() => removeItem(item.id)} className="flex items-center gap-1 mt-3 text-[0.6rem] tracking-widest2 uppercase text-stone hover:text-ink-1 transition-colors md:hidden">
                    <X size={10} /> Retirer
                  </button>
                </div>
                <div className="flex items-center border border-sand-3">
                  <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-9 h-9 flex items-center justify-center hover:bg-sand-2 transition-colors">
                    <Minus size={12} />
                  </button>
                  <span className="w-9 text-center text-sm">{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-9 h-9 flex items-center justify-center hover:bg-sand-2 transition-colors">
                    <Plus size={12} />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-serif text-2xl font-light text-kaki whitespace-nowrap">
                    {(item.price * item.quantity).toFixed(0)} €
                  </p>
                  <button onClick={() => removeItem(item.id)} aria-label="Retirer" className="text-stone hover:text-ink-1 hidden md:block">
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-sand-2 p-8 h-fit space-y-5 border border-sand-3">
            <h2 className="font-serif text-2xl font-light">Récapitulatif</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-2">Sous-total</span>
                <span>{t.subtotal.toFixed(0)} €</span>
              </div>

              {t.bundleDiscount > 0 && (
                <div className="flex justify-between text-orange">
                  <span className="flex items-center gap-2">
                    <span className="bg-orange text-white text-[0.5rem] tracking-widest2 uppercase px-2 py-0.5">
                      SET -{t.bundleDiscount}€
                    </span>
                    Pack haut + bas
                  </span>
                  <span>-{t.bundleDiscount.toFixed(0)} €</span>
                </div>
              )}

              <div className="flex justify-between text-ink-2">
                <span>Livraison</span>
                <span>{t.freeShipping ? "Gratuite" : `${t.shippingCost.toFixed(2)} €`}</span>
              </div>
            </div>

            <div className="border-t border-sand-3 pt-5 flex justify-between items-center">
              <span className="eyebrow text-stone">Total TTC</span>
              <span className="font-serif text-3xl font-light text-kaki">
                {t.total.toFixed(2)} €
              </span>
            </div>

            <Link href="/checkout" className="block btn-kaki text-center w-full py-5">
              Finaliser la commande →
            </Link>

            <Link href="/femme" className="block text-center text-[0.62rem] tracking-widest2 uppercase text-stone hover:text-kaki transition-colors">
              Continuer mes achats
            </Link>

            <p className="text-[0.6rem] text-stone/80 text-center leading-relaxed">
              Paiement sécurisé · SSL · Visa · Mastercard · Apple Pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
