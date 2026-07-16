import Link from "next/link";

export default function RedesNeuronalesPage() {
  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            FV
          </Link>

          <Link
            href="/#proyectos"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            ← Volver a proyectos
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-6xl px-6 py-20">
        {/* Encabezado */}
        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Proyecto de título
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Exportación y validación de redes neuronales entre MATLAB y Python
          </h1>

          <p className="mt-7 text-xl leading-9 text-slate-400">
            Desarrollo de un mecanismo para transferir modelos de redes
            neuronales feedforward entrenados en MATLAB hacia Python,
            preservando su arquitectura, parámetros y capacidad predictiva.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "MATLAB",
              "Python",
              "Redes neuronales",
              "Machine Learning",
              "Validación de modelos",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Resumen */}
        <section className="mt-20 grid gap-10 border-t border-slate-800 pt-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Resumen
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              El proyecto aborda el problema de interoperabilidad entre
              MATLAB y Python para modelos de redes neuronales feedforward.
              Aunque ambas plataformas permiten implementar modelos de
              aprendizaje automático, sus estructuras internas y formatos de
              almacenamiento son diferentes.
            </p>

            <p>
              Se desarrolló un procedimiento de exportación capaz de recuperar
              la arquitectura de la red, los pesos, los sesgos y los parámetros
              de normalización utilizados durante el entrenamiento.
            </p>
          </div>
        </section>

        {/* Problema y solución */}
        <section className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Problema
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Incompatibilidad entre plataformas
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Un modelo entrenado en MATLAB no puede utilizarse directamente
              en Python debido a diferencias en la representación de capas,
              funciones de activación, normalización, pesos y sesgos.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Solución
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Mecanismo de exportación reproducible
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Se implementó un formato intermedio para almacenar los
              parámetros del modelo y reconstruir la red en Python,
              reproduciendo el flujo de procesamiento realizado en MATLAB.
            </p>
          </div>
        </section>

        {/* Metodología */}
        <section className="mt-20 border-t border-slate-800 pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Metodología
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Etapas principales del proyecto
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Entrenamiento",
                description:
                  "Entrenamiento de una red neuronal feedforward en MATLAB utilizando el conjunto de datos Iris.",
              },
              {
                number: "02",
                title: "Extracción",
                description:
                  "Obtención de la arquitectura, pesos, sesgos, funciones de activación y parámetros de normalización.",
              },
              {
                number: "03",
                title: "Reconstrucción",
                description:
                  "Implementación equivalente de la red neuronal en Python utilizando los parámetros exportados.",
              },
              {
                number: "04",
                title: "Validación",
                description:
                  "Comparación de predicciones, métricas y errores numéricos entre ambas implementaciones.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 p-7"
              >
                <p className="font-mono text-sm text-cyan-400">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resultados */}
        <section className="mt-20 border-t border-slate-800 pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Resultados
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Equivalencia entre MATLAB y Python
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            La validación permitió comprobar que la red reconstruida en Python
            conserva el comportamiento predictivo del modelo original,
            manteniendo resultados consistentes entre ambas plataformas.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-3xl font-bold text-cyan-400">4-10-20-5-3</p>
              <p className="mt-3 text-sm text-slate-400">
                Arquitectura final
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-3xl font-bold text-cyan-400">Iris</p>
              <p className="mt-3 text-sm text-slate-400">
                Conjunto de datos
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-3xl font-bold text-cyan-400">MATLAB ↔ Python</p>
              <p className="mt-3 text-sm text-slate-400">
                Plataformas validadas
              </p>
            </div>
          </div>
        </section>

        {/* Enlaces */}
        <section className="mt-20 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Recursos
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Código, documentación y resultados
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Próximamente esta sección incluirá el repositorio de GitHub, el
            informe completo y una demostración del mecanismo desarrollado.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Ver código en GitHub
            </a>

            <a
              href="#"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-slate-500 hover:bg-slate-900"
            >
              Leer informe
            </a>
          </div>
        </section>
      </article>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© 2026 Fabián Vargas</p>
          <Link href="/">Volver al inicio</Link>
        </div>
      </footer>
    </main>
  );
}