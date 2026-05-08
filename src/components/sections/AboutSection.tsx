import { CheckCircle2, GraduationCap, TrendingUp } from "lucide-react";
import { aboutMetrics, aboutParagraphs, achievements, education, personal } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="paper-section diagonal-top py-24 sm:py-28">
      <div className="paper-inner section-shell">
        <SectionHeading
          eyebrow="Обо мне"
          title="Системный проектный подход, выросший из операционного управления"
          description="Я развиваюсь как руководитель проектов и переношу практический управленческий опыт в цифровую среду: туда, где важны требования, команда, сроки, коммуникации и понятный результат."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <Reveal>
            <div className="paper-panel image-zoom h-full p-3 lg:-mt-16">
              <div className="aspect-[4/5] overflow-hidden bg-[rgba(20,19,15,0.12)]">
                <img
                  src={personal.photoUrl}
                  alt="Портрет Артёма Дегтярева"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </div>
              <div className="grid gap-3 border-t border-[rgba(20,19,15,0.14)] p-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-extrabold uppercase text-[var(--color-text-muted-dark)] tracking-[0.16em]">Локация</p>
                  <p className="mt-2 font-extrabold text-[var(--color-text-dark)]">{personal.location}</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-[var(--color-text-muted-dark)] tracking-[0.16em]">Фокус</p>
                  <p className="mt-2 font-extrabold text-[var(--color-text-dark)]">AI / Digital PM</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6">
              <div className="paper-panel p-6 sm:p-9 lg:translate-x-[-36px]">
                <div className="grid gap-6 text-lg font-medium leading-[1.9] text-[var(--color-text-dark)]">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {aboutMetrics.map((metric) => (
                  <div key={metric.label} className="card-lift border border-[rgba(20,19,15,0.14)] bg-[rgba(255,255,255,0.46)] p-5">
                    <p className="type-display text-3xl font-bold text-[var(--color-text-dark)]">{metric.value}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-text-muted-dark)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.86fr]">
          <Reveal>
            <div className="paper-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-[var(--color-accent)]" size={22} />
                <h3 className="text-xl font-bold text-[var(--color-text-dark)]">Практические результаты</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-medium leading-6 text-[var(--color-text-muted-dark)]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="paper-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[var(--color-accent)]" size={22} />
                <h3 className="text-xl font-bold text-[var(--color-text-dark)]">Образование и курсы</h3>
              </div>
              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <p key={item} className="border-l border-[var(--color-accent)] pl-4 text-sm font-medium leading-6 text-[var(--color-text-muted-dark)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
