import React from 'react';
import { motion } from 'framer-motion';
import { eventsData } from '../../data/eventsData';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { FlamencoEvent } from '../../types';

interface EventsSectionProps {
  onSelectEvent: (event: FlamencoEvent) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  return (
    <section id="eventos" className="relative py-28 bg-flamenco-stage overflow-hidden border-t border-flamenco-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
              Escenarios Vivos & Cartelera
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight">
              Eventos, Galas y Masterclasses
            </h2>
            <p className="mt-4 text-sm sm:text-base text-flamenco-muted font-sans font-light">
              El flamenco nace para ser compartido sobre las tablas. Descubre las próximas galas teatrales en Ronda, cursos intensivos y espectáculos organizados por la Academia FlamenKos Miguel Lorca.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-flamenco-albero font-sans">
            <Sparkles className="w-4 h-4" />
            <span>Temporada 2026 Abierta</span>
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-sm overflow-hidden bg-flamenco-surface border border-flamenco-borderSubtle hover:border-flamenco-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-flamenco-void">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flamenco-surface via-transparent to-transparent" />
                
                {/* Insignia de categoría y estado */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-sans font-semibold bg-flamenco-almagre text-white rounded-sm">
                    {event.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-semibold bg-flamenco-void/90 text-flamenco-albero border border-flamenco-gold/30 rounded-sm">
                    {event.status}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-flamenco-linen mb-3 group-hover:text-flamenco-albero transition-colors">
                    {event.title}
                  </h3>

                  {/* Metadatos de fecha y lugar */}
                  <div className="space-y-2 mb-4 text-xs font-sans text-flamenco-muted">
                    <div className="flex items-center gap-2 text-flamenco-linen/90">
                      <Calendar className="w-4 h-4 text-flamenco-albero flex-shrink-0" />
                      <span>{event.date}</span>
                      <span className="text-white/20">·</span>
                      <Clock className="w-4 h-4 text-flamenco-albero flex-shrink-0 ml-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-flamenco-muted">
                      <MapPin className="w-4 h-4 text-flamenco-almagre flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-sm text-flamenco-muted font-sans font-light leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <MagneticButton
                    variant="outline"
                    onClick={() => onSelectEvent(event)}
                    className="w-full justify-between text-xs"
                  >
                    <span>{event.ctaText || 'Más Información y Reservas'}</span>
                    <ArrowRight className="w-4 h-4 text-flamenco-albero group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
