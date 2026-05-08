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
    <section id="home" className="section-cut relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)] pt-[var(--header-height)] text-[var(--color-text-primary)]">
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(13,13,11,0.98)_0%,rgba(13,13,11,0.94)_45%,rgba(31,28,20,0.72)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <img
          src={personal.photoUrl}
          alt="Портрет Артёма Дегтярева"
          className="h-full w-full object-cover object-[50%_20%] opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d0d0b_0%,rgba(13,13,11,0.76)_38%,rgba(13,13,11,0.08)_100%)]" />
      </div>
      <div className="absolute bottom-0 left-0 h-[22vh] w-full bg-[linear-gradient(172deg,transparent_0%,transparent_47%,var(--color-paper)_48%,var(--color-paper)_100%)]" />

      <div className="section-shell relative grid min-h-[calc(100svh-var(--header-height))] items-center gap-12 py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:py-20">
        <Reveal className="max-w-4xl">
          <div className="load-rise inline-flex max-w-full flex-wrap items-center gap-2 border border-[var(--color-border)] bg-[rgba(247,242,232,0.04)] px-3 py-2 text-xs font-extrabold uppercase leading-5 text-[var(--color-accent)] tracking-[0.16em]">
            <BriefcaseBusiness size={15} />
            {personal.positioning}
          </div>
          <h1 className="load-rise load-delay-1 mt-8 max-w-4xl text-balance text-[length:var(--size-hero)] font-extrabold leading-[var(--leading-tight)] text-[var(--color-text-primary)]">
            {personal.name}
          </h1>
          <p className="load-rise load-delay-2 mt-5 text-xl font-extrabold uppercase leading-8 text-[var(--color-accent)] tracking-[0.12em] sm:text-2xl">
            {personal.role}
          </p>
          <div className="load-rise load-delay-3 mt-9 min-h-[136px] max-w-2xl border-y border-[rgba(247,242,232,0.14)]" aria-hidden="true">
            <div className="h-full bg-[linear-gradient(135deg,rgba(214,166,69,0.18)_0_1px,transparent_1px_28px)]" />
          </div>

          <div className="load-rise load-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <span
                key={chip}
                className="stagger-child border border-[rgba(247,242,232,0.12)] bg-[rgba(247,242,232,0.04)] px-3 py-2 text-xs font-bold text-[var(--color-text-secondary)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:justify-self-end">
          <div className="hero-portrait relative mx-auto max-w-md lg:mx-0">
            <div className="premium-panel image-zoom p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-raised)]">
                <img
                  src={personal.photoUrl}
                  alt="Артём Дегтярев"
                  className="h-full w-full object-cover object-[50%_18%] grayscale-[0.15]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(13,13,11,0)_0%,rgba(13,13,11,0.92)_100%)] p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-text-primary)]">
                    <MapPin size={16} className="text-[var(--color-accent)]" />
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-7 lg:-left-16 lg:right-5 lg:mt-0">
              {heroHighlights.map((item) => (
                <div key={item.label} className="card-lift border border-[var(--color-border)] bg-[rgba(13,13,11,0.9)] p-4 shadow-subtle backdrop-blur">
                  <p className="type-display text-2xl font-bold text-[var(--color-accent)]">{item.value}</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-[var(--color-text-secondary)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
