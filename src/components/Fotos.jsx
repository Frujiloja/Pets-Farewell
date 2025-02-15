
import React from "react";
import { Camera } from "lucide-react";

const Fotos = () => {
  return (
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
  );
};

export default Fotos;
