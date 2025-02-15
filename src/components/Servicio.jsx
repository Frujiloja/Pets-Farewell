
import React from 'react';
import { Heart } from "lucide-react";


const Servicio = () => {
  return (
    <section id="servicio" className="py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Heart className="w-12 h-12 text-pine-600 mx-auto mb-6" />
        <h2 className="text-3xl font-medium text-pine-800 mb-6">
          Nuestro Servicio
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Ofrecemos un servicio compasivo y personalizado para despedir a tu
          compañero peludo con dignidad y amor.
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
  );
};

export default Servicio;
