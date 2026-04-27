"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-store";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutPage() {
  const { items, totals } = useCart();
  const t = totals();

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", postalCode: "", city: "", country: "France",
    shipping: "standard",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shippingCost =
    form.shipping === "express" ? 9.9 :
    t.freeShipping ? 0 : 5.9;

  const grandTotal = t.subtotal - t.bundleDiscount + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, form, shippingCost, bundleDiscount: t.bundleDiscount }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error ?? "Une erreur est survenue. Veuillez réessayer.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setLoading(false);
    } catch {
      setError("Connexion impossible. Vérifiez votre connexion internet.");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-40 min-h-screen bg-sand flex flex-col items-center justify-center text-center gap-6 px-6">
        <h1 className="font-serif text-4xl font-light">Votre panier est vide</h1>
        <Link href="/femme" className="btn-kaki">Découvrir les collections</Link>
      </div>
    );
  }

  const field = "w-full bg-transparent border-b border-sand-3 focus:border-kaki py-3 text-ink-1 placeholder:text-ink-3 focus:outline-none text-base font-light transition-colors duration-300";

  return (
    <div className="pt-24 pb-32 min-h-screen bg-sand">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <nav className="eyebrow text-stone flex items-center gap-3 mb-6">
            <Link href="/panier" className="hover:text-kaki transition-colors">Panier</Link>
            <span>/</span>
            <span>Commande</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide">
            Finaliser ma commande
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-12"
          >
            {/* Contact */}
            <section>
              <h2 className="font-serif text-2xl font-light mb-8 pb-3 border-b border-sand-3">
                Coordonnées
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="eyebrow text-stone block mb-2">Prénom *</label>
                  <input required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} placeholder="Marie" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Nom *</label>
                  <input required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} placeholder="Dupont" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="marie@email.fr" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Téléphone</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+33 6 00 00 00 00" className={field} />
                </div>
              </div>
            </section>

            {/* Shipping address */}
            <section>
              <h2 className="font-serif text-2xl font-light mb-8 pb-3 border-b border-sand-3">
                Adresse de livraison
              </h2>
              <div className="space-y-8">
                <div>
                  <label className="eyebrow text-stone block mb-2">Adresse *</label>
                  <input required value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="12 rue de la Plage" className={field} />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="eyebrow text-stone block mb-2">Code postal *</label>
                    <input required value={form.postalCode} onChange={e => setForm({...form, postalCode: e.target.value})} placeholder="75001" className={field} />
                  </div>
                  <div>
                    <label className="eyebrow text-stone block mb-2">Ville *</label>
                    <input required value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="Paris" className={field} />
                  </div>
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Pays *</label>
                  <select required value={form.country} onChange={e => setForm({...form, country: e.target.value})} className={`${field} bg-sand`}>
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                    <option>Luxembourg</option>
                    <option>Espagne</option>
                    <option>Italie</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Shipping mode */}
            <section>
              <h2 className="font-serif text-2xl font-light mb-8 pb-3 border-b border-sand-3">
                Mode de livraison
              </h2>
              <div className="space-y-3">
                {[
                  { value: "standard", label: "Standard", sub: "3–5 jours ouvrés", price: t.freeShipping ? "Gratuite" : "5,90 €" },
                  { value: "express", label: "Express", sub: "24–48h", price: "9,90 €" },
                ].map((opt) => (
                  <label key={opt.value} className={`flex items-center justify-between p-5 border cursor-pointer transition-colors ${form.shipping === opt.value ? "border-kaki bg-sand-2" : "border-sand-3 hover:border-kaki/40"}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="shipping" value={opt.value} checked={form.shipping === opt.value} onChange={() => setForm({...form, shipping: opt.value})} className="accent-kaki" />
                      <div>
                        <p className="font-medium text-sm">{opt.label}</p>
                        <p className="eyebrow text-stone">{opt.sub}</p>
                      </div>
                    </div>
                    <span className="font-serif text-lg text-kaki">{opt.price}</span>
                  </label>
                ))}
              </div>
            </section>

            {error && (
              <div className="bg-red-50 border border-red-200 px-5 py-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-kaki py-6 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Redirection vers le paiement…" : `Payer ${grandTotal.toFixed(2)} € →`}
            </button>

            <p className="text-[0.62rem] text-stone text-center leading-relaxed">
              Paiement sécurisé via Stripe. Vos données ne sont jamais stockées sur nos serveurs.
              <br />
              En commandant, vous acceptez nos{" "}
              <Link href="/cgv" className="underline">CGV</Link>.
            </p>
          </motion.form>

          {/* Order summary */}
          <div className="space-y-6 h-fit sticky top-24">
            <h2 className="font-serif text-2xl font-light">Récapitulatif</h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="relative w-14 h-16 bg-sand-2 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-kaki text-sand text-[0.5rem] rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-base font-light">{item.name}</p>
                    <p className="eyebrow text-stone text-[0.55rem]">{item.colorName} · {item.size}</p>
                  </div>
                  <p className="font-serif text-base text-kaki shrink-0">
                    {(item.price * item.quantity).toFixed(0)} €
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-sand-3 pt-5 space-y-3 text-sm">
              <div className="flex justify-between text-ink-2">
                <span>Sous-total</span><span>{t.subtotal.toFixed(0)} €</span>
              </div>
              {t.bundleDiscount > 0 && (
                <div className="flex justify-between text-orange">
                  <span>Pack haut + bas</span><span>-{t.bundleDiscount.toFixed(0)} €</span>
                </div>
              )}
              <div className="flex justify-between text-ink-2">
                <span>Livraison</span>
                <span>{shippingCost === 0 ? "Gratuite" : `${shippingCost.toFixed(2)} €`}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-sand-3">
                <span className="eyebrow text-stone">Total</span>
                <span className="font-serif text-2xl text-kaki">{grandTotal.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
