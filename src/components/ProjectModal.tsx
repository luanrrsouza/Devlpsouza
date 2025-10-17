"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// Removendo framer-motion para reduzir JS; transições via CSS
import Image, { StaticImageData } from "next/image";

type Slide = {
  id: string;
  src?: string | StaticImageData;
};

type Props = {
  open: boolean;
  onClose: () => void;
  name: string;
  description: string;
  slides: Slide[];
  techs?: string[];
  liveUrl?: string;
  imageFit?: "cover" | "contain";
};

export default function ProjectModal({
  open,
  onClose,
  name,
  description,
  slides,
  techs = [],
  liveUrl,
  imageFit = "cover",
}: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const pausedByClick = useRef<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!open) return;
    const start = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        if (!pausedByClick.current && imageLoaded) {
          setIndex((i) => (i + 1) % Math.max(slides.length, 1));
        }
      }, 3000);
    };
    start();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [open, slides.length, imageLoaded]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % Math.max(slides.length, 1)),
    [slides.length]
  );
  const prev = useCallback(
    () =>
      setIndex(
        (i) => (i - 1 + Math.max(slides.length, 1)) % Math.max(slides.length, 1)
      ),
    [slides.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, next, prev]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] animate-fade-in">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className="absolute inset-0 p-4 overflow-y-auto flex items-start sm:items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full max-w-5xl my-6 sm:my-10 rounded-2xl bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 shadow-2xl max-h-[90dvh] overflow-auto relative animate-scale-in">
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 rounded-md bg-black/50 text-white px-3 py-1 text-sm hover:bg-black/60"
          >
            ×
          </button>
          <div className="flex items-start justify-between px-6 py-5 border-b border-black/10 dark:border-white/10">
            <div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              {techs.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white px-2 py-1 rounded-md transition-transform duration-200 hover:scale-[1.05] hover:shadow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-6 p-6">
            <div
              className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5"
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const start = touchStartX.current;
                if (start == null) return;
                const dx = e.changedTouches[0].clientX - start;
                if (Math.abs(dx) > 50) {
                  if (dx < 0) {
                    next();
                  } else {
                    prev();
                  }
                }
                touchStartX.current = null;
              }}
              onClick={() => {
                pausedByClick.current = !pausedByClick.current;
              }}
            >
              {slides.length === 0 ? (
                <div className="h-full w-full grid place-items-center">
                  <div className="h-24 w-36 rounded-md bg-black/10 dark:bg-white/10" />
                </div>
              ) : (
                <>
                  <div
                    key={slides[index]?.id}
                    className={`absolute inset-0 cursor-pointer transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {slides[index]?.src ? (
                      <Image
                        src={slides[index]!.src as StaticImageData | string}
                        alt=""
                        fill
                        className={
                          imageFit === "contain"
                            ? "object-contain"
                            : "object-cover"
                        }
                        sizes="(max-width: 768px) 100vw, 1024px"
                        priority={false}
                        quality={60}
                        onLoadingComplete={() => setImageLoaded(true)}
                      />
                    ) : null}
                  </div>
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white px-3 py-2"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próximo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white px-3 py-2"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Ir para imagem ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full ${
                          i === index
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-white/80">
                {description}
              </p>
            </div>

            {liveUrl ? (
              liveUrl.startsWith("http") ? (
                <div className="flex gap-3">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm hover:opacity-90"
                  >
                    Ver projeto ao vivo
                  </a>
                </div>
              ) : (
                <div className="flex gap-3">
                  <span className="inline-flex items-center rounded-md bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white px-4 py-2 text-sm">
                    {liveUrl}
                  </span>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
