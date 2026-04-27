"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <section className="bg-kaki text-sand py-32 lg:py-40 relative overflow-hidden">
      <div className="sun-glow -bottom-40 -right-40 opacity-30" aria-hidden />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="eyebrow text-sand mb-6"
        >
          Newsletter
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-wide"
        >
          Rejoindre l'univers <em className="text-orange-3">Mayina</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 text-base lg:text-lg text-sand/80 max-w-xl mx-auto"
        >
          Lancements, restocks, nouveautés — regards sur la matière et l'été.
          Une lettre par mois. Jamais plus.
        </motion.p>

        {!done ? (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (!consent || !email.includes("@")) return;
              setDone(true);
            }}
            className="mt-12 max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 bg-transparent border-b border-sand/30 focus:border-sand py-4 px-2 text-sand placeholder:text-sand/40 focus:outline-none text-base font-light transition-colors"
              />
              <button
                type="submit"
                className="bg-sand text-kaki text-[0.6rem] tracking-[0.3em] uppercase font-medium py-4 px-8 hover:bg-orange hover:text-white transition-colors duration-500"
              >
                S'inscrire
              </button>
            </div>
            <label className="mt-6 flex items-start gap-3 text-left max-w-md mx-auto cursor-pointer interactive">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-orange"
              />
              <span className="text-xs text-sand/65 leading-relaxed">
                J'accepte de recevoir les communications de Mayina. Vos données
                sont traitées conformément à notre Politique de confidentialité.
              </span>
            </label>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-14"
          >
            <p className="font-serif italic text-2xl text-sand">
              Merci. À très vite dans votre boîte.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
