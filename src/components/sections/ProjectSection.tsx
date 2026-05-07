import { ArrowRight, Check, ChevronDown, Clock3, FileText, Send } from "lucide-react";
import { useState } from "react";
import { projectData } from "../../data/siteContent";
import type { SectionId } from "../../types/site";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

interface ProjectSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export function ProjectSection({ onNavigate }: ProjectSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDetailIndex, setOpenDetailIndex] = useState(0);

  return (
    <section id="project" className="bg-graphite-950 py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Флагманский проект"
              title={projectData.title}
              description={projectData.intro}
              tone="dark"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {projectData.metrics.map((metric) => (
                <div key={metric.label} className="border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-3xl font-semibold text-gold-300">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="border border-white/10 bg-white/[0.04] shadow-premium">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 border border-gold-400/30 bg-gold-400/10 px-3 py-2 text-sm font-semibold text-gold-300">
                    <Clock3 size={17} />
                    {projectData.duration}
                  </span>
                  <span className="border border-white/10 px-3 py-2 text-sm text-white/70">кейс</span>
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-normal text-white">О проекте</h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  Подготовленный проект мобильного приложения для фитнес-центра: от пользовательской логики и требований
                  до планирования сроков, бюджета, рисков и внедрения. Формат представлен как управленческий кейс,
                  а не как заявление о промышленном запуске.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">Процесс</p>
                  <div className="mt-5 grid gap-3">
                    {projectData.process.map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="flex size-9 shrink-0 items-center justify-center border border-gold-400/40 text-sm font-semibold text-gold-300">
                          {index + 1}
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="w-32 text-right text-sm font-medium text-white/70">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="dark" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                    Подробнее о проекте
                  </Button>
                  <Button variant="outlineDark" icon={<Send size={18} />} onClick={() => onNavigate("contacts")}>
                    Связаться по проекту
                  </Button>
                </div>
              </div>

              <div className="grid gap-0">
                {projectData.details.map((detail, index) => {
                  const isOpen = openDetailIndex === index;

                  return (
                    <div key={detail.title} className="border-b border-white/10 last:border-b-0">
                      <button
                        type="button"
                        className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                        aria-expanded={isOpen}
                        onClick={() => setOpenDetailIndex(isOpen ? -1 : index)}
                      >
                        <span className="text-lg font-semibold text-white">{detail.title}</span>
                        <ChevronDown className={["text-gold-300 transition", isOpen ? "rotate-180" : ""].join(" ")} size={20} />
                      </button>
                      {isOpen ? (
                        <div className="px-6 pb-7 sm:px-8">
                          <p className="text-sm leading-7 text-white/60">{detail.content}</p>
                          <div className="mt-5 grid gap-3">
                            {detail.items.map((item) => (
                              <div key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                                <Check className="mt-0.5 shrink-0 text-gold-300" size={16} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <ProjectList title="Цели" items={projectData.goals} />
          </Reveal>
          <Reveal delay={0.08}>
            <ProjectList title="Моя роль" items={projectData.role} />
          </Reveal>
          <Reveal delay={0.14}>
            <ProjectList title="Результат" items={projectData.outcomes} />
          </Reveal>
        </div>
      </div>

      <Modal isOpen={isModalOpen} title={projectData.title} onClose={() => setIsModalOpen(false)}>
        <div className="grid gap-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {projectData.metrics.map((metric) => (
              <div key={metric.label} className="border border-graphite-100 bg-graphite-50 p-5">
                <p className="text-3xl font-semibold text-graphite-950">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-graphite-500">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ProjectModalBlock title="Что было сделано" items={projectData.tasks} />
            <ProjectModalBlock title="Артефакты и подход" items={projectData.artifacts} />
          </div>

          <div className="border border-graphite-100 bg-[#f8f8f6] p-6 text-[#141516]">
            <div className="flex items-center gap-3">
              <FileText className="text-gold-600" size={22} />
              <h4 className="text-xl font-semibold text-[#0b0c0d]">Управленческий вывод</h4>
            </div>
            <p className="mt-4 text-base leading-8 text-[#303337]">
              Главная ценность проекта — в структурировании цифровой инициативы: цели продукта связаны с клиентским
              сервисом и операционной нагрузкой, а реализация описана через требования, этапы, артефакты, бюджет и
              управляемый план внедрения.
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-white/70">
            <Check className="mt-0.5 shrink-0 text-gold-300" size={16} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectModalBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-graphite-100 bg-[#f8f8f6] p-6 text-[#141516]">
      <h4 className="text-xl font-semibold text-[#0b0c0d]">{title}</h4>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-[#303337]">
            <Check className="mt-0.5 shrink-0 text-gold-600" size={16} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
