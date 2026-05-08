import { Mail, Send } from "lucide-react";
import { personal } from "../../data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <div className="section-shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="type-display text-base font-bold">{personal.name}</p>
          <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">Проектное управление, цифровые продукты, системное мышление</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="focus-ring inline-flex size-10 items-center justify-center border border-[rgba(247,242,232,0.12)] text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            href={personal.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <Send size={18} />
          </a>
          <a
            className="focus-ring inline-flex size-10 items-center justify-center border border-[rgba(247,242,232,0.12)] text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            href={`mailto:${personal.email}`}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <span className="text-sm font-semibold text-[var(--color-text-secondary)]">{year}</span>
        </div>
      </div>
    </footer>
  );
}
