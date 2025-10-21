"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

type FeaturedItem = {
  name: string;
  techs: string[];
  slug: string;
  cover: string;
  gallery: string[];
  description: string;
  liveUrl?: string;
};

type Props = {
  featured: FeaturedItem[];
};

export default function ProjectsIsland({ featured }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projetos" className="container mx-auto px-4 py-20 reveal">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Alguns dos meus projetos
        </h2>
        <a href="#contato" className="text-brand text-sm hover:underline">
          Precisa de algo assim?
        </a>
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
    </section>
  );
}





