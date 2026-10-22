import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface LocationFaqSectionProps {
  onOpenBooking: () => void;
}

export const LocationFaqSection: React.FC<LocationFaqSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿A partir de qué edad pueden empezar los niños?',
      a: 'Aceptamos a pequeños a partir de los 3 años de edad en nuestro programa "FlamenKitos". A través de dinámicas rítmicas, palmas y juegos corporales, asimilan el compás de forma natural y desarrollan su coordinación motriz.'
    },
    {
      q: '¿Es necesario haber bailado antes para entrar a grupos de adultos?',
      a: 'Rotundamente no. Contamos con grupos específicos de Iniciación Absoluta para adultos. Aprenderás desde cero la colocación de la espalda, el braceo, los giros de muñeca y los primeros zapateados en un ambiente cálido, paciente y estimulante.'
    },
    {
      q: '¿Qué necesito llevar para mi primera clase de prueba gratuita?',
      a: 'Para la primera sesión de prueba no necesitas equipamiento profesional. Basta con ropa cómoda (mallas, pantalón elástico o falda con vuelo) y un calzado cerrado con un tacón firme y ancho (evitar tacones de aguja o zapatillas con suela de goma excesivamente blanda). Más adelante te asesoraremos sobre el calzado flamenco con clavos adecuado.'
    },
    {
      q: '¿Puedo matricularme a mitad de curso?',
      a: 'Sí. Nuestra matrícula permanece abierta durante todo el año escolar. Miguel Lorca realiza una valoración previa para integrarte en el grupo que mejor se adapte a tu ritmo de aprendizaje.'
    },
    {
      q: '¿Cómo son las instalaciones de la academia en Ronda?',
      a: 'Nuestra sede en C. Molino, 6b cuenta con tarima flotante de madera amortiguada, diseñada específicamente para absorber el impacto del taconeo y proteger rodillas, tobillos y lumbares. Además disponemos de espejos de danza continua y climatización.'
    }
  ];

  return (
    <section id="contacto" className="relative py-28 bg-flamenco-stage overflow-hidden border-t border-flamenco-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
            Sede Central & Dudas Frecuentes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight mb-4">
            Encuéntranos en el Corazón de Ronda
          </h2>
          <p className="text-sm sm:text-base text-flamenco-muted font-sans font-light">
            Estamos a tu disposición para orientarte, mostrarte las instalaciones o reservar tu plaza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Sede e Información de Contacto */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-sm bg-flamenco-surface border border-flamenco-gold/20 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-flamenco-linen mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-flamenco-almagre" />
                <span>Sede Oficial FlamenKos</span>
              </h3>

              <div className="space-y-4 text-sm font-sans text-flamenco-muted mb-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-flamenco-albero block mb-1">
                    Dirección
                  </span>
                  <p className="text-base text-flamenco-linen font-medium">
                    Calle Molino, 6b
                  </p>
                  <p className="text-sm text-flamenco-muted">
                    29400 Ronda, Málaga (Andalucía, España)
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-flamenco-albero block mb-1">
                    Dirección Artística
                  </span>
                  <p className="text-base text-flamenco-linen">
                    Maestro Miguel Lorca
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-flamenco-albero block mb-1">
                    Horario de Atención y Secretaría
                  </span>
                  <p className="text-sm text-flamenco-linen">
                    Lunes a Viernes de 16:30 a 21:30 H · Sábados de 10:00 a 14:00 H
                  </p>
                </div>
              </div>

              {/* Botón directo de reserva */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  variant="gold"
                  onClick={onOpenBooking}
                  className="flex-1 py-3 text-xs"
                >
                  <Sparkles className="w-4 h-4 mr-1 text-flamenco-void" />
                  Reservar Clase Gratis
                </MagneticButton>

                <a
                  href="https://maps.google.com/?q=C.+Molino,+6b,+29400+Ronda,+Málaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-sm border border-white/10 hover:border-flamenco-gold/40 text-xs text-flamenco-linen uppercase tracking-wider font-sans transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Garantías de la Escuela */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-flamenco-surface/60 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-flamenco-albero mb-2" />
                <h4 className="font-serif text-sm font-bold text-flamenco-linen mb-1">Tarima Amortiguada</h4>
                <p className="text-xs text-flamenco-muted font-sans">
                  Suelo flotante que previene lesiones articulares en el taconeo.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-flamenco-surface/60 border border-white/5">
                <HeartHandshake className="w-5 h-5 text-flamenco-almagre mb-2" />
                <h4 className="font-serif text-sm font-bold text-flamenco-linen mb-1">Trato Familiar</h4>
                <p className="text-xs text-flamenco-muted font-sans">
                  Ambiente acogedor y respetuoso para alumnos de todas las edades.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Preguntas Frecuentes (Acordeón) */}
          <div className="lg:col-span-6">
            <h3 className="font-serif text-2xl font-bold text-flamenco-linen mb-6">
              Preguntas Frecuentes
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-sm border border-flamenco-borderSubtle bg-flamenco-surface overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-flamenco-linen hover:text-flamenco-albero transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-flamenco-albero flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-sm font-sans font-light text-flamenco-muted leading-relaxed border-t border-white/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
