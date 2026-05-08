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
    <section id="project" className="section-cut bg-[var(--color-bg-elevated)] py-24 text-[var(--color-text-primary)] sm:py-28">
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
                <div key={metric.label} className="card-lift editorial-card p-5">
                  <p className="type-display text-3xl font-bold text-[var(--color-accent)]">{metric.value}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-text-secondary)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="premium-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-[var(--color-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-accent-muted)] px-3 py-2 text-sm font-extrabold text-[var(--color-accent)]">
                    <Clock3 size={17} />
                    {projectData.duration}
                  </span>
                  <span className="border border-[rgba(247,242,232,0.12)] px-3 py-2 text-sm font-semibold text-[var(--color-text-secondary)]">кейс</span>
                </div>

                <h3 className="mt-8 text-[length:var(--size-h2)] font-bold leading-tight text-[var(--color-text-primary)]">О проекте</h3>
                <p className="mt-5 text-base font-medium leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
                  Подготовленный проект мобильного приложения для фитнес-центра: от пользовательской логики и требований
                  до планирования сроков, бюджета, рисков и внедрения. Формат представлен как управленческий кейс,
                  а не как заявление о промышленном запуске.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-extrabold uppercase text-[var(--color-text-secondary)] tracking-[0.16em]">Процесс</p>
                  <div className="mt-5 grid gap-3">
                    {projectData.process.map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="flex size-9 shrink-0 items-center justify-center border border-[var(--color-border)] text-sm font-extrabold text-[var(--color-accent)]">
                          {index + 1}
                        </span>
                        <div className="h-px flex-1 bg-[rgba(247,242,232,0.14)]" />
                        <span className="w-32 text-right text-sm font-bold text-[var(--color-text-secondary)]">{step}</span>
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
                    <div key={detail.title} className="border-b border-[var(--color-border)] last:border-b-0">
                      <button
                        type="button"
                        className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                        aria-expanded={isOpen}
                        onClick={() => setOpenDetailIndex(isOpen ? -1 : index)}
                      >
                        <span className="text-lg font-bold text-[var(--color-text-primary)]">{detail.title}</span>
                        <ChevronDown className={["text-[var(--color-accent)] transition", isOpen ? "rotate-180" : ""].join(" ")} size={20} />
                      </button>
                      {isOpen ? (
                        <div className="px-6 pb-7 sm:px-8">
                          <p className="text-sm font-medium leading-7 text-[var(--color-text-secondary)]">{detail.content}</p>
                          <div className="mt-5 grid gap-3">
                            {detail.items.map((item) => (
                              <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[var(--color-text-secondary)]">
                                <Check className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={16} />
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
              <div key={metric.label} className="border border-[rgba(20,19,15,0.14)] bg-[rgba(255,255,255,0.62)] p-5">
                <p className="type-display text-3xl font-bold text-[var(--color-text-dark)]">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text-muted-dark)]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ProjectModalBlock title="Что было сделано" items={projectData.tasks} />
            <ProjectModalBlock title="Артефакты и подход" items={projectData.artifacts} />
          </div>

          <div className="border border-[rgba(20,19,15,0.14)] bg-[var(--color-paper)] p-6 text-[var(--color-text-dark)]">
            <div className="flex items-center gap-3">
              <FileText className="text-[var(--color-accent)]" size={22} />
              <h4 className="text-xl font-bold text-[var(--color-text-dark)]">Управленческий вывод</h4>
            </div>
            <p className="mt-4 text-base font-medium leading-8 text-[var(--color-text-muted-dark)]">
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
    <div className="card-lift h-full border border-[var(--color-border-strong)] bg-[rgba(247,242,232,0.045)] p-6">
      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[var(--color-text-secondary)]">
            <Check className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={16} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectModalBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[rgba(20,19,15,0.14)] bg-[var(--color-paper)] p-6 text-[var(--color-text-dark)]">
      <h4 className="text-xl font-bold text-[var(--color-text-dark)]">{title}</h4>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm font-medium leading-6 text-[var(--color-text-muted-dark)]">
            <Check className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={16} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
