export type AgeGroup = 'Infantil (desde 3 años)' | 'Juvenil' | 'Adultos' | 'Todas las edades';

export type LevelType = 'Iniciación (desde cero)' | 'Intermedio' | 'Avanzado' | 'Formación Profesional' | 'Todos los niveles';

export interface Discipline {
  id: string;
  title: string;
  tagline: string;
  category: 'baile' | 'tecnica' | 'infantil' | 'accesorios';
  ages: AgeGroup;
  level: LevelType;
  description: string;
  details: string[];
  image: string;
  quote?: string;
}

export interface FlamencoEvent {
  id: string;
  title: string;
  category: 'Espectáculo Teatral' | 'Gala Fin de Curso' | 'Masterclass Exclusiva' | 'Encuentro Flamenco';
  date: string;
  time: string;
  venue: string;
  description: string;
  status: 'Próximamente' | 'Plazas Abiertas' | 'Destacado';
  image: string;
  ctaText?: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';
  time: string;
  discipline: string;
  level: LevelType;
  ageGroup: AgeGroup;
  teacher: string;
  room: string;
}

export interface PaloCompas {
  id: string;
  name: string;
  family: string;
  totalBeats: number;
  accents: number[]; // e.g. [3, 6, 8, 10, 12] for Soleá / Bulerías
  defaultBpm: number;
  character: string;
  description: string;
  poeticQuote: string;
}
