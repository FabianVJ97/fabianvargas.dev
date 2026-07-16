import ButtonLink from "@/components/ui/ButtonLink";

const contactLinks = [
  {
    label: "Correo",
    value: "fovargas@ubiobio.cl",
    href: "mailto:fovargas@ubiobio.cl",
  },
  {
    label: "GitHub",
    value: "github.com/FabianVJ97",
    href: "https://github.com/FabianVJ97",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fovargas",
    href: "https://www.linkedin.com/in/fovargas",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-24"
    >
      <div className="grid gap-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contacto
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            ¿Trabajamos juntos?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Estoy disponible para colaborar en proyectos relacionados con
            estadística, análisis de datos, simulación, investigación,
            automatización e inteligencia artificial.
          </p>

    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <ButtonLink href="mailto:tu-correo@ejemplo.com">
    Enviar correo
  </ButtonLink>

  <ButtonLink
    href="/cv-fabian-vargas.pdf"
    variant="outline"
    download
  >
    Descargar CV
  </ButtonLink>
</div>
        </div>

        <div className="space-y-4">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Correo" ? undefined : "_blank"}
              rel={contact.label === "Correo" ? undefined : "noreferrer"}
              className="block rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-cyan-500/50 hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {contact.label}
              </p>

              <p className="mt-2 break-all text-slate-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}