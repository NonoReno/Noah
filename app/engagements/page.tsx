import { Engagements } from "@/components/sections/engagements";

export const metadata = {
  title: "Engagements — MAYINA",
  description: "MAYINA. Matières recyclées, production européenne, sans surproduction.",
};

export default function EngagementsPage() {
  return (
    <div className="pt-16 bg-sand">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <p className="eyebrow text-stone mb-6">Ce que nous défendons</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] mb-8 max-w-2xl">
          Des engagements <br />
          <em className="text-orange">concrets.</em>
        </h1>
        <p className="text-base text-ink-2 max-w-lg leading-relaxed">
          Pas de promesses vagues. Voici ce que MAYINA fait réellement, et pourquoi.
        </p>
      </div>
      <Engagements />
    </div>
  );
}
