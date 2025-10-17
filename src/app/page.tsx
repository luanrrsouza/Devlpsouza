"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Sparkles,
  PencilRuler,
  Code2,
  Rocket,
  Palette,
  Megaphone,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import perfil from "../../public/perfil.jpg";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), {
  ssr: false,
});
const ServiceModal = dynamic(() => import("@/components/ServiceModal"), {
  ssr: false,
});

const featured = [
  {
    name: "+BemCuidado",
    techs: ["React Native", "Node.js"],
    slug: "bem-cuidado",
    cover: "/projects/+BemCuidado/+BemCuidado1.png",
    gallery: [
      "/projects/+BemCuidado/+BemCuidado1.png",
      "/projects/+BemCuidado/+BemCuidado2.png",
      "/projects/+BemCuidado/+BemCuidado3.png",
      "/projects/+BemCuidado/+BemCuidado4.png",
      "/projects/+BemCuidado/+BemCuidado5.png",
      "/projects/+BemCuidado/+BemCuidado6.png",
      "/projects/+BemCuidado/+BemCuidado7.png",
      "/projects/+BemCuidado/+BemCuidado8.png",
      "/projects/+BemCuidado/+BemCuidado9.png",
      "/projects/+BemCuidado/+BemCuidado10.png",
    ],
    description:
      "+BemCuidado é um aplicativo desenvolvido pensando especialmente no bem-estar e autonomia de idosos.\n\nO app reúne diversas funcionalidades para facilitar o dia a dia e promover saúde e qualidade de vida, incluindo:\n\n• Registro da ingestão de água\n• Sugestões de exercícios físicos adequados\n• Controle de consultas médicas e medicamentos, com lembretes inteligentes\n• Jogos e atividades cognitivas para estimular a mente\n• Diário pessoal (escrito ou falado), para registrar pensamentos e sentimentos\n\nO design prioriza usabilidade, clareza e acessibilidade, garantindo que mesmo usuários com pouca experiência digital consigam navegar com facilidade.\n\nCada funcionalidade foi pensada para promover independência, saúde e bem-estar, tornando o +BemCuidado mais do que um app: uma ferramenta completa para cuidar do dia a dia de forma prática e intuitiva.",
    liveUrl: "Em lançamento",
  },
  {
    name: "CeosCard",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
    slug: "ceoscard",
    cover: "/projects/Ceos-card/CeosCard1.png",
    gallery: [
      "/projects/Ceos-card/CeosCard1.png",
      "/projects/Ceos-card/CeosCard2.png",
      "/projects/Ceos-card/CeosCard3.png",
      "/projects/Ceos-card/CeosCard4.png",
      "/projects/Ceos-card/CeosCard5.png",
    ],
    description:
      "O CEOScard é um site comercial desenvolvido para uma solução de meios de pagamento. O objetivo principal era aumentar a captação de clientes, destacando de forma clara e objetiva as qualidades e benefícios da solução.\n\nO design priorizou usabilidade e clareza, mostrando os recursos da plataforma de forma intuitiva, e reforçando a confiança do usuário na marca. Cada seção foi pensada para guiar o visitante até a ação desejada, criando uma experiência de navegação fluida e profissional.",
    liveUrl: "https://ceoscard.vercel.app/",
  },
  {
    name: "Info Pig",
    techs: ["Next.js", "Tailwind", "Three.js"],
    slug: "info-pig",
    cover: "/projects/Info-Pig/infopig1.png",
    gallery: [
      "/projects/Info-Pig/infopig1.png",
      "/projects/Info-Pig/infopig2.png",
      "/projects/Info-Pig/infopig3.png",
      "/projects/Info-Pig/infopig-4.png",
    ],
    description:
      "O Info Pig foi desenvolvido para um grupo de estudantes de Medicina Veterinária que precisavam apresentar seu artigo sobre suinocultura para um público amplo, incluindo fazendeiros.\n\nInicialmente, o material estava planejado como um PDF com um modelo estático, mas a proposta evoluiu para um site interativo. O destaque do projeto é um modelo 3D da arquitetura recomendada da fazenda, permitindo que os usuários visualizem a estrutura de forma clara e intuitiva.\n\nO site foi planejado para ter navegação simples e conteúdo acessível, facilitando a distribuição da informação para várias pessoas e tornando a apresentação mais dinâmica e envolvente.",
    liveUrl: "https://info-pig.vercel.app/",
  },
  {
    name: "InovaCube",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
    slug: "inovacube",
    cover: "/projects/InovaCubo/inovaCubo1.png",
    gallery: [
      "/projects/InovaCubo/inovaCubo1.png",
      "/projects/InovaCubo/InovaCubo2.png",
      "/projects/InovaCubo/inovaCubo3.png",
    ],
    description:
      "O InovaCubo foi desenvolvido para apoiar um grupo de pesquisadores na apresentação do seu projeto de pesquisa para uma banca avaliadora.\n\nA proposta inicial era criar um site simples, mas que transmitisse todas as informações essenciais: objetivo do projeto, público-alvo, funcionalidades e diferenciais.\n\nO foco foi garantir usabilidade e clareza, destacando de forma direta os pontos fortes do projeto e tornando a apresentação mais profissional e impactante.",
    liveUrl: "https://inova-cubo.vercel.app/",
  },
  {
    name: "Aqua Produce",
    techs: ["WordPress"],
    slug: "aqua-produce",
    cover: "/projects/Aqua-Produce/AquaProduce1.png",
    gallery: [
      "/projects/Aqua-Produce/AquaProduce1.png",
      "/projects/Aqua-Produce/AquaProduce2.png",
      "/projects/Aqua-Produce/AquaProduce3.png",
    ],
    description:
      "O AquaProduce foi desenvolvido para uma empresa de consultoria em aquicultura com o objetivo de captar clientes e facilitar o contato com eles.\n\nO site foi pensado para ser claro, direto e fácil de navegar, permitindo que os visitantes conheçam os serviços da empresa rapidamente e encontrem canais de contato de forma intuitiva.\n\nCom foco na experiência do usuário, cada seção destaca os diferenciais da consultoria, transmitindo profissionalismo e confiança desde o primeiro acesso.",
    liveUrl: "https://aquaproduce.com.br/",
  },
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
            Desenvolvo experiências digitais que transformam ideias em
            resultados
          </h1>
          <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl text-xl sm:text-2xl">
            Desenvolvo sites, apps e sistemas focados em performance, interface
            intuitiva e resultados reais para o seu negócio
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

      <motion.section
        id="passos"
        className="container mx-auto px-4 py-24 reveal border-b border-black/5 dark:border-white/10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Nosso passo a passo juntos
        </motion.h2>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            <motion.div
              key={t}
              className="rounded-3xl border border-black/10 dark:border-white/10 p-8 lg:p-10 bg-background shadow-sm hover:shadow-xl min-h-[260px]"
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
        </motion.div>
        <div className="mt-12 flex items-center">
          <motion.button
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center rounded-md bg-brand text-white px-6 py-3 font-medium shadow-sm"
            whileHover={{ scale: 1.06 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Curtiu o processo? Vamos conversar sobre seu projeto!
          </motion.button>
        </div>
      </motion.section>

      <section id="projetos" className="container mx-auto px-4 py-20 reveal">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Alguns dos meus projetos
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
              cover={p.cover}
              onOpen={() => setOpen(p.name)}
              fit={p.slug === "bem-cuidado" ? "contain" : "cover"}
            />
          ))}
        </div>
      </section>

      <section
        id="sobre"
        className="about-aurora-static border-y border-black/5 dark:border-white/10 reveal relative"
      >
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-6 sm:p-8 grid gap-8 lg:gap-12 xl:gap-16 sm:grid-cols-[220px_1fr] items-center shadow relative"
          >
            <div className="justify-self-center sm:justify-self-start relative">
              <Image
                src={perfil}
                alt="Perfil"
                width={224}
                height={224}
                className="h-56 w-56 rounded-full object-cover"
                placeholder="blur"
                priority={false}
                quality={75}
                sizes="(max-width: 640px) 224px, 224px"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="self-center"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand text-center sm:text-left">
                Quem sou eu?
              </h2>
              <motion.p
                className="mt-3 text-slate-800 mx-auto sm:mx-0 max-w-2xl text-lg leading-relaxed text-center sm:text-left"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Me chamo Luan, sou apaixonado por {""}
                <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                  tecnologia
                </span>{" "}
                e ideias diferentes — e acho que isso já dá pra perceber pelo
                site e pelo meu jeito de trabalhar. Atualmente curso Análise e
                Desenvolvimento de Sistemas e atuo como desenvolvedor freelance,
                criando soluções digitais sob medida. Mas nem sempre foi assim…
                também sou apaixonado por {""}
                <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                  história
                </span>
                , e ainda sonho em ser professor, porque adoro ensinar, trocar
                experiências e compartilhar conhecimento. Nos meus tempos
                livres, me arrisco como mágico (sendo sincero, bem ruim 😅),
                sempre buscando transformar coisas simples em experiências
                surpreendentes. Meu objetivo? Unir {""}
                <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                  criatividade
                </span>
                , tecnologia e curiosidade para construir projetos que realmente
                façam diferença — e, claro, me divertir no caminho.
              </motion.p>
            </motion.div>
          </motion.div>
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
            {[1, 2].map((n) => (
              <blockquote
                key={n}
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

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <motion.button
              onClick={() => {
                const url =
                  "https://wa.me/5583986645644?text=Oi%20Luan!%20Quero%20colaborar%20ou%20indicar%20algu%C3%A9m.";
                window.open(url, "_blank");
              }}
              className="inline-flex items-center justify-center rounded-md bg-brand text-white px-6 py-3 font-medium shadow-sm"
              whileHover={{ scale: 1.06 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Quero colaborar ou indicar alguém
            </motion.button>

            <motion.button
              onClick={() => {
                const el = document.getElementById("contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md border border-brand text-brand px-6 py-3 font-medium shadow-sm"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Falar pelo formulário
            </motion.button>
          </div>
        </div>
      </motion.section>

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
        description={
          open ? featured.find((f) => f.name === open)?.description ?? "" : ""
        }
        slides={
          open
            ? (featured.find((f) => f.name === open)?.gallery || []).map(
                (src, idx): { id: string; src: string } => ({
                  id: `${open}-slide-${idx}`,
                  src,
                })
              )
            : []
        }
        techs={open ? featured.find((f) => f.name === open)?.techs : []}
        liveUrl={
          open ? featured.find((f) => f.name === open)?.liveUrl : undefined
        }
        imageFit={open === "+BemCuidado" ? "contain" : "cover"}
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
