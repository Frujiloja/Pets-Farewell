
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicio from "@/components/Servicio";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";
import Preguntas from "@/components/Preguntas";
import Fotos from "@/components/Fotos";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.open("https://wa.me/+5491112345678", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        scrolled={scrolled}
        scrollToSection={scrollToSection}
        handleContactClick={handleContactClick}
      />

      <Hero
        handleContactClick={handleContactClick}
      />

      <Servicio />

      <Nosotros />
      
      <Fotos />
      
      <Preguntas />
      
      <Footer
        scrollToSection={scrollToSection}
        handleContactClick={handleContactClick}
      />
    </div>
  );
};

export default Index;
