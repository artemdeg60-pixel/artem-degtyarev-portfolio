interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]";
  const descriptionClass = tone === "dark" ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted-dark)]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-5 text-balance text-[length:var(--size-h1)] font-bold leading-[var(--leading-tight)] ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-6 max-w-2xl text-base leading-[var(--leading-loose)] sm:text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
