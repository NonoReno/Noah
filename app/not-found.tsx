import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 bg-sand min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-serif text-[10rem] md:text-[16rem] font-light text-sand-3 leading-none select-none">
        404
      </p>
      <h1 className="font-serif text-3xl md:text-5xl font-light -mt-6 mb-6 text-ink-1">
        Cette page n'existe pas.
      </h1>
      <p className="text-base text-ink-2 mb-12 max-w-sm">
        Peut-être cherchiez-vous une pièce Mayina ?
      </p>
      <Link href="/" className="btn-kaki">
        Retour à l'accueil
      </Link>
    </div>
  );
}
