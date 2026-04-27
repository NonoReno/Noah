export const metadata = {
  title: "Guide des tailles — MAYINA",
};

const FEMME = [
  { t: "XS", buste: "80–84", taille: "62–66", hanches: "88–92", bonnet: "A/B" },
  { t: "S",  buste: "84–88", taille: "66–70", hanches: "92–96", bonnet: "B/C" },
  { t: "M",  buste: "88–92", taille: "70–74", hanches: "96–100", bonnet: "C/D" },
  { t: "L",  buste: "92–96", taille: "74–78", hanches: "100–104", bonnet: "D" },
  { t: "XL", buste: "96–102", taille: "78–84", hanches: "104–110", bonnet: "D/E" },
];

const HOMME = [
  { t: "S",  taille: "76–81", hanches: "89–94" },
  { t: "M",  taille: "81–86", hanches: "94–99" },
  { t: "L",  taille: "86–91", hanches: "99–104" },
  { t: "XL", taille: "91–97", hanches: "104–110" },
];

const th = "eyebrow text-stone py-4 px-6 text-left font-normal border-b border-sand-3";
const td = "py-4 px-6 text-sm text-ink-2 border-b border-sand-3/60";

export default function TaillesPage() {
  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <p className="eyebrow text-stone mb-6">Guide des tailles</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-6">
          Trouver <em className="text-orange">sa taille</em>.
        </h1>
        <p className="text-base text-ink-2 leading-relaxed mb-16 max-w-lg">
          Si vous hésitez entre deux tailles, prenez la taille supérieure. Les matières ECONYL™ ont une légère élasticité naturelle qui permet un maintien parfait sans compression.
        </p>

        <h2 className="font-serif text-3xl font-light mb-8">Femme</h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full border border-sand-3">
            <thead className="bg-sand-2">
              <tr>
                <th className={th}>Taille</th>
                <th className={th}>Buste (cm)</th>
                <th className={th}>Tour de taille (cm)</th>
                <th className={th}>Hanches (cm)</th>
                <th className={th}>Bonnet</th>
              </tr>
            </thead>
            <tbody>
              {FEMME.map((r) => (
                <tr key={r.t} className="hover:bg-sand-2 transition-colors">
                  <td className={`${td} font-serif text-xl font-light`}>{r.t}</td>
                  <td className={td}>{r.buste}</td>
                  <td className={td}>{r.taille}</td>
                  <td className={td}>{r.hanches}</td>
                  <td className={td}>{r.bonnet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-3xl font-light mb-8">Homme</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-sand-3">
            <thead className="bg-sand-2">
              <tr>
                <th className={th}>Taille</th>
                <th className={th}>Tour de taille (cm)</th>
                <th className={th}>Tour de hanches (cm)</th>
              </tr>
            </thead>
            <tbody>
              {HOMME.map((r) => (
                <tr key={r.t} className="hover:bg-sand-2 transition-colors">
                  <td className={`${td} font-serif text-xl font-light`}>{r.t}</td>
                  <td className={td}>{r.taille}</td>
                  <td className={td}>{r.hanches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
