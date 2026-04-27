import { Truck, Undo2, Lock, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Livraison offerte dès 150€" },
  { icon: Undo2, label: "Retours sous 30 jours" },
  { icon: Lock, label: "Paiement 100% sécurisé" },
  { icon: Sparkles, label: "Matières recyclées certifiées" },
];

export function Reassurance() {
  return (
    <section className="bg-carbon text-sand/85 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <Icon size={16} strokeWidth={1.2} className="text-orange-3" />
              <span className="text-[0.62rem] tracking-widest2 uppercase">
                {it.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
