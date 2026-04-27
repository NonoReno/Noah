import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-carbon text-sand/90 pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="font-serif text-3xl font-light tracking-[0.38em] mb-6">
              MAYINA
            </div>
            <p className="text-sm leading-relaxed text-sand/60 max-w-xs">
              Swimwear essentiel, pensé pour durer.
              <br />
              Un été plus lent. Un maillot qui dure.
            </p>
            <p className="text-[0.6rem] tracking-widest2 uppercase mt-8 text-sand/50">
              @THEMAYINA · Paris
            </p>
          </div>
          <FooterCol
            title="Collections"
            items={[
              { label: "Femme", href: "/femme" },
              { label: "Homme", href: "/homme" },
              { label: "Best-sellers", href: "/bestsellers" },
              { label: "Limited Edition", href: "/bestsellers" },
            ]}
          />
          <FooterCol
            title="La marque"
            items={[
              { label: "À propos", href: "/about" },
              { label: "Matières", href: "/matieres" },
              { label: "Engagements", href: "/engagements" },
              { label: "Le Journal", href: "/journal" },
            ]}
          />
          <FooterCol
            title="Service"
            items={[
              { label: "Contact", href: "/contact" },
              { label: "Livraison", href: "/livraison" },
              { label: "Retours", href: "/retours" },
              { label: "Guide tailles", href: "/tailles" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
        </div>

        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[0.6rem] tracking-widest2 uppercase text-sand/50">
          <p>© {new Date().getFullYear()} MAYINA. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgv">CGV</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/politique-confidentialite">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[0.6rem] tracking-widest2 uppercase text-sand/50 mb-5">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm uline hover:text-sand transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
