export default function ContactSection() {
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
          className="mt-10 max-w-xl mx-auto grid gap-4"
        >
          <input
            name="name"
            placeholder="Seu nome"
            className="rounded-md border px-4 py-3 bg-background"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            className="rounded-md border px-4 py-3 bg-background"
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="rounded-md border px-4 py-3 bg-background min-h-32"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-brand text-white px-6 py-3 font-medium"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

