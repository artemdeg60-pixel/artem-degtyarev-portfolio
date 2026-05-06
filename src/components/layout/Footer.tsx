import { Mail, Send } from "lucide-react";
import { personal } from "../../data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-graphite-950 text-white">
      <div className="section-shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">{personal.name}</p>
          <p className="mt-1 text-sm text-white/60">Проектное управление, цифровые продукты, системное мышление</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="focus-ring inline-flex size-10 items-center justify-center rounded-sm border border-white/10 text-white/70 transition hover:border-gold-400 hover:text-gold-300"
            href={personal.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <Send size={18} />
          </a>
          <a
            className="focus-ring inline-flex size-10 items-center justify-center rounded-sm border border-white/10 text-white/70 transition hover:border-gold-400 hover:text-gold-300"
            href={`mailto:${personal.email}`}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <span className="text-sm text-white/40">{year}</span>
        </div>
      </div>
    </footer>
  );
}
