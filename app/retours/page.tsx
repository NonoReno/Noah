import Link from "next/link";

export const metadata = { title: "Retours & Remboursements — MAYINA" };

export default function RetoursPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Service client</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-16">
          Retours & <em className="text-orange">Remboursements</em>.
        </h1>

        <div className="space-y-14 text-base leading-relaxed text-ink-2">
          <section>
            <h2 className="font-serif text-3xl font-light text-ink-1 mb-6">Politique de retour</h2>
            <div className="space-y-4">
              <p>Vous disposez de <strong className="text-ink-1">30 jours</strong> à compter de la réception de votre commande pour nous retourner un article.</p>
              <p>Extension commerciale Mayina : 30 jours (contre les 14 jours légaux).</p>
              <p>Les articles doivent être retournés dans leur état d'origine : non portés, non lavés, avec étiquettes intactes. Pour des raisons d'hygiène, les pièces de bain essayées ne peuvent être reprises.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-light text-ink-1 mb-6">Procédure</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Contactez-nous à <a href="mailto:noah.renaud1@gmail.com" className="text-kaki underline">noah.renaud1@gmail.com</a> avec votre numéro de commande.</li>
              <li>Nous vous envoyons une étiquette de retour prépayée (France uniquement).</li>
              <li>Emballez soigneusement votre article et déposez le colis en point relais.</li>
              <li>Dès réception et contrôle, nous procédons au remboursement.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-light text-ink-1 mb-6">Remboursement</h2>
            <div className="space-y-4">
              <p>Le remboursement est effectué sous <strong className="text-ink-1">14 jours</strong> après réception du retour, sur le moyen de paiement initial.</p>
              <p>Vous pouvez également opter pour un avoir valable 12 mois.</p>
              <p>Les frais de livraison initiaux ne sont pas remboursés, sauf erreur de notre part.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-light text-ink-1 mb-6">Articles non retournables</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Articles portés ou lavés</li>
              <li>Articles sans étiquette</li>
              <li>Articles personnalisés</li>
              <li>Articles soldés (retour en avoir uniquement)</li>
            </ul>
          </section>

          <div className="bg-sand-2 border border-sand-3 p-8">
            <p className="eyebrow text-stone mb-3">Contact retours</p>
            <p className="font-serif text-2xl font-light mb-2">Une question sur votre retour ?</p>
            <p className="text-sm mb-4">Notre équipe répond sous 24h ouvrées.</p>
            <Link href="/contact" className="slink">Nous contacter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
