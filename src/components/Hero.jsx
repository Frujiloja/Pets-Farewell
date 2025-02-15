
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = ({ handleContactClick }) => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558890/Group_4_obing0.png"
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
          <p
            className="text-xl text-white/90 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Te ofrecemos un servicio de entierro en casa, para que puedas
            recordarlo de la mejor manera y sin preocupaciones
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
  );
};

export default Hero;
