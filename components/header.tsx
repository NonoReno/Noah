"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-store";

const NAV = [
  { label: "Femme", href: "/femme" },
  { label: "Homme", href: "/homme" },
  { label: "Best-sellers", href: "/bestsellers" },
  { label: "Le Journal", href: "/journal" },
  { label: "Matières", href: "/matieres" },
  { label: "À propos", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { items, openCart } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-700",
          scrolled
            ? "bg-warm/96 backdrop-blur-xl border-b border-sand-3/40 text-ink-1 shadow-[0_4px_30px_rgba(61,74,53,0.06)]"
            : "bg-transparent text-white"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {NAV.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href} className="uline text-[0.65rem] tracking-widest2 uppercase font-normal">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="font-serif text-[1.55rem] font-light tracking-[0.38em] animate-breathe" aria-label="Mayina">
            MAYINA
          </Link>

          <div className="flex-1 flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.slice(3).map((item) => (
                <Link key={item.href} href={item.href} className="uline text-[0.65rem] tracking-widest2 uppercase font-normal">
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/tailles" aria-label="Guide des tailles" className="hidden lg:flex p-1.5">
              <Ruler size={16} strokeWidth={1.4} />
            </Link>

            <button
              onClick={openCart}
              aria-label="Panier"
              className="flex items-center gap-2 p-1.5 relative"
            >
              <ShoppingBag size={16} strokeWidth={1.4} />
              <span className="text-[0.6rem] tracking-widest2 uppercase">
                Panier
              </span>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full text-white text-[0.5rem] flex items-center justify-center font-medium"
                >
                  {count}
                </motion.span>
              )}
            </button>

            <button aria-label="Menu" className="lg:hidden p-1.5" onClick={() => setOpen(true)}>
              <Menu size={20} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] bg-kaki text-sand"
          >
            <div className="h-16 flex items-center justify-between px-6">
              <span className="font-serif text-[1.55rem] font-light tracking-[0.38em]">MAYINA</span>
              <button onClick={() => setOpen(false)} aria-label="Fermer"><X size={22} strokeWidth={1.2} /></button>
            </div>
            <nav className="px-6 mt-12 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-4xl font-light tracking-wide border-b border-sand/15">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-6 right-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.6rem] tracking-widest2 uppercase opacity-70">
              <Link href="/livraison">Livraison</Link>
              <Link href="/tailles">Tailles</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
