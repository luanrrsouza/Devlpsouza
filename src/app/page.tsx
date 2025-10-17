"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
// revertendo tipos estáticos para evitar erros por enquanto
import { Sparkles, PencilRuler, Code2, Rocket } from "lucide-react";
import Image from "next/image";
// adiar o WhatsApp flutuante para fora do caminho crítico
const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp"),
  {
    ssr: false,
  }
);
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), {
  ssr: false,
});
const ServiceModal = dynamic(() => import("@/components/ServiceModal"), {
  ssr: false,
});
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-20">
        <div className="h-8 w-64 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-6 h-40 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
      </div>
    ),
  }
);
const CasesSection = dynamic(
  () => import("@/components/sections/CasesSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-20">
        <div className="h-8 w-64 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="h-28 bg-white/10 rounded animate-pulse" />
          <div className="h-28 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    ),
  }
);
const PartnersSection = dynamic(
  () => import("@/components/sections/PartnersSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-24">
        <div className="h-8 w-72 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-40 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-40 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    ),
  }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-20">
        <div className="h-8 w-80 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-8 h-48 max-w-xl bg-black/5 dark:bg-white/5 rounded mx-auto animate-pulse" />
      </div>
    ),
  }
);
const OfferSection = dynamic(
  () => import("@/components/sections/OfferSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-20">
        <div className="h-8 w-72 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="h-48 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-48 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-48 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    ),
  }
);

// Steps dinâmico para reduzir JS inicial
const StepsSection = dynamic(
  () => import("@/components/sections/StepsSection"),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-24">
        <div className="h-8 w-72 bg-black/10 dark:bg-white/10 rounded animate-pulse" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="h-28 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-28 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-28 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
          <div className="h-28 bg-black/5 dark:bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    ),
  }
);

// (imports estáticos removidos)

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

      <OfferSection />

      <StepsSection />

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

      <AboutSection />

      <CasesSection />

      <ContactSection />

      <PartnersSection />

      <FloatingWhatsApp />

      {open !== null ? (
        <ProjectModal
          open={true}
          onClose={() => setOpen(null)}
          name={open ?? ""}
          description={
            open ? featured.find((f) => f.name === open)?.description ?? "" : ""
          }
          slides={
            open
              ? (featured.find((f) => f.name === open)?.gallery || []).map(
                  (src, idx) => ({ id: `${open}-slide-${idx}`, src })
                )
              : []
          }
          techs={open ? featured.find((f) => f.name === open)?.techs : []}
          liveUrl={
            open ? featured.find((f) => f.name === open)?.liveUrl : undefined
          }
          imageFit={open === "+BemCuidado" ? "contain" : "cover"}
        />
      ) : null}
      {serviceOpen !== null ? (
        <ServiceModal
          open={true}
          onClose={() => setServiceOpen(null)}
          title={serviceOpen ?? ""}
          details={
            "Detalhes do serviço, processo de trabalho e próximos passos."
          }
        />
      ) : null}
    </div>
  );
}
