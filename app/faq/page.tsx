"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "Comment choisir ma taille ?",
    a: "Si vous hésitez entre deux tailles, prenez la taille supérieure. Les matières ECONYL™ et Rib Gili ont une légère élasticité naturelle. Consultez notre guide des tailles pour les mesures précises.",
  },
  {
    q: "Qu'est-ce que la remise Ensemble ?",
    a: "Lorsque vous ajoutez 1 haut ET 1 bas au panier, 10€ sont automatiquement déduits. Soit 120€ au lieu de 130€. La remise s'applique pour chaque paire supplémentaire.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Standard France : 3–5 jours ouvrés (offerte dès 150€, sinon 5,90€). Express 24–48h : 9,90€. Europe : 5–10 jours selon le pays.",
  },
  {
    q: "Comment retourner un article ?",
    a: "Vous avez 30 jours pour retourner une pièce non portée, étiquettes intactes. L'étiquette de retour est offerte pour la France. Remboursement sous 14j après réception.",
  },
  {
    q: "Les matières sont-elles vraiment durables ?",
    a: "ECONYL® est un nylon régénéré à partir de déchets aquatiques certifié. Repreve™ est issu de bouteilles recyclées. Rib Gili est une côte premium. Nous affichons la composition exacte de chaque pièce.",
  },
  {
    q: "Comment entretenir mon maillot ?",
    a: "Rincez à l'eau froide après chaque utilisation. Lavage main ou machine 30° délicat. Ne pas essorer, sécher à plat à l'ombre. Évitez l'assouplissant — il détériore les fibres ECONYL™.",
  },
  {
    q: "Les collections sont-elles limitées ?",
    a: "Oui. Mayina produit en quantités maîtrisées pour éviter la surproduction. Certains coloris et la collection Limited Edition sont disponibles en nombre restreint.",
  },
  {
    q: "Puis-je modifier ou annuler ma commande ?",
    a: "Contactez-nous dans les 2h suivant la commande à noah.renaud1@gmail.com. Passé ce délai, la commande est en préparation et ne peut plus être modifiée.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">FAQ</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-16">
          Questions <em className="text-orange">fréquentes</em>.
        </h1>
        <div className="border-t border-sand-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-sand-3">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-7 text-left"
              >
                <span className="font-serif text-xl md:text-2xl font-light leading-snug">
                  {faq.q}
                </span>
                <span className={`text-kaki text-2xl transition-transform duration-400 mt-1 shrink-0 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-base leading-relaxed text-ink-2 max-w-2xl">{faq.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
