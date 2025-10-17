"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { memo } from "react";

type Props = {
  name: string;
  techs: string[];
  cover?: string | StaticImageData;
  onOpen: () => void;
  fit?: "cover" | "contain";
};

function ProjectCard({ name, techs, cover, onOpen, fit = "cover" }: Props) {
  return (
    <motion.button
      onClick={onOpen}
      className="group text-left rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-background focus:outline-none focus:ring-2 focus:ring-brand/40"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 70px -25px hsl(199 89% 48% / 0.5)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative aspect-[16/10] bg-[linear-gradient(135deg,#0ea5e933,#0000)]">
        {cover ? (
          <Image
            src={cover}
            alt={name}
            fill
            className={fit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-16 w-24 rounded-md bg-black/5 dark:bg-white/5" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl">{name}</h3>
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
    </motion.button>
  );
}

export default memo(ProjectCard);
