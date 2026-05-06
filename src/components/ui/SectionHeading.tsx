interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-graphite-950";
  const descriptionClass = tone === "dark" ? "text-white/70" : "text-graphite-500";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
