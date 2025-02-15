import { useEffect, useState } from "react";
import { Heart, Camera, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    window.open('https://wa.me/+5491112345678', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
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

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/01075dfa-33cc-49e8-9e6e-fc51755a9ece.png"
            alt="Mano sosteniendo pata de perro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 animate-fade-up">
              Un adios
              <br />
              <span className="font-medium">lleno de amor.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Te ofrecemos un servicio de entierro en casa,
              para que puedas recordarlo de la mejor manera y sin preocupaciones
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-white text-pine-800 hover:bg-white/90 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Contactanos
            </Button>
          </div>
        </div>
      </section>

      <section id="servicio" className="py-20 bg-pine-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-pine-600 mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-pine-800 mb-6">
              Nuestro Servicio
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Ofrecemos un servicio compasivo y personalizado para despedir a tu compañero peludo con dignidad y amor.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-pine-800 mb-4">
                  Servicio a Domicilio
                </h3>
                <p className="text-gray-600">
                  Nos encargamos de todo el proceso en la comodidad de tu hogar
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-pine-800 mb-4">
                  Atención 24/7
                </h3>
                <p className="text-gray-600">
                  Estamos disponibles cuando nos necesites, en cualquier momento
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-pine-800 mb-4">
                  Ceremonia Personal
                </h3>
                <p className="text-gray-600">
                  Organizamos una despedida significativa y respetuosa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-pine-600 mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-pine-800 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos un equipo dedicado a brindar un servicio compasivo y profesional
              para ayudarte en los momentos más difíciles. Entendemos el vínculo
              especial que existe entre tú y tu mascota.
            </p>
            <p className="text-lg text-gray-600">
              Nuestra misión es proporcionarte el apoyo y la tranquilidad que
              necesitas durante este proceso, asegurando una despedida digna y
              respetuosa para tu compañero peludo.
            </p>
          </div>
        </div>
      </section>

      <section id="fotos" className="py-20 bg-pine-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-pine-600 mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-pine-800">
              Momentos Especiales
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Momento especial 1"
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
              alt="Momento especial 2"
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1438565434616-3ef039228b15"
              alt="Momento especial 3"
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      <section id="preguntas" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-pine-600 mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-pine-800">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cuál es el proceso del servicio?
                </AccordionTrigger>
                <AccordionContent>
                  Nuestro servicio incluye la recogida a domicilio, preparación
                  respetuosa, ceremonia personalizada y entierro digno. Todo el
                  proceso se realiza con el máximo cuidado y respeto.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Cuánto tiempo toma el servicio?
                </AccordionTrigger>
                <AccordionContent>
                  El servicio completo suele tomar entre 2-3 horas, pero nos
                  adaptamos a tus necesidades y preferencias para asegurar una
                  despedida significativa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Qué debo preparar?
                </AccordionTrigger>
                <AccordionContent>
                  No necesitas preparar nada especial. Nosotros nos encargamos
                  de todo el proceso. Si deseas, puedes tener lista alguna foto
                  o recuerdo especial para la ceremonia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-[#222222] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-pine-600" />
                <span className="text-xl font-semibold">PAWWER</span>
              </div>
              <p className="text-gray-400">
                Brindando un servicio compasivo y profesional para despedir a tu compañero peludo.
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
            <p>&copy; {new Date().getFullYear()} PAWWER. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
