import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Homme — MAYINA",
  description: "Short de bain homme. ECONYL™ recyclé, séchage ultra-rapide, coupe droite mi-long. La pièce essentielle.",
};

const DETAILS = [
  {
    n: "01",
    t: "Coupe juste",
    b: "Mi-long, droit, sans excès. Conçu pour être porté de l'eau au déjeuner sans changer.",
  },
  {
    n: "02",
    t: "ECONYL™ recyclé",
    b: "Fibre régénérée à partir de déchets marins. Plus résistante que le nylon standard, plus légère que la plupart.",
  },
  {
    n: "03",
    t: "Séchage rapide",
    b: "20 minutes. Pas de sensation humide, pas de poids. Conçu pour le mouvement.",
  },
  {
    n: "04",
    t: "Tenu dans le temps",
    b: "La couleur tient. Le tissu ne bouloche pas. On ne remplace pas ce short tous les étés.",
  },
];

export default function HommePage() {
  const items = PRODUCTS.filter((p) => p.type === "short");

  return (
    <div className="bg-sand">
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden bg-kaki pt-16">
        <Image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Collection · Homme</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-light tracking-wide leading-[0.95]">
            Homme.
          </h1>
          <p className="font-serif italic text-xl md:text-2xl mt-4 opacity-85">
            Un short. Fait pour durer.
          </p>
        </div>
      </section>

      {/* Statement */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <p className="eyebrow text-stone mb-8">La pièce</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-10">
              Pas un short de plage.
              <br />
              <em className="text-orange">Une pièce de fond de garde-robe.</em>
            </h2>
            <div className="space-y-5 text-base lg:text-[17px] leading-relaxed text-ink-2 max-w-lg">
              <p>
                Le Short Essentiel est la seule pièce homme de MAYINA. Parce qu'une seule pièce bien faite vaut mieux que cinq pièces quelconques.
              </p>
              <p>
                Coupe mi-long, droite, sobre. Il passe de l'eau au resto sans transition. Pas de filet intérieur, pas de logo visible, pas de gadget.
              </p>
              <p>
                ECONYL™ recyclé à partir de déchets marins — plus solide que le nylon standard, chlore et sel résistant.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <Link href="#produits" className="btn-kaki px-10">
                Voir le short →
              </Link>
              <Link href="/matieres" className="slink">
                Les matières
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=1200&q=85"
              alt="Short Essentiel MAYINA"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
              <p className="font-serif italic text-sand text-lg">Short Essentiel</p>
              <p className="eyebrow text-[0.55rem] text-sand/70">110 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="bg-sand-2 py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="eyebrow text-stone mb-12">Ce qui le distingue</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-3/30 border border-sand-3/30">
            {DETAILS.map((d) => (
              <div key={d.n} className="bg-sand-2 p-10 lg:p-12">
                <p className="font-serif text-5xl text-sand-3 font-light mb-6">{d.n}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{d.t}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{d.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="produits" className="py-28 lg:py-40 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow text-stone mb-4">La collection</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light">
                Short Essentiel
              </h2>
            </div>
            <p className="font-serif italic text-stone text-lg hidden md:block">
              3 couleurs · 4 tailles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 max-w-3xl">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} priority />
            ))}
          </div>
        </div>
      </section>

      {/* Quote / manifesto */}
      <section className="bg-kaki py-40 lg:py-56 relative overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none select-none opacity-[0.06]">
          <span className="font-serif italic text-[14rem] lg:text-[22rem] leading-none text-sand">
            M.
          </span>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative text-center">
          <p className="eyebrow text-sand/50 mb-10">Philosophie</p>
          <blockquote className="font-serif italic text-3xl md:text-5xl lg:text-[3.2rem] font-light leading-[1.2] text-sand max-w-4xl mx-auto">
            « Un seul vêtement, parfaitement pensé, vaut infiniment plus que dix pièces correctes. »
          </blockquote>
          <p className="eyebrow text-sand/50 mt-10">— MAYINA</p>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-28 lg:py-36 bg-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="eyebrow text-stone mb-6 text-center">Compléter la tenue</p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <Link
              href="/femme"
              className="group relative aspect-video w-full md:w-1/2 overflow-hidden block"
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=85"
                alt="Collection Femme"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-mayina group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700 flex items-end p-10">
                <div>
                  <p className="eyebrow text-sand/70 mb-2">Découvrir</p>
                  <p className="font-serif text-3xl text-sand font-light">Collection Femme →</p>
                </div>
              </div>
            </Link>
            <div className="w-full md:w-1/2 bg-sand-2 p-12 lg:p-16 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="eyebrow text-stone mb-6">Service</p>
                <h3 className="font-serif text-3xl font-light mb-6">
                  Des questions sur les tailles ?
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed max-w-sm">
                  Notre guide des tailles vous aide à trouver la coupe juste. En cas de doute, nos équipes répondent sous 24h.
                </p>
              </div>
              <div className="flex gap-6 mt-10">
                <Link href="/tailles" className="slink">Guide des tailles</Link>
                <Link href="/contact" className="slink">Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
