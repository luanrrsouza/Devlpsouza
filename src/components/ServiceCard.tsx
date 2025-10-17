"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  summary: string;
  onOpen: () => void;
};

export default function ServiceCard({ title, summary, onOpen }: Props) {
  return (
    <motion.button
      onClick={onOpen}
      className="group text-left rounded-2xl border border-black/10 dark:border-white/10 bg-background p-6 sm:p-8"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 25px 80px -30px rgba(14,165,233,.45)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand grid place-items-center text-lg">
        ★
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
        {summary}
      </p>
      <span className="mt-6 inline-block text-brand">Ver detalhes →</span>
    </motion.button>
  );
}
