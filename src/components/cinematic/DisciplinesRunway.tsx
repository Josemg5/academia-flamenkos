import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { disciplinesData } from '../../data/disciplinesData';
import { Discipline } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface DisciplinesRunwayProps {
  onSelectDiscipline: (discipline: Discipline) => void;
}

export const DisciplinesRunway: React.FC<DisciplinesRunwayProps> = ({ onSelectDiscipline }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'infantil' | 'adultos' | 'tecnica'>('todos');

  const filteredDisciplines = disciplinesData.filter((disc) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'infantil') return disc.category === 'infantil';
    if (activeFilter === 'adultos') return disc.ages === 'Adultos' || disc.level === 'Iniciación (desde cero)';
    if (activeFilter === 'tecnica') return disc.category === 'tecnica' || disc.category === 'accesorios';
    return true;
  });

  return (
    <section id="disciplinas" className="relative py-28 bg-flamenco-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
              Colección Formativa & Cursos
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight">
              Disciplinas de Danza Flamenca
            </h2>
            <p className="mt-4 text-sm sm:text-base text-flamenco-muted font-sans font-light">
              Desde las primeras palmas a los 3 años hasta la maestría sobre los escenarios. Cada curso está diseñado con atención rigurosa a la biomecánica, la colocación y el sentimiento.
            </p>
          </div>

          {/* Filtros de Colección */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Todas las Disciplinas' },
              { id: 'infantil', label: 'Infantil (desde 3 años)' },
              { id: 'adultos', label: 'Iniciación Adultos' },
              { id: 'tecnica', label: 'Técnica & Accesorios' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-sans rounded-sm transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-flamenco-almagre text-white border-flamenco-carmine shadow-md'
                    : 'bg-flamenco-surface text-flamenco-muted border-flamenco-borderSubtle hover:border-flamenco-gold/30 hover:text-flamenco-linen'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla Editorial de Disciplinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDisciplines.map((disc) => (
              <motion.article
                layout
                key={disc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-sm overflow-hidden bg-flamenco-surface border border-flamenco-borderSubtle hover:border-flamenco-gold/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Imagen de la disciplina con zoom suave al hover */}
                <div className="relative h-64 overflow-hidden bg-flamenco-stage">
                  <img
                    src={disc.image}
                    alt={disc.title}
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flamenco-surface via-transparent to-transparent opacity-90" />
                  
                  {/* Badge de Nivel y Edad */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-semibold bg-flamenco-void/90 text-flamenco-albero border border-flamenco-gold/30 rounded-sm backdrop-blur-md">
                      {disc.ages}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-semibold bg-flamenco-almagre/85 text-white rounded-sm backdrop-blur-md">
                      {disc.level}
                    </span>
                  </div>
                </div>

                {/* Contenido textual */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-flamenco-linen mb-2 group-hover:text-flamenco-gold transition-colors">
                      {disc.title}
                    </h3>
                    <p className="text-xs italic text-flamenco-albero/90 font-serif mb-4">
                      "{disc.tagline}"
                    </p>
                    <p className="text-sm text-flamenco-muted font-sans font-light leading-relaxed mb-6">
                      {disc.description}
                    </p>

                    {/* Puntos clave */}
                    <div className="space-y-2 mb-6">
                      {disc.details.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-flamenco-linen/80 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-flamenco-almagre mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón de Reserva con la disciplina seleccionada */}
                  <div className="pt-4 border-t border-white/5">
                    <MagneticButton
                      variant="secondary"
                      onClick={() => onSelectDiscipline(disc)}
                      className="w-full justify-between group-hover:border-flamenco-gold/40 text-xs"
                    >
                      <span>Probar esta disciplina</span>
                      <ArrowRight className="w-4 h-4 text-flamenco-albero group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
