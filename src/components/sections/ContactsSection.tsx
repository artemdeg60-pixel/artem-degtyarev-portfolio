import { Copy, Mail, Phone, Send } from "lucide-react";
import { personal } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

interface ContactsSectionProps {
  showToast: (message: string) => void;
}

export function ContactsSection({ showToast }: ContactsSectionProps) {
  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = personal.email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await Promise.race([
          navigator.clipboard.writeText(personal.email),
          new Promise((_, reject) => {
            window.setTimeout(() => reject(new Error("Clipboard timeout")), 700);
          }),
        ]);
      } else if (!fallbackCopy()) {
        throw new Error("Fallback copy failed");
      }

      showToast("Email скопирован");
    } catch {
      try {
        if (fallbackCopy()) {
          showToast("Email скопирован");
        } else {
          showToast("Не удалось скопировать email");
        }
      } catch {
        showToast("Не удалось скопировать email");
      }
    }
  };

  return (
    <section id="contacts" className="section-cut bg-[var(--color-bg)] py-24 text-[var(--color-text-primary)] sm:py-28">
      <div className="section-shell">
        <div className="premium-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr]">
            <Reveal className="p-6 sm:p-10">
              <SectionHeading
                eyebrow="Контакты"
                title="Готов обсудить проекты или роль в вашей команде"
                tone="dark"
              />

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={personal.telegramUrl} target="_blank" rel="noreferrer" variant="dark" icon={<Send size={18} />}>
                  Написать в Telegram
                </Button>
                <Button variant="secondary" onClick={copyEmail} icon={<Copy size={18} />}>
                  Скопировать email
                </Button>
                <Button href={`tel:${personal.phone.replace(/[^\d+]/g, "")}`} variant="outlineDark" icon={<Phone size={18} />}>
                  Позвонить
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid h-full border-t border-[var(--color-border)] bg-[rgba(247,242,232,0.035)] p-6 sm:p-10 lg:border-l lg:border-t-0">
                <div className="grid gap-4">
                  <ContactRow icon={<Mail size={20} />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
                  <ContactRow icon={<Phone size={20} />} label="Телефон" value={personal.phone} href={`tel:${personal.phone.replace(/[^\d+]/g, "")}`} />
                  <ContactRow icon={<Send size={20} />} label="Telegram" value={personal.telegramHandle} href={personal.telegramUrl} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: JSX.Element; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="focus-ring card-lift flex items-center gap-4 border border-[rgba(247,242,232,0.12)] bg-[rgba(247,242,232,0.04)] p-4"
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center border border-[var(--color-border)] text-[var(--color-accent)]">{icon}</span>
      <span>
        <span className="block text-xs font-extrabold uppercase text-[var(--color-text-secondary)] tracking-[0.16em]">{label}</span>
        <span className="mt-1 block break-all text-sm font-bold text-[var(--color-text-primary)]">{value}</span>
      </span>
    </a>
  );
}
