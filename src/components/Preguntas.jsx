
import React from "react";
import { HelpCircle } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const Preguntas = () => {
  return (
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
              <AccordionTrigger>¿Qué debo preparar?</AccordionTrigger>
              <AccordionContent>
                No necesitas preparar nada especial. Nosotros nos encargamos de
                todo el proceso. Si deseas, puedes tener lista alguna foto o
                recuerdo especial para la ceremonia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
