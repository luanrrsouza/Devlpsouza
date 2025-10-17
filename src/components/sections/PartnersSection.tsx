"use client";

import { motion } from "framer-motion";
import { Palette, Handshake, Megaphone } from "lucide-react";

export default function PartnersSection() {
  return (
    <motion.section
      id="parcerias"
      className="future-light border-t border-black/5 dark:border-white/10 reveal"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-24">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Parcerias & Colaborações
        </motion.h2>
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-3 py-1 text-xs sm:text-sm shadow">
            5% de recompensa em indicações
          </span>
        </motion.div>
        <p className="mt-3 text-slate-800 max-w-3xl text-lg">
          Adoro trabalhar junto com outros criativos e clientes que querem
          soluções únicas.
        </p>

        <motion.div
          className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {[
            {
              I: Palette,
              t: "Criativo",
              d: "Designers, ilustradores, marketeiros e mentes inquietas — bora criar algo diferente juntos?",
            },
            {
              I: Handshake,
              t: "Cliente",
              d: "Projetos nascem de boas conexões. Se você tem uma ideia, eu ajudo a transformar em experiência digital.",
            },
            {
              I: Megaphone,
              t: "Indicação",
              d: "Indicou e fechou? Você recebe 5% do valor acordado como agradecimento.",
            },
          ].map(({ I, t, d }) => (
            <motion.div
              key={t}
              className="rounded-3xl border border-black/10 dark:border-white/10 p-8 bg-background shadow-sm hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center"
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <I size={20} />
              </motion.div>
              <h3 className="mt-5 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
                {d}
              </p>
            </motion.div>
          ))}
          <div className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 md:block h-px w-[60%] bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}
