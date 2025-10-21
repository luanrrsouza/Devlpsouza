"use client";

import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsInput, setWhatsInput] = useState("");

  function formatWhatsappForDisplay(input: string): string {
    let digits = input.replace(/\D/g, "");
    if (digits.startsWith("55") && digits.length > 11) {
      digits = digits.slice(2);
    }
    // Limita a 11 dígitos (DDD + 9) para exibição
    if (digits.length > 11) digits = digits.slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);

    if (rest.length <= 4) return `(${ddd}) ${rest}`;
    if (rest.length <= 8)
      return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
    // 9 dígitos (celular)
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    // normalizar WhatsApp para E.164 (BR) quando possível
    const raw = String(formData.get("whatsapp") || whatsInput || "");
    if (raw) {
      const digits = raw.replace(/\D/g, "");
      let normalized = digits;
      // se começar com 0, remove
      normalized = normalized.replace(/^0+/, "");
      // adicionar DDI 55 se faltar (números BR típicos têm 10-11 dígitos sem DDI)
      if (
        !normalized.startsWith("55") &&
        (normalized.length === 10 || normalized.length === 11)
      ) {
        normalized = `55${normalized}`;
      }
      // validar tamanho final 12 ou 13 (55 + DDD2 + 8-9)
      if (normalized.length < 12 || normalized.length > 13) {
        setStatus("error");
        setErrorMessage(
          "Número de WhatsApp inválido. Use DDD e confira os dígitos."
        );
        return;
      }
      formData.set("whatsapp", `+${normalized}`);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const data = (await res.json()) as { ok?: boolean };
      if (data?.ok) {
        setStatus("success");
        formEl.reset();
        setWhatsInput("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar sua mensagem. Tente novamente.");
    }
  }

  const isLoading = status === "loading";

  return (
    <section
      id="contato"
      className="future-section border-t border-black/5 dark:border-white/10 reveal"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          Vamos tirar sua ideia do papel?
        </h2>
        <p className="mt-2 text-black/70 dark:text-white/70 text-center">
          Entre em contato e receba um orçamento sem compromisso.
        </p>
        <form
          action="/api/contact"
          method="post"
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl mx-auto grid gap-4"
        >
          <input
            name="name"
            placeholder="Seu nome"
            className="rounded-md border px-4 py-3 bg-background"
            required
            disabled={isLoading}
          />
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            className="rounded-md border px-4 py-3 bg-background"
            required
            disabled={isLoading}
          />
          <input
            name="whatsapp"
            inputMode="tel"
            placeholder="WhatsApp (com DDD)"
            className="rounded-md border px-4 py-3 bg-background"
            value={whatsInput}
            onChange={(e) =>
              setWhatsInput(formatWhatsappForDisplay(e.target.value))
            }
            disabled={isLoading}
            autoComplete="tel"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="rounded-md border px-4 py-3 bg-background min-h-32"
            required
            disabled={isLoading}
          />
          {status === "success" && (
            <p
              className="text-green-600 dark:text-green-400 text-sm"
              aria-live="polite"
            >
              Mensagem enviada com sucesso! Em breve entrarei em contato.
            </p>
          )}
          {status === "error" && (
            <p
              className="text-red-600 dark:text-red-400 text-sm"
              aria-live="assertive"
            >
              {errorMessage ?? "Ocorreu um erro ao enviar sua mensagem."}
            </p>
          )}
          <button
            type="submit"
            className="rounded-md bg-brand text-white px-6 py-3 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
}
