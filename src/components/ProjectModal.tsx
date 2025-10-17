"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  id: string;
  src?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  name: string;
  description: string;
  slides: Slide[];
};

export default function ProjectModal({
  open,
  onClose,
  name,
  description,
  slides,
}: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % Math.max(slides.length, 1));
    }, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [open, slides.length]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-4xl rounded-2xl bg-background border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h3 className="text-xl font-semibold">{name}</h3>
            <button
              onClick={onClose}
              className="rounded-md border px-3 py-1 text-sm"
            >
              Fechar
            </button>
          </div>
          <div className="grid gap-6 p-6">
            <p className="text-sm text-black/80 dark:text-white/80">
              {description}
            </p>
            <div className="relative aspect-[16/9] rounded-lg border border-white/10 overflow-hidden">
              {slides.length === 0 ? (
                <div className="h-full w-full grid place-items-center bg-black/5 dark:bg-white/5">
                  <div className="h-24 w-36 rounded-md bg-black/10 dark:bg-white/10" />
                </div>
              ) : (
                <div className="h-full w-full">
                  {slides.map((s, i) => (
                    <div
                      key={s.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {s.src ? (
                        <img
                          src={s.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-black/5 dark:bg-white/5" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
