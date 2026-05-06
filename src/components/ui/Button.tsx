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
  primary: "bg-graphite-900 text-white hover:bg-graphite-800 border-graphite-900",
  secondary: "bg-white text-graphite-900 hover:bg-graphite-50 border-graphite-200",
  ghost: "bg-transparent text-graphite-800 hover:bg-white/70 border-transparent",
  dark: "bg-gold-500 text-graphite-950 hover:bg-gold-400 border-gold-500",
  outlineDark: "bg-transparent text-white hover:bg-white/10 border-white/10",
};

export function Button({ children, icon, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = [
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50",
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
