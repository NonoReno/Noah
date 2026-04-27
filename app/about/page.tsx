import Image from "next/image";
import { Manifeste } from "@/components/sections/manifeste";
import { Engagements } from "@/components/sections/engagements";

export const metadata = {
  title: "À propos — MAYINA",
  description: "L'histoire de Mayina. Swimwear essentiel, pensé pour durer.",
};

const VALUES = [
  { n: "01", title: "Minimaliste", body: "Pas de superflu. Chaque coupe, chaque couleur est choisie pour sa pertinence et sa durabilité visuelle." },
  { n: "02", title: "Durable", body: "Matières recyclées certifiées, quantités maîtrisées. Jamais de surproduction, jamais de soldes agressives." },
  { n: "03", title: "Slow fashion", body: "Des pièces qui ne suivent aucune tendance pour ne jamais en sortir. Un maillot Mayina, c'est plusieurs étés." },
  { n: "04", title: "Transparent", body: "Prix expliqués, matières traçées, origines documentées. Zéro greenwashing, zéro compromis." },
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-sand">
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=90"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Notre histoire</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-light tracking-wide leading-[0.95]">
            Mayina.
          </h1>
          <p className="font-serif italic text-xl md:text-2xl mt-4 opacity-85 max-w-xl">
            Swimwear essentiel, pensé pour durer.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <p className="eyebrow text-stone mb-6">Manifeste</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-10">
              Nous faisons <em className="text-orange">moins</em>.
              <br />Pour que vous ayez <em className="text-kaki">mieux</em>.
            </h2>
            <div className="space-y-5 text-base lg:text-[17px] leading-relaxed text-ink-2 max-w-lg">
              <p>
                MAYINA est née d'un refus : celui de voir le maillot de bain devenir un objet jetable, interchangeable, sans âme.
              </p>
              <p>
                Nous croyons que certaines pièces méritent mieux qu'un été. Une coupe travaillée, une matière choisie pour sa résistance au sel et au temps, une couleur qui ne se démode pas parce qu'elle n'a jamais suivi de tendance.
              </p>
              <p>
                Chaque collection Mayina est limitée. Chaque pièce est conçue pour accompagner le corps plusieurs étés.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=85"
              alt="Mayina"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-sand-2 py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="eyebrow text-stone mb-12">Ce en quoi nous croyons</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-3/30 border border-sand-3/30">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-sand-2 p-10 lg:p-12">
                <p className="font-serif text-5xl text-sand-3 font-light mb-6">{v.n}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Engagements />
    </div>
  );
}
