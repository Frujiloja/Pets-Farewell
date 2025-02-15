
import React from 'react';
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ scrolled, scrollToSection, handleContactClick }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-pine-600" />
            <span className="text-xl font-semibold text-pine-800">PAWWER</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("servicio")}
                className="text-[#000000e6] hover:text-black transition-colors"
              >
                Servicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-[#000000e6] hover:text-black transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("fotos")}
                className="text-[#000000e6] hover:text-black transition-colors"
              >
                Fotos
              </button>
              <button
                onClick={() => scrollToSection("preguntas")}
                className="text-[#000000e6] hover:text-black transition-colors"
              >
                Preguntas
              </button>
            </div>
            <Button
              onClick={handleContactClick}
              className="bg-[#000000e6] hover:bg-black text-white"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
