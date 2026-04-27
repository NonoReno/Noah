"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-store";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="pt-32 pb-40 min-h-screen bg-sand flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="max-w-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-kaki/10 border border-kaki/20 flex items-center justify-center mx-auto mb-10"
        >
          <span className="text-kaki text-3xl">✓</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-serif text-5xl md:text-6xl font-light mb-6"
        >
          Commande confirmée.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base text-ink-2 leading-relaxed mb-4"
        >
          Merci pour votre confiance. Un email de confirmation vous a été envoyé.
          Votre commande est en cours de préparation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif italic text-xl text-kaki mb-14"
        >
          Profitez bien de votre été.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/" className="btn-kaki">Retour à l'accueil</Link>
          <Link href="/femme" className="slink">Continuer les achats</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
