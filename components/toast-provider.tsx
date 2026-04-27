"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useToastStore } from "@/lib/toast-store";
import { X } from "lucide-react";

export function ToastProvider() {
  const { toasts, remove } = useToastStore();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className={`pointer-events-auto flex items-center gap-4 px-6 py-4 shadow-xl text-sm font-light tracking-wide min-w-[280px] max-w-sm ${
              t.type === "error"
                ? "bg-red-700 text-white"
                : t.type === "info"
                ? "bg-kaki text-sand"
                : "bg-kaki text-sand"
            }`}
          >
            {t.type === "success" && (
              <span className="text-orange-3 text-lg">✓</span>
            )}
            <span className="flex-1">{t.message}</span>
            <button
              onClick={() => remove(t.id)}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
