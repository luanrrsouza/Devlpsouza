"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";

const featured = [
  { name: "AMAS", techs: ["Next.js", "Tailwind"] },
  { name: "InovaCubo", techs: ["Next.js", "Tailwind"] },
  { name: "Mais Saúde", techs: ["Next.js", "Tailwind"] },
  { name: "Tavin Live", techs: ["Next.js", "Tailwind"] },
  { name: "CeosCard", techs: ["Next.js", "Tailwind"] },
  { name: "Outro Projeto", techs: ["Next.js", "Tailwind"] },
];

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);
  const [serviceOpen, setServiceOpen] = useState<string | null>(null);

  return (
    <div className="font-sans">
      <section className="brand-gradient future-overlay border-b border-black/5 dark:border-white/10 reveal in">
        <div className="container mx-auto px-4 py-24 text-center sm:text-left">
          <p className="text-brand font-semibold text-sm">Devlpsouza</p>
          <h1 className="mt-2 text-6xl sm:text-7xl font-semibold tracking-tight">
            Produtos digitais que geram resultado
          </h1>
          <p className="mt-4 text-black/70 dark:text-white/70 max-w-2xl text-lg">
            Desenvolvimento de sites, aplicativos e soluções sob medida, com
            foco em performance, usabilidade e crescimento do seu negócio.
          </p>
          <div className="mt-8 flex items-center gap-4 flex-col sm:flex-row">
            <button
              onClick={() => {
                const el = document.getElementById("projetos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center rounded-md bg-brand text-white px-6 py-3 font-medium shadow-sm hover:opacity-90"
            >
              Ver projetos
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center rounded-md border px-6 py-3 font-medium hover:border-brand"
            >
              Fale comigo
            </button>
          </div>
        </div>
      </section>

      <section id="projetos" className="container mx-auto px-4 py-20 reveal">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Projetos em destaque
          </h2>
          <button
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-brand text-sm hover:underline"
          >
            Precisa de algo assim?
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProjectCard
              key={p.name}
              name={p.name}
              techs={p.techs}
              onOpen={() => setOpen(p.name)}
            />
          ))}
        </div>
      </section>

      <section
        id="oferta"
        className="future-light border-y border-black/5 dark:border-white/10 reveal"
      >
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
            O que posso te oferecer
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Websites e Landing Pages",
                d: "Sites modernos, otimizados e com alta conversão.",
              },
              {
                t: "Aplicativos Mobile",
                d: "Apps nativos e híbridos focados em UX e performance.",
              },
              {
                t: "Sistemas e Dashboards",
                d: "Soluções sob medida para operação e crescimento.",
              },
            ].map((s) => (
              <ServiceCard
                key={s.t}
                title={s.t}
                summary={s.d}
                onOpen={() => setServiceOpen(s.t)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="about-aurora border-y border-black/5 dark:border-white/10 reveal"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-8 sm:p-10 grid gap-10 sm:grid-cols-[220px_1fr] items-center shadow">
            <div className="justify-self-center sm:justify-self-start">
              <Image
                src="/perfil.jpg"
                alt="Perfil"
                width={176}
                height={176}
                className="h-44 w-44 rounded-full object-cover ring-4 ring-brand"
                priority={false}
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand">
                Sobre mim
              </h2>
              <p className="mt-4 text-slate-800 max-w-3xl text-lg leading-relaxed">
                Desenvolvedor focado em criar experiências digitais
                performáticas, acessíveis e com forte apelo visual. Trabalho com
                Next.js e interfaces modernas para transformar ideias em
                produtos reais.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs bg-brand/10 text-brand px-2 py-1 rounded">
                  5+ anos de experiência
                </span>
                <span className="text-xs bg-brand/10 text-brand px-2 py-1 rounded">
                  SEO & Performance
                </span>
                <span className="text-xs bg-brand/10 text-brand px-2 py-1 rounded">
                  Web e Apps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="cases-mesh border-y border-black/5 dark:border-white/10 reveal"
      >
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Cases de sucesso
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <blockquote
                key={i}
                className="rounded-xl border-l-4 border-brand p-6 bg-white/5 backdrop-blur shadow-sm hover:-translate-y-0.5 transition"
              >
                <p className="text-base text-white/90">
                  “Excelente trabalho! Comunicação clara e entrega no prazo.”
                </p>
                <footer className="mt-3 text-xs text-white/60">
                  Cliente satisfeito
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="future-section border-t border-black/5 dark:border-white/10 reveal"
      >
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center">
            Vamos tirar sua ideia do papel?
          </h2>
          <p className="mt-2 text-black/70 dark:text-white/70 text-center">
            Entre em contato e receba um orçamento sem compromisso.
          </p>

          <form
            action="/api/contact"
            method="post"
            className="mt-10 max-w-xl mx-auto grid gap-4"
          >
            <input
              name="name"
              placeholder="Seu nome"
              className="rounded-md border px-4 py-3 bg-background"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              className="rounded-md border px-4 py-3 bg-background"
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              className="rounded-md border px-4 py-3 bg-background min-h-32"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-brand text-white px-6 py-3 font-medium"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/5583986645644"
        className="fixed right-6 bottom-6 z-50 rounded-full bg-green-500 text-white px-6 py-4 shadow-xl hover:opacity-90"
        target="_blank"
        rel="noreferrer"
      >
        Dúvidas? Fale no WhatsApp
      </a>

      <ProjectModal
        open={open !== null}
        onClose={() => setOpen(null)}
        name={open ?? ""}
        description="Projeto desenvolvido com tecnologia moderna, pensado para performance, acessibilidade e SEO."
        slides={[]}
      />
      <ServiceModal
        open={serviceOpen !== null}
        onClose={() => setServiceOpen(null)}
        title={serviceOpen ?? ""}
        details={"Detalhes do serviço, processo de trabalho e próximos passos."}
      />
    </div>
  );
}
