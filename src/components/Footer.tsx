export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-20 pb-28 text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Devlpsouza
        </p>
        <div className="flex items-center gap-8">
          <a
            href="mailto:devlpsouza@gmail.com"
            aria-label="E-mail"
            className="hover:text-brand"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/devlpsouza/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-brand"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/luan-rodrigo-326487291/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brand"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM8.34 18.34H5.67V9.67h2.67v8.67ZM7 8.44A1.56 1.56 0 1 1 7 5.33a1.56 1.56 0 0 1 0 3.11ZM18.34 18.34h-2.67v-4.67c0-1.11-.89-2-2-2s-2 .89-2 2v4.67H9.34V9.67H12v1.11a3.56 3.56 0 0 1 3-1.56c1.97 0 3.56 1.59 3.56 3.56v5.56Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
