import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outlineDark";

interface SharedProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "border-[var(--color-text-dark)] bg-[var(--color-text-dark)] text-[var(--color-paper)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]",
  secondary:
    "border-[rgba(20,19,15,0.2)] bg-[var(--color-paper)] text-[var(--color-text-dark)] hover:border-[var(--color-accent)] hover:bg-white",
  ghost: "border-transparent bg-transparent text-[var(--color-text-dark)] hover:border-[rgba(20,19,15,0.2)] hover:bg-white/45",
  dark:
    "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-text-dark)] shadow-[8px_8px_0_rgba(214,166,69,0.18)] hover:bg-[var(--color-accent-strong)]",
  outlineDark:
    "border-[rgba(247,242,232,0.18)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-muted)]",
};

export function Button({ children, icon, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = [
    "button-base disabled:cursor-not-allowed disabled:opacity-50",
    variantStyles[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
