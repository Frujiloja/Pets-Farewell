
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = ({ scrollToSection, handleContactClick }) => {
  return (
    <footer className="bg-[#222222] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pine-600" />
              <span className="text-xl font-semibold">PAWWER</span>
            </div>
            <p className="text-gray-400">
              Brindando un servicio compasivo y profesional para despedir a tu
              compañero peludo.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("servicio")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("fotos")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fotos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("preguntas")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preguntas
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contacto</h3>
            <p className="text-gray-400">
              Disponibles las 24 horas para ayudarte en este momento difícil.
            </p>
            <Button
              onClick={handleContactClick}
              className="bg-white text-[#222222] hover:bg-white/90"
            >
              Contáctanos por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PAWWER. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
