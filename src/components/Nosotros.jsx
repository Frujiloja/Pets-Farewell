
import React from "react";
import { Heart } from "lucide-react";


const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-12 h-12 text-pine-600 mx-auto mb-6" />
          <h2 className="text-3xl font-medium text-pine-800 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Somos un equipo dedicado a brindar un servicio compasivo y
            profesional para ayudarte en los momentos más difíciles. Entendemos
            el vínculo especial que existe entre tú y tu mascota.
          </p>
          <p className="text-lg text-gray-600">
            Nuestra misión es proporcionarte el apoyo y la tranquilidad que
            necesitas durante este proceso, asegurando una despedida digna y
            respetuosa para tu compañero peludo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
