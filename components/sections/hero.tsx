"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TITLE = "MAYINA";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-kaki text-sand">
      {/* Background image — Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55" />

      {/* Sun glow */}
      <div className="sun-glow top-[20%] right-[8%]" aria-hidden />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="eyebrow mb-10 text-sand"
        >
          Swimwear essentiel · Été 2025
        </motion.p>

        <h1
          className="h-display text-sand"
          style={{
            fontSize: "clamp(5rem, 14vw, 10.5rem)",
          }}
          aria-label="MAYINA"
        >
          {TITLE.split("").map((ch, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${0.55 + i * 0.05}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 1.05, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif italic mt-6 text-[1.42rem] md:text-[1.6rem] tracking-wide text-sand"
        >
          Un été plus lent. Un maillot qui dure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.3, duration: 1.4 }}
          className="mt-3 text-[0.72rem] tracking-[0.42em] uppercase text-sand"
        >
          Des lignes nettes · Des matières choisies avec soin
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/femme" className="btn-primary">
            Découvrir Femme
          </Link>
          <Link href="/homme" className="btn-outline">
            Découvrir Homme
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-sand"
      >
        <span className="eyebrow text-[0.55rem] opacity-80">Défiler</span>
        <span className="block w-px h-10 bg-sand/40 relative overflow-hidden">
          <span
            className="absolute top-0 left-0 w-full h-1/2 bg-sand"
            style={{ animation: "scrollLine 2.4s ease-in-out infinite" }}
          />
        </span>
      </motion.div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}
