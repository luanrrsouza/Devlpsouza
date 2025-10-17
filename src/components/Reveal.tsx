"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        observer.observe(el);
      });
    };

    // Observa elementos iniciais
    observeAll();

    // Observa elementos adicionados dinamicamente (seções carregadas via dynamic())
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.classList.contains("reveal")) observer.observe(n);
          n.querySelectorAll?.(".reveal").forEach((el) =>
            observer.observe(el as Element)
          );
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
  return null;
}
