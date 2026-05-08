import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ClipboardList, LayoutGrid, Wrench } from "lucide-react";
import { useState } from "react";
import { certificates, skillTabs, softSkills } from "../../data/siteContent";
import type { SkillTab } from "../../types/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const tabIcons: Record<SkillTab["id"], JSX.Element> = {
  competencies: <ClipboardList size={18} />,
  tools: <Wrench size={18} />,
  methodologies: <LayoutGrid size={18} />,
  ai: <BrainCircuit size={18} />,
};

export function SkillsSection() {
  const [activeTabId, setActiveTabId] = useState<SkillTab["id"]>("competencies");
  const activeTab = skillTabs.find((tab) => tab.id === activeTabId) ?? skillTabs[0];

  return (
    <section id="skills" className="section-cut bg-[var(--color-bg)] py-24 text-[var(--color-text-primary)] sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Опыт и навыки"
              title="Компетенции, инструменты и проектное мышление"
              description="Раздел собран как рабочая карта навыков: управление, документация, методологии, цифровые инструменты и AI-стек."
              tone="dark"
            />

            <div className="premium-panel mt-8 p-6">
              <p className="text-sm font-extrabold uppercase text-[var(--color-text-secondary)] tracking-[0.16em]">Гибкие навыки</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[rgba(247,242,232,0.12)] bg-[rgba(247,242,232,0.04)] px-3 py-2 text-xs font-bold text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-panel overflow-hidden">
              <div className="grid border-b border-[var(--color-border)] bg-[rgba(247,242,232,0.035)] p-2 sm:grid-cols-4" role="tablist">
                {skillTabs.map((tab) => {
                  const isActive = activeTabId === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={[
                        "focus-ring flex items-center justify-center gap-2 border px-4 py-3 text-sm font-extrabold uppercase leading-5 tracking-[0.06em] transition",
                        isActive
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-text-dark)] shadow-subtle"
                          : "border-transparent text-[var(--color-text-secondary)] hover:border-[rgba(247,242,232,0.12)] hover:bg-[rgba(247,242,232,0.05)] hover:text-[var(--color-text-primary)]",
                      ].join(" ")}
                      onClick={() => setActiveTabId(tab.id)}
                    >
                      {tabIcons[tab.id]}
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[438px] p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="eyebrow">{activeTab.title}</p>
                        <h3 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-[var(--color-text-primary)]">{activeTab.description}</h3>
                      </div>
                      <div className="hidden border border-[var(--color-border)] bg-[var(--color-accent-muted)] px-4 py-3 text-sm font-extrabold text-[var(--color-accent)] sm:block">
                        {activeTab.items.length} позиций
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {activeTab.items.map((item) => (
                        <div
                          key={item}
                          className="group card-lift flex min-h-14 items-center justify-between border border-[rgba(247,242,232,0.1)] bg-[rgba(247,242,232,0.045)] px-4 py-3"
                        >
                          <span className="text-sm font-semibold leading-6 text-[var(--color-text-secondary)]">{item}</span>
                          <span className="h-px w-7 bg-[rgba(247,242,232,0.18)] transition group-hover:bg-[var(--color-accent)]" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="premium-panel p-6 sm:p-8">
            <p className="text-sm font-extrabold uppercase text-[var(--color-text-secondary)] tracking-[0.16em]">Сертификаты</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {certificates.map((certificate) => (
                <span
                  key={certificate}
                  className="border border-[rgba(247,242,232,0.12)] bg-[rgba(247,242,232,0.04)] px-3 py-2 text-xs font-bold text-[var(--color-text-secondary)]"
                >
                  {certificate}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
