export const metadata = { title: "Mentions légales — MAYINA" };

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Légal</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-16">
          Mentions légales
        </h1>

        <div className="space-y-12 text-base leading-relaxed text-ink-2">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Éditeur du site</h2>
            <p><strong className="text-ink-1">Nom :</strong> MAYINA</p>
            <p><strong className="text-ink-1">Responsable de la publication :</strong> Noah Renaud</p>
            <p><strong className="text-ink-1">Email :</strong> noah.renaud1@gmail.com</p>
            <p><strong className="text-ink-1">Instagram :</strong> @THEMAYINA</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.</p>
            <p>Site : vercel.com</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Propriété intellectuelle</h2>
            <p>L'ensemble des éléments du site mayina.fr (textes, images, design, logo, structure) est protégé par le droit d'auteur et appartient à MAYINA ou à ses partenaires.</p>
            <p>Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans accord préalable écrit de MAYINA.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Responsabilité</h2>
            <p>MAYINA s'efforce de maintenir les informations du site exactes et à jour. Toutefois, elle ne saurait être tenue responsable d'erreurs, d'omissions ou de résultats découlant d'une utilisation incorrecte des informations.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Données personnelles</h2>
            <p>La collecte et le traitement des données personnelles sont détaillés dans notre Politique de confidentialité.</p>
            <p>Conformément au RGPD, vous pouvez exercer vos droits en écrivant à : noah.renaud1@gmail.com</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement (panier, session) et des cookies de mesure d'audience anonymisés. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-light text-ink-1">Médiation</h2>
            <p>En cas de litige, vous pouvez recourir au service de médiation de la consommation :</p>
            <p>CECMC — www.economie.gouv.fr/mediation-conso</p>
          </section>
        </div>
      </div>
    </div>
  );
}
