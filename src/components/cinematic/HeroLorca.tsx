import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowDown, Calendar, Users } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface HeroLorcaProps {
  onOpenBooking: () => void;
}

export const HeroLorca: React.FC<HeroLorcaProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Fotografía de Fondo Cinemática de Miguel Lorca */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/miguel-lorca-hero.png"
          alt="Miguel Lorca bailando flamenco en escena"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Degradado teatral de claroscuro (Caja Negra) */}
        <div className="absolute inset-0 bg-gradient-to-t from-flamenco-void via-flamenco-void/70 to-flamenco-void/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-flamenco-void via-flamenco-void/60 to-transparent" />
        {/* Foco de luz cenital teatral (spotlight) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-flamenco-almagre/15 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl">
          {/* Insignia de Localización y Prestigio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-flamenco-gold/30 bg-flamenco-void/80 backdrop-blur-md mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-flamenco-albero" />
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-flamenco-linen/90 font-medium">
              Ronda, Málaga · C. Molino, 6b
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-flamenco-almagre animate-ping" />
          </motion.div>

          {/* Gran Titular Editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-flamenco-linen leading-[1.08] mb-6"
          >
            La fuerza del <span className="italic font-normal text-flamenco-albero">desgarro</span>. <br />
            El rigor del <span className="text-white border-b-2 border-flamenco-almagre pb-1">compás</span>.
          </motion.h1>

          {/* Subtítulo descriptivo con Miguel Lorca */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-flamenco-linen/85 font-sans font-light leading-relaxed max-w-2xl mb-8"
          >
            Bajo la dirección del maestro <strong className="text-flamenco-gold font-serif text-xl font-normal">Miguel Lorca</strong>, con décadas de trayectoria sobre las tablas de toda Europa. Formación en danza flamenca viva en Ronda para todas las edades: desde la cantera infantil (a partir de 3 años) hasta aficionados adultos y formación profesional.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <MagneticButton
              variant="gold"
              onClick={onOpenBooking}
              className="py-4 px-8 text-sm"
            >
              <Sparkles className="w-4 h-4 mr-1 text-flamenco-void" />
              Reservar Clase de Prueba Gratuita
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => {
                const el = document.querySelector('#disciplinas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-4 px-6 text-sm"
            >
              Explorar Disciplinas
            </MagneticButton>
          </motion.div>

          {/* Datos y Rasgos de la Escuela */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-flamenco-albero mb-1">
                <Users className="w-4 h-4" />
                <span className="font-serif text-2xl font-bold text-flamenco-linen">3+ Años</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-flamenco-muted font-sans">
                A todas las edades y niveles
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-flamenco-albero mb-1">
                <Calendar className="w-4 h-4" />
                <span className="font-serif text-2xl font-bold text-flamenco-linen">Galas & Giras</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-flamenco-muted font-sans">
                Escenarios reales en Ronda y teatros
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <span className="font-serif text-2xl font-bold text-flamenco-linen mb-1">
                Europa & Ronda
              </span>
              <span className="text-xs uppercase tracking-wider text-flamenco-muted font-sans">
                Maestría internacional y raíz andaluza
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de Desplazamiento Inferior */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-flamenco-muted cursor-pointer"
        onClick={() => {
          const el = document.querySelector('#manifiesto');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Descubre el Duende</span>
        <ArrowDown className="w-4 h-4 text-flamenco-albero" />
      </motion.div>
    </section>
  );
};
