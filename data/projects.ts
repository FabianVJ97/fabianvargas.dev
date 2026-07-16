import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "Redes neuronales MATLAB ↔ Python",
    category: "Inteligencia artificial",
    description:
      "Mecanismo de exportación y validación de redes neuronales feedforward entre MATLAB y Python, verificando la equivalencia de predicciones y métricas.",
    technologies: ["MATLAB", "Python", "Machine Learning"],
    status: "Proyecto de título",
    href: "/proyectos/redes-neuronales",
  },
  {
    title: "Método Bootstrap",
    category: "Inferencia estadística",
    description:
      "Implementación computacional del método bootstrap para estimar sesgo, error estándar e intervalos de confianza mediante remuestreo.",
    technologies: ["R", "Simulación", "Inferencia"],
    status: "Proyecto académico",
    href: "#",
  },
  {
    title: "Algoritmo EM para modelos de mezcla",
    category: "Estimación estadística",
    description:
      "Implementación del algoritmo EM para estimar los parámetros de mezclas de distribuciones exponenciales y Poisson.",
    technologies: ["R", "Máxima verosimilitud", "EM"],
    status: "Proyecto académico",
    href: "#",
  },
  {
    title: "Simulación Monte Carlo",
    category: "Métodos computacionales",
    description:
      "Estudio de integración Monte Carlo utilizando muestreo uniforme, variables antitéticas y muestreo por importancia.",
    technologies: ["R", "Monte Carlo", "Simulación"],
    status: "Proyecto académico",
    href: "#",
  },
];