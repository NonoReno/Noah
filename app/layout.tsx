import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { Cursor } from "@/components/cursor";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAYINA — Swimwear essentiel, pensé pour durer",
  description:
    "Maillots de bain minimalistes en ECONYL™ recyclé. Collections capsule limitées. Un été plus lent. Un maillot qui dure.",
  keywords: [
    "maillot de bain",
    "swimwear",
    "slow fashion",
    "ECONYL",
    "minimaliste",
    "français",
    "durable",
  ],
  openGraph: {
    title: "MAYINA — Swimwear essentiel",
    description: "Un été plus lent. Un maillot qui dure.",
    type: "website",
    locale: "fr_FR",
  },
  metadataBase: new URL("https://mayina.fr"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="grain bg-sand text-ink-1">
        <LenisProvider>
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
