"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.fallback) {
        // Fallback: open mailto
        window.location.href = `mailto:noah.renaud1@gmail.com?subject=${encodeURIComponent(form.subject || "Contact Mayina")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      }
      setStatus("done");
    } catch {
      // fallback
      window.location.href = `mailto:noah.renaud1@gmail.com?subject=${encodeURIComponent(form.subject || "Contact Mayina")}&body=${encodeURIComponent(form.message)}`;
      setStatus("done");
    }
  };

  const field = "w-full bg-transparent border-b border-sand-3 focus:border-kaki py-4 text-ink-1 placeholder:text-ink-3 focus:outline-none text-base font-light transition-colors duration-300";

  return (
    <div className="pt-16 bg-sand min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <div>
            <p className="eyebrow text-stone mb-6">Nous écrire</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-12">
              Une question ?<br />
              <em className="text-orange">Écrivez-nous.</em>
            </h1>
            <div className="space-y-8 text-sm text-ink-2 max-w-sm">
              <div>
                <p className="eyebrow text-stone mb-2">Email</p>
                <a href="mailto:noah.renaud1@gmail.com" className="slink text-ink-1">noah.renaud1@gmail.com</a>
              </div>
              <div>
                <p className="eyebrow text-stone mb-2">Instagram</p>
                <a href="https://instagram.com/THEMAYINA" target="_blank" rel="noreferrer" className="slink text-ink-1">@THEMAYINA</a>
              </div>
              <div>
                <p className="eyebrow text-stone mb-2">Réponse</p>
                <p>Sous 24h ouvrées, du lundi au vendredi.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {status !== "done" ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="eyebrow text-stone block mb-2">Prénom & nom *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Marie Dupont" className={field} />
                  </div>
                  <div>
                    <label className="eyebrow text-stone block mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="marie@email.fr" className={field} />
                  </div>
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Sujet</label>
                  <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Commande, tailles, retours…" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-stone block mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Votre message…" className={`${field} resize-none`} />
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-kaki self-start px-12 disabled:opacity-60">
                  {status === "loading" ? "Envoi…" : "Envoyer →"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col justify-center h-full py-20">
                <p className="font-serif italic text-3xl text-kaki mb-4">Message envoyé.</p>
                <p className="text-ink-2">Nous vous répondons sous 24h ouvrées.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
