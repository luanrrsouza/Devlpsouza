"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingWhatsApp() {
  const [raised, setRaised] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    observerRef.current?.disconnect?.();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((e) => e.isIntersecting);
        setRaised(isVisible);
      },
      { rootMargin: "0px 0px -20% 0px", threshold: [0, 0.01] }
    );
    observerRef.current.observe(footer);
    return () => observerRef.current?.disconnect?.();
  }, []);

  return (
    <a
      href="https://wa.me/5583986645644"
      className="fixed right-4 sm:right-6 z-50 rounded-full bg-green-500 text-white px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base shadow-xl hover:opacity-90"
      style={{ bottom: raised ? 112 : 24 }}
      target="_blank"
      rel="noreferrer"
    >
      Dúvidas? Fale no WhatsApp
    </a>
  );
}
