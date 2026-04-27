export const metadata = { title: "Politique de confidentialité — MAYINA" };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-serif text-2xl font-light text-ink-1">{title}</h2>
    <div className="space-y-3 text-base leading-relaxed text-ink-2">{children}</div>
  </section>
);

export default function ConfidentialitePage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Légal</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-4">
          Politique de confidentialité
        </h1>
        <p className="eyebrow text-stone mb-16">Conforme au RGPD — Mise à jour janvier 2025</p>

        <div className="space-y-14">
          <Section title="Responsable du traitement">
            <p>MAYINA, représentée par Noah Renaud — noah.renaud1@gmail.com</p>
          </Section>

          <Section title="Données collectées">
            <p>Lors de votre commande ou inscription à la newsletter, nous collectons :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Données d'identification : prénom, nom, email, téléphone</li>
              <li>Données de livraison : adresse postale</li>
              <li>Données de transaction : montant, produits commandés (traités par Stripe)</li>
              <li>Données de navigation : pages visitées, durée (anonymisées)</li>
            </ul>
            <p>Nous ne collectons jamais de données bancaires — celles-ci sont traitées directement par Stripe (certifié PCI-DSS).</p>
          </Section>

          <Section title="Finalités et bases légales">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-sand-3">
                <thead className="bg-sand-2">
                  <tr>
                    <th className="text-left px-4 py-3 eyebrow text-stone border-b border-sand-3">Finalité</th>
                    <th className="text-left px-4 py-3 eyebrow text-stone border-b border-sand-3">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Traitement des commandes", "Exécution du contrat"],
                    ["Envoi de la newsletter", "Consentement"],
                    ["Amélioration du site", "Intérêt légitime"],
                    ["Obligations légales (factures)", "Obligation légale"],
                    ["Service après-vente", "Exécution du contrat"],
                  ].map(([f, b], i) => (
                    <tr key={i} className="border-b border-sand-3/60 hover:bg-sand-2 transition-colors">
                      <td className="px-4 py-3">{f}</td>
                      <td className="px-4 py-3 text-stone">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Durée de conservation">
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Données clients : 5 ans après la dernière commande</li>
              <li>Newsletter : jusqu'à désinscription</li>
              <li>Données de contact : 3 ans</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
            </ul>
          </Section>

          <Section title="Destinataires">
            <p>Vos données peuvent être partagées avec :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Stripe (traitement des paiements)</li>
              <li>Transporteurs (livraison)</li>
              <li>Hébergeur Vercel</li>
            </ul>
            <p>Aucune donnée n'est vendue à des tiers à des fins commerciales.</p>
          </Section>

          <Section title="Vos droits">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:noah.renaud1@gmail.com" className="text-kaki underline">noah.renaud1@gmail.com</a></p>
            <p>En cas de litige : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-kaki underline">www.cnil.fr</a></p>
          </Section>

          <Section title="Cookies">
            <p>Cookies nécessaires (non désactivables) : session, panier, sécurité.</p>
            <p>Cookies d'audience (optionnels) : statistiques anonymisées, durée max 13 mois.</p>
            <p>MAYINA n'utilise pas de cookies publicitaires ou de tracking tiers.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
