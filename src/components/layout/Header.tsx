import { useEffect, useState } from "react";
import type { NavItem, SectionId } from "../../types/site";

interface HeaderProps {
  navItems: NavItem[];
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export function Header({ navItems, activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 18);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const navigate = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isScrolled || isOpen
          ? "border-b border-[var(--color-border)] bg-[rgba(13,13,11,0.86)] shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between">
        <button
          type="button"
          className="focus-ring group text-left"
          onClick={() => navigate("home")}
          aria-label="Перейти в начало страницы"
        >
          <span className="type-display block text-sm font-bold uppercase text-[var(--color-text-primary)]">Артём</span>
          <span className="mt-1 block text-[11px] font-bold uppercase text-[var(--color-text-secondary)] tracking-[0.18em]">
            Project Manager
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={["focus-ring nav-link", isActive ? "is-active" : ""].join(" ")}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <a
          href="mailto:artemdeg60@gmail.com"
          className="focus-ring hidden border border-[var(--color-border)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-accent)] transition hover:bg-[var(--color-accent-muted)] md:inline-flex"
        >
          artemdeg60@gmail.com
        </a>

        <button
          type="button"
          className="focus-ring relative inline-flex size-11 items-center justify-center border border-[var(--color-border)] bg-[rgba(247,242,232,0.04)] text-[var(--color-text-primary)] lg:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span
            className={[
              "absolute h-px w-5 bg-current transition duration-300",
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0",
            ].join(" ")}
          />
          <span className={["absolute h-px w-5 bg-current transition duration-300", isOpen ? "opacity-0" : "opacity-100"].join(" ")} />
          <span
            className={[
              "absolute h-px w-5 bg-current transition duration-300",
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0",
            ].join(" ")}
          />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-border)] bg-[rgba(13,13,11,0.96)] shadow-subtle backdrop-blur-xl lg:hidden">
          <nav className="section-shell grid gap-2 py-4" aria-label="Мобильная навигация">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={[
                    "focus-ring flex items-center justify-between border px-4 py-3 text-left text-sm font-extrabold uppercase tracking-[0.08em] transition",
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-muted)] text-[var(--color-text-primary)]"
                      : "border-[rgba(247,242,232,0.08)] bg-[rgba(247,242,232,0.03)] text-[var(--color-text-secondary)]",
                  ].join(" ")}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                  <span className={isActive ? "h-px w-8 bg-[var(--color-accent)]" : "h-px w-8 bg-[rgba(247,242,232,0.18)]"} />
                </button>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
