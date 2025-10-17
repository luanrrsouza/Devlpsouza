"use client";

import Image from "next/image";

type Props = {
  name: string;
  techs: string[];
  onOpen: () => void;
};

export default function ProjectCard({ name, techs, onOpen }: Props) {
  return (
    <button
      onClick={onOpen}
      className="group text-left rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-background transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(199_89%_48%_/_0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/40"
    >
      <div className="relative aspect-[16/10] bg-[linear-gradient(135deg,#0ea5e933,#0000)]">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-16 w-24 rounded-md bg-black/5 dark:bg-white/5" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span
              key={t}
              className="text-xs bg-brand/10 text-brand px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
