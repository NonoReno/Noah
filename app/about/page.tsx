import Image from "next/image";
import { Engagements } from "@/components/sections/engagements";

export const metadata = {
  title: "À propos — MAYINA",
  description: "MAYINA. Swimwear essentiel, pensé pour durer.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 bg-sand">
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=90"
          alt="" fill priority sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">À propos</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-light tracking-wide leading-[0.95]">
            Mayina.
          </h1>
          <p className="font-serif italic text-xl md:text-2xl mt-4 opacity-85">
            Swimwear essentiel, pensé pour durer.
          </p>
        </div>
      </section>

      {/* Core statement */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <p className="eyebrow text-stone mb-8">La marque</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-10">
              Moins de modèles.<br />
              <em className="text-orange">Plus de qualité.</em>
            </h2>
            <div className="space-y-5 text-base lg:text-[17px] leading-relaxed text-ink-2 max-w-lg">
              <p>
                MAYINA est une marque française de maillots de bain minimalistes. Des pièces conçues pour résister à l'été et rester belles saison après saison.
              </p>
              <p>
                Chaque modèle est travaillé pour le maintien naturel, la liberté de mouvement et une élégance sobre. Aucune tendance. Aucun superflu.
              </p>
              <p>
                Nos collections sont produites en Europe, en quantités maîtrisées — jamais de surproduction.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=85"
              alt="Mayina" fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-2 py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="eyebrow text-stone mb-12">Ce qui nous définit</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-3/30 border border-sand-3/30">
            {[
              { n: "01", t: "Minimaliste", b: "Aucun superflu. Chaque coupe, chaque couleur sert un objectif." },
              { n: "02", t: "Durable", b: "Matières techniques recyclées, fabriquées pour traverser plusieurs étés." },
              { n: "03", t: "Made in Europe", b: "Conception et production en Europe, dans des conditions maîtrisées." },
              { n: "04", t: "Essentiel", b: "Des pièces qui ne suivent aucune tendance pour ne jamais en sortir." },
            ].map((v) => (
              <div key={v.n} className="bg-sand-2 p-10 lg:p-12">
                <p className="font-serif text-5xl text-sand-3 font-light mb-6">{v.n}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{v.t}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-stone mb-6">Créateur</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] mb-8">
              Noah Renaud
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink-2">
              <p>MAYINA a été créé par Noah Renaud avec une idée simple : faire des maillots de bain qui méritent d'être gardés.</p>
              <p>
                <a href="https://instagram.com/THEMAYINA" target="_blank" rel="noreferrer" className="slink">
                  @THEMAYINA
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Engagements />
    </div>
  );
}
