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
    <section id="skills" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Опыт и навыки"
              title="Компетенции, инструменты и проектное мышление"
              description="Раздел собран как рабочая карта навыков: управление, документация, методологии, цифровые инструменты и AI-стек."
            />

            <div className="mt-8 border border-graphite-100 bg-graphite-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite-500">Гибкие навыки</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="border border-graphite-200 bg-white px-3 py-2 text-xs font-medium text-graphite-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-panel overflow-hidden">
              <div className="grid border-b border-graphite-100 bg-graphite-50 p-2 sm:grid-cols-4" role="tablist">
                {skillTabs.map((tab) => {
                  const isActive = activeTabId === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={[
                        "focus-ring flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition",
                        isActive ? "bg-graphite-950 text-white shadow-subtle" : "text-graphite-600 hover:bg-white hover:text-graphite-950",
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
                        <h3 className="mt-3 text-2xl font-semibold text-graphite-950">{activeTab.description}</h3>
                      </div>
                      <div className="hidden border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm font-semibold text-gold-700 sm:block">
                        {activeTab.items.length} позиций
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {activeTab.items.map((item) => (
                        <div
                          key={item}
                          className="group flex min-h-14 items-center justify-between border border-graphite-100 bg-white px-4 py-3 transition hover:border-gold-500/40 hover:bg-graphite-50"
                        >
                          <span className="text-sm font-medium leading-6 text-graphite-700">{item}</span>
                          <span className="h-px w-7 bg-graphite-200 transition group-hover:bg-gold-500" />
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite-500">Сертификаты</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {certificates.map((certificate) => (
                <span key={certificate} className="border border-graphite-100 bg-graphite-50 px-3 py-2 text-xs font-medium text-graphite-700">
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
