import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem, SectionId } from "../../types/site";

interface HeaderProps {
  navItems: NavItem[];
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export function Header({ navItems, activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-950/10 bg-[#f4f5f3]/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <button
          type="button"
          className="focus-ring text-left"
          onClick={() => navigate("home")}
          aria-label="Перейти в начало страницы"
        >
          <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-graphite-950">Артём</span>
          <span className="block text-xs font-medium text-graphite-500">Project Manager</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={[
                  "focus-ring rounded-sm px-4 py-2 text-sm font-medium transition",
                  isActive ? "bg-graphite-950 text-white" : "text-graphite-600 hover:bg-white hover:text-graphite-950",
                ].join(" ")}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <a
          href="mailto:artemdeg60@gmail.com"
          className="focus-ring hidden rounded-sm border border-gold-500 px-4 py-2 text-sm font-semibold text-graphite-950 transition hover:bg-gold-500/10 md:inline-flex"
        >
          artemdeg60@gmail.com
        </a>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-sm border border-graphite-200 bg-white text-graphite-950 lg:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-graphite-100 bg-white shadow-subtle lg:hidden">
          <nav className="section-shell grid gap-2 py-4" aria-label="Мобильная навигация">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={[
                    "focus-ring flex items-center justify-between rounded-sm px-4 py-3 text-left text-sm font-semibold transition",
                    isActive ? "bg-graphite-950 text-white" : "bg-graphite-50 text-graphite-800",
                  ].join(" ")}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                  <span className={isActive ? "h-px w-8 bg-gold-400" : "h-px w-8 bg-graphite-200"} />
                </button>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
