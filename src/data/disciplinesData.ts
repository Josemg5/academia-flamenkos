import { Discipline } from '../types';

export const disciplinesData: Discipline[] = [
  {
    id: 'flamenco-iniciacion',
    title: 'Baile Flamenco Iniciación',
    tagline: 'Descubre el pulso, la colocación y el compás desde cero',
    category: 'baile',
    ages: 'Adultos',
    level: 'Iniciación (desde cero)',
    description: 'Diseñado para quienes nunca han bailado flamenco o desean reconectar con su raíz. Aprenderás la postura corporal, los primeros braceos, el peso del cuerpo sobre la madera y los palos festivos como Tangos y Rumbas.',
    details: [
      'Sin necesidad de experiencia previa',
      'Corrección postural, coordinación y ritmo interior',
      'Desarrollo del compás básico y primeras figuras coreográficas',
      'Ambiente cercano, apasionado y sin presiones'
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85',
    quote: 'El flamenco no entiende de edades ni de prisas: solo de verdad y ganas de sentir.'
  },
  {
    id: 'cantera-infantil',
    title: 'FlamenKitos (Cantera Infantil)',
    tagline: 'El duende desde los primeros pasos: psicomotricidad y ritmo',
    category: 'infantil',
    ages: 'Infantil (desde 3 años)',
    level: 'Iniciación (desde cero)',
    description: 'Un método pedagógico lúdico y estimulante para niños y niñas a partir de los 3 años. A través del juego, las palmas y el movimiento natural, asimilan la musicalidad andaluza y la disciplina corporal.',
    details: [
      'Grupos divididos por edades (3 a 6 años / 7 a 11 años)',
      'Desarrollo psicomotriz, oído musical y lateralidad',
      'Participación en festivales y galas teatrales en Ronda',
      'Incentivo de la autoestima, la memoria y el trabajo en equipo'
    ],
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=85',
    quote: 'Ver a un niño o una niña de 4 años marcar el compás con la planta del pie es la mayor promesa del arte.'
  },
  {
    id: 'tecnica-taconeo',
    title: 'Técnica de Pies & Taconeo',
    tagline: 'Precisión percusiva, velocidad y limpieza sonora sobre la tarima',
    category: 'tecnica',
    ages: 'Todas las edades',
    level: 'Intermedio',
    description: 'El pie como instrumento de percusión pura. Un módulo intensivo enfocado en planta, tacón, punta, látigo y contratiempos. Mejora la velocidad sin perder claridad tímbrica y cuida la salud articular.',
    details: [
      'Ejercicios específicos de fuerza en tobillos y metatarsos',
      'Limpieza acústica en dobles contratiempos y redobles',
      'Manejo de dinámicas (desde el murmullo pianísimo hasta el golpe seco)',
      'Ejecución sobre tarimas flotantes tratadas para evitar lesiones'
    ],
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=85',
    quote: 'El zapateado no es golpear el suelo con rabia: es dialogar con la madera con la precisión de un relojero.'
  },
  {
    id: 'bata-manton',
    title: 'Bata de Cola & Mantón de Manila',
    tagline: 'El vuelo majestuoso de la danza clásica flamenca',
    category: 'accesorios',
    ages: 'Adultos',
    level: 'Avanzado',
    description: 'El dominio de los dos complementos escénicos más exigentes y bellos del flamenco. Aprende a convertir el peso de la bata de cola en una extensión orgánica del cuerpo y a dibujar espirales vivas con el mantón.',
    details: [
      'Técnica de giro, retroceso y recogida de la cola',
      'Manejo del mantón en ocho, envolventes y vuelos de remate',
      'Coordinación de cabeza, hombros y braceo continuo',
      'Aplicación coreográfica en Alegrías de Cádiz, Guajiras y Soleá por Bulerías'
    ],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    quote: 'Cuando la bata de cola vuela, el escenario se ensancha y el tiempo parece detenerse en el aire.'
  },
  {
    id: 'castanuelas-concierto',
    title: 'Castañuelas de Concierto & Braceo',
    tagline: 'Polirritmia manual y la arquitectura escultórica de los brazos',
    category: 'accesorios',
    ages: 'Todas las edades',
    level: 'Todos los niveles',
    description: 'Estudio de la carretilla, el posticero y los toques solistas integrados en la danza. Combinado con el trabajo exhaustivo de colocación de torso, hombros relajados y movimiento circular de muñecas.',
    details: [
      'Digitación y desarrollo de independencia de los dedos',
      'Toque en matices clásicos y ritmos festeros andaluces',
      'Braceo de corte estilizado (escuela bolera y flamenco estilizado)',
      'Para alumnado de todos los niveles'
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    quote: 'Las manos en el flamenco son pinceles que pintan silencios y despiertan tempestades.'
  },
  {
    id: 'formacion-lorca',
    title: 'Formación Profesional & Masterclasses',
    tagline: 'Programa intensivo bajo la dirección de Miguel Lorca',
    category: 'baile',
    ages: 'Juvenil',
    level: 'Formación Profesional',
    description: 'Para bailaores y estudiantes avanzados que buscan proyección profesional en tablaos, festivales y compañías de danza. Trabajo de repertorio completo, improvisación al cante en directo y presencia escénica.',
    details: [
      'Montajes coreográficos de gran formato',
      'Entendimiento del cante: cuándo rematar, cuándo templar y cómo llamar al silencio',
      'Tutoría artística individual y preparación para audiciones',
      'Ensayos con músicos profesionales en vivo'
    ],
    image: '/images/miguel-lorca-hero.png',
    quote: 'El escenario no tolera la mentira: exige dejar el alma en cada desplante.'
  }
];
