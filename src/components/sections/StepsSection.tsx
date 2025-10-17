"use client";

import { Sparkles, PencilRuler, Code2, Rocket } from "lucide-react";

export default function StepsSection() {
  return (
    <section
      id="passos"
      className="container mx-auto px-4 py-24 reveal border-b border-black/5 dark:border-white/10"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
        Nosso passo a passo juntos
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            t: "Descoberta criativa",
            d: "A gente começa conversando sobre a sua ideia e o impacto que ela pode gerar. Nada de formulários longos — é papo direto, pra entender o que te inspira 😄",
            I: Sparkles,
          },
          {
            t: "Cocriação & protótipo",
            d: "Transformo a conversa em rascunhos e ideias visuais. Você participa ativamente, opinando e ajudando a moldar o que vai ser o seu produto digital.",
            I: PencilRuler,
          },
          {
            t: "Construção sob medida",
            d: "Agora é hora de codar. Cada linha de código é feita pra se encaixar perfeitamente na sua necessidade — nada genérico, tudo pensado pra você.",
            I: Code2,
          },
          {
            t: "Lançamento & evolução",
            d: "Depois de publicado, continuo por perto. Ajustes, otimizações e novas ideias são parte do processo de evolução da sua solução.",
            I: Rocket,
          },
        ].map(({ t, d, I }) => (
          <div
            key={t}
            className="rounded-3xl border border-black/10 dark:border-white/10 p-8 lg:p-10 bg-background shadow-sm hover:shadow-xl min-h-[260px] transition-transform duration-300 hover:scale-[1.02]"
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
      </div>
      <div className="mt-12 flex items-center">
        <button
          onClick={() => {
            const el = document.getElementById("contato");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center rounded-md bg-brand text-white px-6 py-3 font-medium shadow-sm transition-transform duration-300 hover:scale-[1.04]"
        >
          Curtiu o processo? Vamos conversar sobre seu projeto!
        </button>
      </div>
    </section>
  );
}
