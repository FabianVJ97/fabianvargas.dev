import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export default function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  const interactiveStyles = interactive
    ? "transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900"
    : "";

  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/40 ${interactiveStyles} ${className}`}
    >
      {children}
    </div>
  );
}