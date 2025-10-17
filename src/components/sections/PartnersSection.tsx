"use client";
import { Palette, Handshake, Megaphone } from "lucide-react";

export default function PartnersSection() {
  return (
    <section
      id="parcerias"
      className="future-light border-t border-black/5 dark:border-white/10 reveal"
    >
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
          Parcerias & Colaborações
        </h2>
        <div className="mt-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-3 py-1 text-xs sm:text-sm shadow">
            5% de recompensa em indicações
          </span>
        </div>
        <p className="mt-3 text-slate-800 max-w-3xl text-lg">
          Adoro trabalhar junto com outros criativos e clientes que querem
          soluções únicas.
        </p>

        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div
              key={t}
              className="rounded-3xl border border-black/10 dark:border-white/10 p-8 bg-background shadow-sm hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center">
                <I size={20} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
                {d}
              </p>
            </div>
          ))}
          <div className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 md:block h-px w-[60%] bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
