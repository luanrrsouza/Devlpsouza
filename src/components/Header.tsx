"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      const past = y > 80;
      setHidden(goingDown && past && !open);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`border-b border-black/5 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 transform transition-transform duration-400 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="#"
          className="font-semibold text-2xl sm:text-3xl tracking-tight"
        >
          <span className="text-brand">Dev</span>lpsouza
        </Link>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border border-black/10 dark:border-white/10"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>☰
        </button>

        <nav className="hidden sm:flex items-center gap-8 text-lg">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projetos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-brand transition-colors"
          >
            Projetos
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("oferta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-brand transition-colors"
          >
            O que posso te oferecer
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("cases");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-brand transition-colors"
          >
            Cases de sucesso
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("sobre");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-brand transition-colors"
          >
            Sobre mim
          </a>
          <button
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 font-medium shadow-sm hover:opacity-90"
          >
            Contato
          </button>
        </nav>
      </div>

      {open && (
        <div className="sm:hidden border-t border-black/5 dark:border-white/10">
          <nav className="px-4 py-3 grid gap-3 text-base">
            <button
              onClick={() => {
                const el = document.getElementById("projetos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Projetos
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("oferta");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              O que posso te oferecer
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("cases");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Cases de sucesso
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("sobre");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Sobre mim
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 font-medium justify-center"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
