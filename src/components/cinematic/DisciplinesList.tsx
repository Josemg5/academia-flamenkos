import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Clock, Shield, Sparkles } from 'lucide-react';

export interface DisciplineItem {
  id: string;
  name: string;
  tagline: string;
  ages: string;
  imageUrl: string;
  description: string;
  level: string;
  schedule: string;
  pedagogicalFocus: string;
}

export const disciplinesListItems: DisciplineItem[] = [
  {
    id: 'taconeo',
    name: 'TACONEO',
    tagline: 'Percusión de pies, limpieza y contratiempo sobre tarima',
    ages: 'Todas las edades',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=85',
    description:
      'El pie como instrumento de percusión pura. Estudio exhaustivo de planta, punta, tacón y látigo. Se profundiza en la disociación corporal para lograr velocidad explosiva y limpieza tímbrica sobre la madera sin forzar las articulaciones.',
    level: 'Intermedio y Avanzado (grupos diferenciados)',
    schedule: 'Lunes y Jueves · 20:30 a 21:45 H · Sala Principal',
    pedagogicalFocus: 'Velocidad métrica, resistencia muscular y precisión tímbrica',
  },
  {
    id: 'bata-de-cola',
    name: 'BATA DE COLA',
    tagline: 'Vuelo escénico, peso del tejido y espirales de mantón',
    ages: 'Intermedio & Avanzado',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    description:
      'Dominio de los dos complementos escénicos más exigentes del flamenco clásico. El trabajo se centra en el manejo orgánico del peso de la bata, giros de recogida continua y dibujo tridimensional con el mantón de Manila en Alegrías, Guajiras y Caña.',
    level: 'Bailaores con base técnica previa',
    schedule: 'Martes y Jueves · 19:15 a 20:30 H · Sala Triana',
    pedagogicalFocus: 'Equilibrio centrífugo, peso del tejido y lirismo en el braceo',
  },
  {
    id: 'flamenkitos',
    name: 'CANTERA INFANTIL',
    tagline: 'El duende desde los 3 años: psicomotricidad, compás y juego',
    ages: 'Desde 3 a 12 años',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=85',
    description:
      'Metodología lúdica y rigurosa adaptada a las primeras etapas de desarrollo. Los más pequeños aprenden a escuchar los acentos, coordinar el braceo con el paso y asimilar el ritmo andaluz de manera natural, preparando coreografías para las galas teatrales en Ronda.',
    level: 'Iniciación infantil por tramos de edad (3-6 años y 7-12 años)',
    schedule: 'Lunes y Miércoles · 17:00 a 18:15 H · Sala Triana',
    pedagogicalFocus: 'Psicomotricidad, lateralidad, compás intuitivo y autoestima escénica',
  },
  {
    id: 'iniciacion-adultos',
    name: 'INICIACIÓN ADULTOS',
    tagline: 'Aprender desde cero sin importar la edad. Raíz y compás',
    ages: 'Adultos & Aficionados',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85',
    description:
      'Espacio diseñado para quienes desean iniciarse en el arte flamenco en edad adulta sin presiones. Comenzamos por la colocación de la columna, el giro de muñecas y los primeros compases en Tangos y Rumbas, en un entorno de complicidad y respeto artístico.',
    level: 'Iniciación absoluta · No se requiere experiencia previa',
    schedule: 'Lunes y Miércoles · 19:30 a 20:45 H · Sala Principal',
    pedagogicalFocus: 'Corrección postural, relajación de hombros y compás de 4 y 12 tiempos',
  },
  {
    id: 'castanuelas',
    name: 'CASTAÑUELAS',
    tagline: 'Polirritmia de concierto, carretilla y braceo clásico',
    ages: 'Todos los niveles',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    description:
      'Estudio metódico de la digitación, carretilla y posticero, integrado en la danza flamenca y escuela bolera. Se entrena la independencia motriz de ambas manos combinada con la plasticidad escultórica de los brazos.',
    level: 'Abierto a todos los niveles con seguimiento individual',
    schedule: 'Martes · 18:00 a 19:15 H · Sala Triana',
    pedagogicalFocus: 'Independencia digital, matices dinámicos de volumen y colocación de torso',
  },
  {
    id: 'maestria-lorca',
    name: 'COMPAÑÍA & AUDICIÓN',
    tagline: 'Formación profesional y montajes teatrales con Miguel Lorca',
    ages: 'Alto rendimiento',
    imageUrl: '/images/miguel-lorca-hero.png',
    description:
      'Programa de perfeccionamiento dirigido personalmente por Miguel Lorca para bailaores con vocación profesional. Montajes coreográficos para giras, improvisación al cante con músicos en directo y preparación para audiciones en compañías nacionales.',
    level: 'Acceso por valoración artística directa',
    schedule: 'Viernes · 19:30 a 21:30 H y Sábados intensivos',
    pedagogicalFocus: 'Presencia escénica de tablao, estructura de baile al cante y soltura profesional',
  },
];

interface DisciplinesListProps {
  onHoverDiscipline: (item: DisciplineItem | null, mouseEvent?: React.MouseEvent) => void;
}

export const DisciplinesList: React.FC<DisciplinesListProps> = ({ onHoverDiscipline }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="disciplinas"
      className="relative w-full bg-[#000000] py-20 sm:py-32 px-4 sm:px-8 lg:px-12 select-none z-10 border-t border-[#1A0000]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabecera Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-20 pb-6 sm:pb-8 border-b border-[#220000] gap-4">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#CC0000] font-sans font-semibold mb-2 block">
              Formación & Disciplinas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#E5E5E5]">
              Cuerpo & Método
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-bone-muted font-sans max-w-sm text-left sm:text-right">
            Selecciona una disciplina para desplegar los detalles pedagógicos y los horarios habituales.
          </p>
        </div>

        {/* Lista Vertical con Acordeón Cinemático */}
        <div className="divide-y divide-[#1A0000]">
          {disciplinesListItems.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={(e) => onHoverDiscipline(item, e)}
                onMouseMove={(e) => onHoverDiscipline(item, e)}
                onMouseLeave={() => onHoverDiscipline(null)}
                className={`transition-colors duration-500 ${
                  isExpanded ? 'bg-[#060000]' : 'hover:bg-[#040000]'
                }`}
              >
                {/* Fila Principal Clicable */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-6 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer focus:outline-none group gap-4"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-xs sm:text-sm flex-shrink-0 transition-colors ${
                        isExpanded ? 'text-[#CC0000]' : 'text-[#440000] group-hover:text-[#CC0000]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-2xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight transition-all duration-300 leading-tight ${
                          isExpanded
                            ? 'text-[#CC0000] translate-x-1 sm:translate-x-2'
                            : 'text-[#E5E5E5] group-hover:text-[#CC0000] group-hover:translate-x-1 sm:group-hover:translate-x-2'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-sans text-bone-muted tracking-wider uppercase mt-1 sm:mt-2 group-hover:text-white transition-colors">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 pl-8 md:pl-0">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-sans text-bone-muted border border-[#220000] px-2.5 sm:px-3 py-1 group-hover:border-[#CC0000] group-hover:text-white transition-colors">
                      {item.ages}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isExpanded
                          ? 'border-[#CC0000] bg-[#990000] text-white rotate-90'
                          : 'border-[#220000] group-hover:border-[#CC0000] text-bone-muted group-hover:text-white'
                      }`}
                    >
                      {isExpanded ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </div>
                </button>

                {/* Contenido Expandible (Acordeón Sedoso) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3, delay: 0.1, ease: 'easeOut' },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15, ease: 'easeIn' },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-8 sm:pb-12 pl-0 sm:pl-16 pr-0 sm:pr-8 border-t border-[#1f0000]/60 max-w-5xl">
                        {/* Descripción de la Disciplina */}
                        <p className="text-xs sm:text-base text-[#D4D4D4] font-sans font-light leading-relaxed mb-6 sm:mb-8">
                          {item.description}
                        </p>

                        {/* Metadatos en Grilla Editorial Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-[#1A0000] text-xs font-sans">
                          <div className="p-3 bg-[#080808] sm:bg-transparent border sm:border-0 border-[#1c0000]">
                            <div className="flex items-center gap-1.5 text-[#CC0000] uppercase tracking-widest font-semibold mb-1 text-[10px] sm:text-xs">
                              <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>Nivel de Acceso</span>
                            </div>
                            <p className="text-bone-muted font-light leading-normal">
                              {item.level}
                            </p>
                          </div>

                          <div className="p-3 bg-[#080808] sm:bg-transparent border sm:border-0 border-[#1c0000]">
                            <div className="flex items-center gap-1.5 text-[#CC0000] uppercase tracking-widest font-semibold mb-1 text-[10px] sm:text-xs">
                              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>Horarios Habituales</span>
                            </div>
                            <p className="text-bone-muted font-light leading-normal">
                              {item.schedule}
                            </p>
                          </div>

                          <div className="p-3 bg-[#080808] sm:bg-transparent border sm:border-0 border-[#1c0000]">
                            <div className="flex items-center gap-1.5 text-[#CC0000] uppercase tracking-widest font-semibold mb-1 text-[10px] sm:text-xs">
                              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>Foco Pedagógico</span>
                            </div>
                            <p className="text-bone-muted font-light leading-normal">
                              {item.pedagogicalFocus}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
