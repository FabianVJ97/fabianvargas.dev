
import type { Metadata } from "next";
import HomeLanding from "@/components/HomeLanding";

export const metadata: Metadata = {
  title: "Fabián Vargas | Ingeniero Estadístico",
  description:
    "Portafolio profesional de Fabián Vargas: estadística, ciencia de datos, inteligencia artificial, investigación y desarrollo computacional.",
};

export default function HomePage() {
  return <HomeLanding />;
}