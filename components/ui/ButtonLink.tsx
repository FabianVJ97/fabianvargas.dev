import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  target?: "_blank";
  download?: boolean;
  className?: string;
};

export default function ButtonLink({
  children,
  href,
  variant = "primary",
  target,
  download = false,
  className = "",
}: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold transition";

  const variantStyles = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    outline:
      "border border-slate-700 text-white hover:border-slate-500 hover:bg-slate-900",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      download={download}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}