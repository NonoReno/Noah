export const metadata = {
  title: "Livraison & Retours — MAYINA",
};

const LIVRAISON = [
  { mode: "Standard France", delai: "3–5 jours ouvrés", tarif: "Offerte dès 150€ / 5,90€", detail: "Colissimo suivi" },
  { mode: "Express France", delai: "24–48h", tarif: "9,90€", detail: "Chronopost" },
  { mode: "Belgique, Suisse, Luxembourg", delai: "5–8 jours", tarif: "12,90€", detail: "Suivi international" },
  { mode: "Espagne, Italie", delai: "6–10 jours", tarif: "14,90€", detail: "Suivi international" },
];

const th = "eyebrow text-stone py-4 px-6 text-left font-normal border-b border-sand-3";
const td = "py-5 px-6 text-sm text-ink-2 border-b border-sand-3/60 leading-relaxed";

export default function LivraisonPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Service</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-16">
          Livraison & <em className="text-orange">Retours</em>.
        </h1>

        <h2 className="font-serif text-3xl font-light mb-8">Livraison</h2>
        <div className="overflow-x-auto mb-20">
          <table className="w-full border border-sand-3">
            <thead className="bg-sand-2">
              <tr>
                <th className={th}>Mode</th>
                <th className={th}>Délai</th>
                <th className={th}>Tarif</th>
                <th className={th}>Transporteur</th>
              </tr>
            </thead>
            <tbody>
              {LIVRAISON.map((r) => (
                <tr key={r.mode} className="hover:bg-sand-2 transition-colors">
                  <td className={`${td} font-medium text-ink-1`}>{r.mode}</td>
                  <td className={td}>{r.delai}</td>
                  <td className={td}>{r.tarif}</td>
                  <td className={td}>{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-3xl font-light mb-8">Retours</h2>
        <div className="space-y-6 text-base leading-relaxed text-ink-2 max-w-2xl">
          <p><strong className="text-ink-1 font-medium">Délai :</strong> Vous disposez de <strong>30 jours</strong> à compter de la réception pour retourner votre commande (14 jours légaux + 16 jours d'extension commerciale Mayina).</p>
          <p><strong className="text-ink-1 font-medium">Conditions :</strong> Pièce non portée, étiquettes intactes, hygiène préservée.</p>
          <p><strong className="text-ink-1 font-medium">Étiquette :</strong> Offerte pour les retours France. À télécharger depuis l'email de confirmation.</p>
          <p><strong className="text-ink-1 font-medium">Remboursement :</strong> Effectué sous 14 jours après réception du retour, sur le moyen de paiement initial. Ou avoir selon votre choix.</p>
          <p><strong className="text-ink-1 font-medium">Contact :</strong>{" "}
            <a href="mailto:noah.renaud1@gmail.com" className="slink text-kaki">
              noah.renaud1@gmail.com
            </a>{" "}
            — réponse sous 24h ouvrées.
          </p>
        </div>
      </div>
    </div>
  );
}
