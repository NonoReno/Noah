export const metadata = {
  title: "Le Journal — MAYINA",
  description: "Regards, inspirations et essentiels — le journal de MAYINA.",
};

export default function JournalPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Journal</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] mb-8">
          Regards &amp; <br />
          <em className="text-orange">Inspirations.</em>
        </h1>
        <p className="text-base text-ink-2 max-w-md leading-relaxed mb-20">
          Ici, des textes courts sur l'essentiel — les matières, les paysages, les choix de création. À venir bientôt.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              date: "Printemps 2025",
              category: "Création",
              title: "Pourquoi si peu de modèles ?",
              intro: "Une collection courte n'est pas un manque d'ambition. C'est une discipline.",
            },
            {
              date: "Été 2025",
              category: "Matières",
              title: "ECONYL™ — la fibre qui vient de la mer",
              intro: "Comment un déchet marin devient la matière la plus technique du marché.",
            },
            {
              date: "Été 2025",
              category: "Style",
              title: "Un maillot, plusieurs vies",
              intro: "De la plage à la terrasse : pourquoi nos pièces ne restent pas au bord de l'eau.",
            },
          ].map((post) => (
            <div key={post.title} className="border-t border-sand-3 pt-8">
              <p className="eyebrow text-stone mb-4">
                {post.category} · {post.date}
              </p>
              <h2 className="font-serif text-2xl font-light mb-4 leading-[1.2]">
                {post.title}
              </h2>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">{post.intro}</p>
              <p className="eyebrow text-sand-3 text-[0.55rem]">Bientôt disponible</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
