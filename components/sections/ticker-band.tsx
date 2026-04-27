"use client";

const ITEMS = [
  "Livraison offerte dès 150€",
  "Hauts & bas : 65€ — Ensemble : 120€",
  "Matières ECONYL™ recyclées",
  "Retours sous 30 jours",
  "Collections capsule limitées",
];

export function TickerBand() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="bg-kaki text-sand py-5 overflow-hidden border-y border-kaki-2">
      <div className="marquee-band">
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 px-8 text-[0.62rem] tracking-[0.34em] uppercase font-light whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-orange/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
