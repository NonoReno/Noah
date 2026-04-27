"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQty, totals } = useCart();
  const t = totals();

  const toFreeShipping = Math.max(0, 150 - (t.subtotal - t.bundleDiscount));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 z-[130] bg-black/30 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[140] w-full max-w-[440px] bg-warm flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-sand-3">
              <h2 className="font-serif text-2xl font-light tracking-wide">
                Panier{" "}
                <span className="font-sans text-base text-stone font-light">
                  ({items.reduce((s, i) => s + i.quantity, 0)})
                </span>
              </h2>
              <button onClick={closeCart} aria-label="Fermer le panier">
                <X size={20} strokeWidth={1.2} />
              </button>
            </div>

            {/* Free shipping bar */}
            {toFreeShipping > 0 ? (
              <div className="px-8 py-4 bg-sand-2 border-b border-sand-3">
                <p className="text-[0.65rem] tracking-widest2 uppercase text-stone mb-2">
                  Plus que{" "}
                  <strong className="text-kaki">{toFreeShipping.toFixed(0)} €</strong>{" "}
                  pour la livraison gratuite
                </p>
                <div className="h-px bg-sand-3 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-kaki transition-all duration-700"
                    style={{
                      width: `${Math.min(100, ((t.subtotal - t.bundleDiscount) / 150) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="px-8 py-3 bg-kaki/10 border-b border-kaki/20">
                <p className="text-[0.65rem] tracking-widest2 uppercase text-kaki">
                  ✓ Livraison gratuite
                </p>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-20">
                  <ShoppingBag size={40} strokeWidth={1} className="text-sand-3" />
                  <div>
                    <p className="font-serif text-2xl font-light mb-2">
                      Votre panier est vide
                    </p>
                    <p className="text-sm text-stone">
                      Découvrez nos collections
                    </p>
                  </div>
                  <Link href="/femme" onClick={closeCart} className="btn-kaki">
                    Explorer
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-24 shrink-0 bg-sand-2 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="font-serif text-lg font-light leading-tight">
                            {item.name}
                          </p>
                          <p className="text-[0.65rem] tracking-widest2 uppercase text-stone mt-0.5">
                            {item.colorName} · {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-stone hover:text-ink-1 transition-colors shrink-0 mt-0.5"
                          aria-label="Retirer"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-sand-3">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-sand-2 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-sand-2 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-serif text-xl font-light text-kaki">
                          {(item.price * item.quantity).toFixed(0)} €
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-sand-3 space-y-4">
                {t.bundleDiscount > 0 && (
                  <div className="flex items-center justify-between text-sm bg-orange/10 border border-orange/25 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-orange text-white text-[0.5rem] tracking-widest2 uppercase px-2 py-1 font-medium">
                        SET -{t.bundleDiscount}€
                      </span>
                      <span className="text-ink-2">Pack haut + bas</span>
                    </div>
                    <span className="text-orange font-medium">
                      -{t.bundleDiscount.toFixed(0)} €
                    </span>
                  </div>
                )}

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-ink-2">
                    <span>Sous-total</span>
                    <span>{t.subtotal.toFixed(0)} €</span>
                  </div>
                  {t.bundleDiscount > 0 && (
                    <div className="flex justify-between text-orange">
                      <span>Réduction ensemble</span>
                      <span>-{t.bundleDiscount.toFixed(0)} €</span>
                    </div>
                  )}
                  <div className="flex justify-between text-ink-2">
                    <span>Livraison</span>
                    <span>{t.freeShipping ? "Gratuite" : `${t.shippingCost.toFixed(2)} €`}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-sand-3 pt-4">
                  <span className="eyebrow text-stone">Total</span>
                  <span className="font-serif text-3xl font-light text-kaki">
                    {t.total.toFixed(0)} €
                  </span>
                </div>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block text-center btn-kaki w-full py-5"
                >
                  Finaliser la commande →
                </Link>
                <Link
                  href="/panier"
                  onClick={closeCart}
                  className="block text-center text-[0.62rem] tracking-widest2 uppercase text-stone hover:text-kaki transition-colors"
                >
                  Voir le panier complet
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
