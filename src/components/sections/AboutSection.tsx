import { CheckCircle2, GraduationCap, TrendingUp } from "lucide-react";
import { aboutMetrics, aboutParagraphs, achievements, education, personal } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="bg-graphite-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Обо мне"
          title="Системный проектный подход, выросший из операционного управления"
          description="Я развиваюсь как руководитель проектов и переношу практический управленческий опыт в цифровую среду: туда, где важны требования, команда, сроки, коммуникации и понятный результат."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <div className="premium-panel h-full p-4">
              <div className="aspect-[4/5] overflow-hidden bg-graphite-100">
                <img
                  src={personal.photoUrl}
                  alt="Портрет Артёма Дегтярева"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </div>
              <div className="grid gap-3 border-t border-graphite-100 p-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-graphite-500">Локация</p>
                  <p className="mt-2 font-semibold text-graphite-950">{personal.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-graphite-500">Фокус</p>
                  <p className="mt-2 font-semibold text-graphite-950">AI / Digital PM</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6">
              <div className="premium-panel p-6 sm:p-8">
                <div className="grid gap-5 text-base leading-8 text-graphite-600">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {aboutMetrics.map((metric) => (
                  <div key={metric.label} className="border border-graphite-100 bg-white p-5">
                    <p className="text-3xl font-semibold text-graphite-950">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-graphite-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.86fr]">
          <Reveal>
            <div className="premium-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-gold-600" size={22} />
                <h3 className="text-xl font-semibold text-graphite-950">Практические результаты</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-graphite-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-gold-600" size={22} />
                <h3 className="text-xl font-semibold text-graphite-950">Образование и курсы</h3>
              </div>
              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <p key={item} className="border-l border-gold-500 pl-4 text-sm leading-6 text-graphite-600">
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
