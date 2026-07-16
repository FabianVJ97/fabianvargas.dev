import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline";
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  const styles = {
    default: "bg-slate-800 text-slate-300",
    outline: "border border-slate-700 text-slate-400",
  };

  return (
    <span
      className={`rounded-md px-3 py-1.5 text-xs ${styles[variant]}`}
    >
      {children}
    </span>
  );
}