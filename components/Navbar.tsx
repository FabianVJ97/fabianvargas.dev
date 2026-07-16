"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          <Link
            href="/#inicio"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white"
          >
            FV
          </Link>

          {/* Navegación para computador */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botón para celular */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-white transition hover:border-slate-500 hover:bg-slate-900 md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Menú desplegable para celular */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-80 border-t border-slate-800 pb-5 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}