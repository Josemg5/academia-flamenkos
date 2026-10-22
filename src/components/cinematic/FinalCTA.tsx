import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Instagram, Facebook, Phone } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Solo aplicar efecto magnético en escritorio con ratón
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;
    setPos({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full bg-[#990000] text-black py-20 sm:py-40 px-4 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-[#660000]">
      {/* Detalle lumínico sutil en degradado carmín */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#880000] via-[#990000] to-[#770000] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.5em] font-sans font-bold text-black/75 mb-4 sm:mb-6 block">
          Academia FlamenKos · Ronda
        </span>

        {/* Texto Monumental Negro con escalado responsive perfecto */}
        <h2 className="font-serif text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-black leading-[1.0] sm:leading-[0.95] max-w-5xl mb-6 sm:mb-8">
          Siente el compás. <br />
          Inicia tu legado.
        </h2>

        {/* Subtítulo refinado */}
        <p className="text-xs sm:text-base text-black/85 font-sans tracking-[0.15em] sm:tracking-[0.2em] uppercase max-w-2xl mb-8 sm:mb-12 font-medium px-2 leading-relaxed">
          Consulta la disponibilidad de plazas, horarios de nuestra cantera y formaciones profesionales con Miguel Lorca.
        </p>

        {/* Acciones principales adaptadas a pantallas táctiles y escritorio */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mb-12 sm:mb-16">
          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-14 py-4 sm:py-6 bg-black active:bg-[#1a1a1a] text-[#E5E5E5] font-sans text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:bg-[#111111] transition-colors"
          >
            <span>CONTACTA CON NOSOTROS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#CC0000] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
          </motion.button>

          <a
            href="tel:635964125"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-6 bg-black/15 hover:bg-black/25 active:bg-black/30 text-black font-sans text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold border border-black/30 transition-colors"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>635 96 41 25</span>
          </a>
        </div>

        {/* Datos de Sede y Redes */}
        <div className="pt-8 sm:pt-12 border-t border-black/20 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-black/80 gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black flex-shrink-0" />
            <span className="font-medium">Calle Molino, 6b · 29400 Ronda (Málaga)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/miguellorcaronda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 py-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@miguellorcaronda</span>
            </a>

            <a
              href="http://instagram.com/academia_flamenkos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 py-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@academia_flamenkos</span>
            </a>

            <a
              href="https://www.facebook.com/AcademiaDeDanzaFlamenkos/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 py-1"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
