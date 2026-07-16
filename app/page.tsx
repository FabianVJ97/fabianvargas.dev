import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      {/* Barra de navegación */}

      <Navbar />

      {/* Presentación principal */}

      <Hero />

      {/* Estadísticas */}

      <Stats />


      {/* Sobre mí */}
      
      <About />

      {/* Proyecto Destacado */}

      <FeaturedProject />

      {/* Proyectos */}

      <ProjectsSection />

      {/* Experiencia */}

      <Experience />

      {/* Contacto */}

      <Contact />

      {/* Pie de página */}
      <Footer />
    </main>
  );
}