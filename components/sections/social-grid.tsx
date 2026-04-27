"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  "https://images.unsplash.com/photo-1512432679630-30aae1cc40ce?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1574786527860-9bf65b9b4d8b?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=85",
];

export function SocialGrid() {
  return (
    <section className="bg-warm py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-stone mb-4">Communauté</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              <em className="text-orange">@mayina_swim</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/mayina_swim"
            target="_blank"
            rel="noreferrer"
            className="slink"
          >
            Suivre sur Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {PHOTOS.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/mayina_swim"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.05,
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative aspect-square overflow-hidden bg-sand-2"
            >
              <Image
                src={src}
                alt="Mayina"
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-[1400ms] ease-mayina group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-kaki/0 group-hover:bg-kaki/55 transition-colors duration-700 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-sand text-[0.6rem] tracking-widest2 uppercase transition-opacity duration-500">
                  Voir sur Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
