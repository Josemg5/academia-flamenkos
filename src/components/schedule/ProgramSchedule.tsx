import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scheduleData } from '../../data/scheduleData';
import { ScheduleItem } from '../../types';
import { Clock, User, DoorOpen, Sparkles, Calendar } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface ProgramScheduleProps {
  onBookClass: (item: ScheduleItem) => void;
}

export const ProgramSchedule: React.FC<ProgramScheduleProps> = ({ onBookClass }) => {
  const days: Array<'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado'> = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const [selectedDay, setSelectedDay] = useState<typeof days[number]>('Lunes');

  const filteredItems = scheduleData.filter((item) => item.day === selectedDay);

  return (
    <section id="horarios" className="relative py-28 bg-flamenco-void overflow-hidden border-t border-flamenco-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
            Parrilla Semanal & Aulas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight mb-4">
            Horarios del Curso en Ronda
          </h2>
          <p className="text-sm sm:text-base text-flamenco-muted font-sans font-light">
            Planificación semanal adaptada a cada etapa: desde las clases infantiles de tarde para la conciliación familiar, hasta los cursos nocturnos para adultos y ensayos de fin de semana.
          </p>
        </div>

        {/* Selector de Días de la Semana */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-sans rounded-sm transition-all duration-300 border ${
                selectedDay === day
                  ? 'bg-flamenco-albero text-flamenco-void font-bold border-flamenco-gold shadow-[0_4px_20px_rgba(197,155,39,0.35)]'
                  : 'bg-flamenco-surface text-flamenco-muted border-flamenco-borderSubtle hover:text-flamenco-linen hover:border-flamenco-gold/30'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Tabla / Lista de Clases del Día */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 rounded-sm bg-flamenco-surface border border-white/5">
                  <Calendar className="w-8 h-8 text-flamenco-muted mx-auto mb-2" />
                  <p className="text-sm text-flamenco-muted font-sans">
                    No hay clases regulares programadas para este día. Consulta por clases particulares o ensayos privados.
                  </p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-sm bg-flamenco-surface border border-flamenco-borderSubtle hover:border-flamenco-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-sans font-bold bg-flamenco-almagre text-white rounded-sm">
                          {item.ageGroup}
                        </span>
                        <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-sans font-semibold bg-flamenco-void text-flamenco-albero border border-flamenco-gold/30 rounded-sm">
                          {item.level}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-flamenco-linen mb-2">
                        {item.discipline}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-flamenco-muted font-sans">
                        <div className="flex items-center gap-1.5 text-flamenco-linen/90 font-medium">
                          <Clock className="w-3.5 h-3.5 text-flamenco-albero" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-flamenco-almagre" />
                          <span>{item.teacher}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DoorOpen className="w-3.5 h-3.5 text-flamenco-gold" />
                          <span>{item.room}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                      <MagneticButton
                        variant="gold"
                        onClick={() => onBookClass(item)}
                        className="py-2.5 px-4 text-xs font-semibold whitespace-nowrap"
                      >
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-flamenco-void" />
                        Probar Gratis
                      </MagneticButton>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nota al pie de horarios */}
          <div className="mt-8 p-4 rounded-sm bg-flamenco-stage border border-white/5 text-center">
            <p className="text-xs text-flamenco-muted font-sans">
              ℹ️ <strong className="text-flamenco-linen font-normal">Matrícula abierta todo el año</strong> en C. Molino, 6b (Ronda). ¿Tienes dudas sobre cuál es tu grupo o el de tus hijos? Ofrecemos una prueba de nivel y primera clase de cortesía sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
