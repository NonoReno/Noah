import Image from "next/image";
import { Materiaux } from "@/components/sections/materiaux";

export const metadata = {
  title: "Matières — MAYINA",
  description: "ECONYL™ recyclé, Repreve™, Rib Gili. Les matières techniques Mayina.",
};

export default function MatieresPage() {
  return (
    <div className="pt-16 bg-sand">
      <section className="relative h-[56vh] min-h-[360px] overflow-hidden bg-kaki">
        <Image
          src="https://images.unsplash.com/photo-1600298882525-5c04f3c80d15?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6 text-sand">
          <p className="eyebrow opacity-70 mb-4">Savoir-faire</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            Les matières.
          </h1>
        </div>
      </section>
      <Materiaux />
    </div>
  );
}
