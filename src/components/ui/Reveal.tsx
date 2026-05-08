import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const style = { "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties;

  return (
    <div className={`studio-reveal ${className}`.trim()} data-studio-reveal style={style}>
      {children}
    </div>
  );
}
