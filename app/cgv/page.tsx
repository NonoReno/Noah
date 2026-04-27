export const metadata = { title: "Conditions Générales de Vente — MAYINA" };

const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-serif text-2xl font-light text-ink-1">
      Art. {n} — {title}
    </h2>
    <div className="space-y-3 text-base leading-relaxed text-ink-2">{children}</div>
  </section>
);

export default function CGVPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Légal</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-4">
          Conditions Générales de Vente
        </h1>
        <p className="eyebrow text-stone mb-16">En vigueur au 1er janvier 2025</p>

        <div className="space-y-14">
          <Section n="1" title="Objet">
            <p>Les présentes Conditions Générales de Vente régissent l'ensemble des ventes conclues sur le site mayina.fr entre MAYINA et tout consommateur, ci-après désigné « le Client ».</p>
            <p>Toute commande passée sur ce site implique l'acceptation sans réserve des présentes CGV.</p>
          </Section>

          <Section n="2" title="Produits">
            <p>Les produits proposés sont des maillots de bain et accessoires de plage. MAYINA s'efforce de présenter les produits avec la plus grande exactitude possible. Des légères variations de couleur peuvent exister selon les calibrations d'écrans.</p>
            <p>Chaque article porte la mention « Made in Europe » et est fabriqué dans des conditions éthiques et responsables.</p>
          </Section>

          <Section n="3" title="Prix">
            <p>Les prix sont indiqués en euros TTC. MAYINA se réserve le droit de modifier ses prix à tout moment, sans préavis, les produits étant facturés au prix en vigueur lors de la validation de la commande.</p>
            <p><strong className="text-ink-1">Remise Ensemble :</strong> L'ajout simultané d'un haut (top) et d'un bas (bottom) dans le panier déclenche automatiquement une remise de 10€. Prix ensemble : 120€ au lieu de 130€.</p>
            <p><strong className="text-ink-1">Livraison gratuite</strong> à partir de 150€ d'achat (après remises).</p>
          </Section>

          <Section n="4" title="Commande">
            <p>La commande est définitive après validation du paiement. Un email de confirmation est envoyé au Client dans les minutes suivant la commande.</p>
            <p>MAYINA se réserve le droit d'annuler toute commande suspecte ou en cas de rupture de stock, avec remboursement intégral.</p>
          </Section>

          <Section n="5" title="Disponibilité">
            <p>Nos collections sont produites en quantités limitées. En cas d'indisponibilité après commande, le Client est informé dans les 24h et remboursé intégralement.</p>
          </Section>

          <Section n="6" title="Paiement">
            <p>Le paiement s'effectue en ligne, de manière sécurisée via Stripe. Moyens acceptés : Carte bancaire (Visa, Mastercard), Apple Pay, Google Pay.</p>
            <p>Les données bancaires ne transitent pas par nos serveurs et sont traitées exclusivement par Stripe (certifié PCI-DSS).</p>
          </Section>

          <Section n="7" title="Livraison">
            <p>Livraison Standard France : 3–5 jours ouvrés, offerte dès 150€ (sinon 5,90€).</p>
            <p>Livraison Express France : 24–48h, 9,90€.</p>
            <p>Europe (Belgique, Suisse, Luxembourg) : 5–8 jours, 12,90€.</p>
            <p>Espagne, Italie : 6–10 jours, 14,90€.</p>
          </Section>

          <Section n="8" title="Droit de rétractation">
            <p>Conformément à la loi, le Client dispose de 14 jours à compter de la réception pour se rétracter. MAYINA étend ce délai à 30 jours à titre commercial.</p>
            <p>Pour exercer ce droit, le Client doit nous contacter à noah.renaud1@gmail.com avant l'expiration du délai.</p>
          </Section>

          <Section n="9" title="Retours">
            <p>Les articles doivent être retournés non portés, non lavés, avec étiquettes intactes. L'étiquette de retour est offerte pour la France. Le remboursement intervient dans les 14 jours suivant réception du retour.</p>
          </Section>

          <Section n="10" title="Garanties légales">
            <p>Nos produits bénéficient de la garantie légale de conformité (art. L.217-4 du Code de la consommation) et de la garantie contre les vices cachés (art. 1641 du Code civil).</p>
          </Section>

          <Section n="11" title="Données personnelles">
            <p>Les données collectées lors de la commande sont traitées conformément à notre Politique de confidentialité, disponible sur ce site.</p>
          </Section>

          <Section n="12" title="Litiges & Médiation">
            <p>En cas de litige, le Client peut recourir au service de médiation de la consommation CECMC : www.economie.gouv.fr/mediation-conso</p>
            <p>À défaut d'accord amiable, les tribunaux de Paris seront seuls compétents.</p>
          </Section>

          <Section n="13" title="Droit applicable">
            <p>Les présentes CGV sont soumises au droit français.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
