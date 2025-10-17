export default function CasesSection() {
  return (
    <section
      id="cases"
      className="cases-mesh border-y border-black/5 dark:border-white/10 reveal"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Cases de sucesso
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[1, 2].map((n) => (
            <blockquote
              key={n}
              className="rounded-xl border-l-4 border-brand p-6 bg-white/5 backdrop-blur shadow-sm hover:-translate-y-0.5 transition"
            >
              <p className="text-base text-white/90">
                “Excelente trabalho! Comunicação clara e entrega no prazo.”
              </p>
              <footer className="mt-3 text-xs text-white/60">
                Cliente satisfeito
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
