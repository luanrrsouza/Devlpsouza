"use client";
import Image from "next/image";
import perfil from "../../../public/perfil.jpg";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="about-aurora-static border-y border-black/5 dark:border-white/10 reveal relative"
    >
      <div className="container mx-auto px-4 py-16 relative">
        <div className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-6 sm:p-8 grid gap-8 lg:gap-12 xl:gap-16 sm:grid-cols-[220px_1fr] items-center shadow relative">
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
          <div className="self-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand text-center sm:text-left">
              Quem sou eu?
            </h2>
            <p className="mt-3 text-slate-800 mx-auto sm:mx-0 max-w-2xl text-lg leading-relaxed text-center sm:text-left">
              Me chamo Luan, sou apaixonado por {""}
              <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                tecnologia
              </span>{" "}
              e ideias diferentes — e acho que isso já dá pra perceber pelo site
              e pelo meu jeito de trabalhar. Atualmente curso Análise e
              Desenvolvimento de Sistemas e atuo como desenvolvedor freelance,
              criando soluções digitais sob medida. Mas nem sempre foi assim…
              também sou apaixonado por {""}
              <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                história
              </span>
              , e ainda sonho em ser professor, porque adoro ensinar, trocar
              experiências e compartilhar conhecimento. Nos meus tempos livres,
              me arrisco como mágico (sendo sincero, bem ruim 😅), sempre
              buscando transformar coisas simples em experiências
              surpreendentes. Meu objetivo? Unir {""}
              <span className="bg-gradient-to-r from-brand to-indigo-500 bg-clip-text text-transparent">
                criatividade
              </span>
              , tecnologia e curiosidade para construir projetos que realmente
              façam diferença — e, claro, me divertir no caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
