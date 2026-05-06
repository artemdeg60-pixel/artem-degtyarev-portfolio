import { ArrowRight, BriefcaseBusiness, MapPin, Send } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { heroChips, heroHighlights, personal } from "../../data/siteContent";
import type { SectionId } from "../../types/site";

interface HeroProps {
  onNavigate: (sectionId: SectionId) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-graphite-950 pt-20 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,13,0.98)_0%,rgba(20,21,22,0.92)_48%,rgba(20,21,22,0.70)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <img
          src={personal.photoUrl}
          alt="Портрет Артёма Дегтярева"
          className="h-full w-full object-cover object-[50%_20%] opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0c0d_0%,rgba(11,12,13,0.68)_34%,rgba(11,12,13,0.04)_100%)]" />
      </div>

      <div className="section-shell relative grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-[1.06fr_0.94fr] lg:py-24">
        <Reveal className="max-w-3xl">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 border border-gold-400/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.22em] text-gold-300">
            <BriefcaseBusiness size={15} />
            {personal.positioning}
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">{personal.name}</h1>
          <p className="mt-4 text-2xl font-medium text-gold-300 sm:text-3xl">{personal.role}</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Координирую людей, структурирую процессы и перевожу управленческие задачи в понятные планы, артефакты и
            цифровую логику реализации. Развиваюсь в project management на стыке бизнеса, продукта и AI-инструментов.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="dark" icon={<ArrowRight size={18} />} onClick={() => onNavigate("project")}>
              Смотреть проект
            </Button>
            <Button variant="secondary" icon={<Send size={18} />} onClick={() => onNavigate("contacts")}>
              Связаться со мной
            </Button>
            <Button variant="outlineDark" onClick={() => onNavigate("documents")}>
              Открыть документы
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <span key={chip} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/70">
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:justify-self-end">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="border border-white/10 bg-white/[0.06] p-3 shadow-premium backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite-800">
                <img
                  src={personal.photoUrl}
                  alt="Артём Дегтярев"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(11,12,13,0)_0%,rgba(11,12,13,0.86)_100%)] p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <MapPin size={16} className="text-gold-300" />
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-6 lg:-left-12 lg:right-8 lg:mt-0">
              {heroHighlights.map((item) => (
                <div key={item.label} className="border border-white/10 bg-graphite-900/90 p-4 shadow-subtle backdrop-blur">
                  <p className="text-2xl font-semibold text-gold-300">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
