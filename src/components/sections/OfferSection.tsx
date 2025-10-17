"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, BarChart3 } from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    description:
      "Criação de sites modernos, rápidos e voltados para conversão. Ideal para apresentar sua marca, produto ou campanha com clareza e personalidade.",
    bullets: [
      "Layout responsivo e identidade visual própria",
      "Otimização de performance e SEO básico",
      "Integrações (formulários, WhatsApp, analytics, etc.)",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps pensados para serem simples, úteis e agradáveis de usar — com foco em experiência do usuário e estabilidade. Android e iOS, priorizando acessibilidade e performance.",
    bullets: [
      "Fluxos claros e UX orientado ao público",
      "Integrações com APIs e notificações",
      "Suporte para publicação (Play Store / App Store)",
    ],
  },
  {
    icon: BarChart3,
    title: "Sistemas & Dashboards",
    description:
      "Soluções web sob medida para organizar processos, automatizar tarefas e transformar dados em decisões. Dashboards intuitivos para métricas do dia a dia.",
    bullets: [
      "Autenticação e controle de permissões",
      "Visualização de dados em tempo real",
      "Estrutura escalável e manutenção simples",
    ],
  },
];

export default function OfferSection() {
  return (
    <section
      id="oferta"
      className="future-light border-y border-black/5 dark:border-white/10 reveal"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
          O que posso te oferecer?
        </h2>
        <p className="mt-3 text-slate-900 max-w-3xl">
          Cada projeto que desenvolvo é feito sob medida — sem fórmulas prontas,
          com foco em resultado, usabilidade e identidade. Abaixo estão os
          serviços principais, explicados de forma direta pra você entender
          rapidamente o valor que eu entrego.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(({ icon: I, title, description, bullets }, idx) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-background p-6 sm:p-8 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 * idx }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_var(--x,50%)_-20%,rgba(99,102,241,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center">
                <I className="transition-transform group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                <motion.span
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.02 }}
                >
                  {title}
                </motion.span>
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
                {description}
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-black/70 dark:text-white/70 list-disc pl-5">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA removido conforme solicitado */}
      </div>
    </section>
  );
}
