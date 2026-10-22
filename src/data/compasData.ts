import { PaloCompas } from '../types';

export const compasData: PaloCompas[] = [
  {
    id: 'bulerias',
    name: 'Bulerías',
    family: 'Cantes Festeros (Compás de 12 tiempos)',
    totalBeats: 12,
    accents: [3, 6, 8, 10, 12],
    defaultBpm: 180,
    character: 'Frenesí, picardía y remate',
    description: 'El palo más dinámico y festero del flamenco. Su compás de doce tiempos se vive a gran velocidad, donde los contratiempos de las palmas y el taconeo dialogan en una constante llamada al desplante.',
    poeticQuote: 'Las bulerías no se cuentan: se respiran en el aire como pólvora encendida.'
  },
  {
    id: 'solea',
    name: 'Soleá',
    family: 'Cante Jondo / Madre del Flamenco (12 tiempos)',
    totalBeats: 12,
    accents: [3, 6, 8, 10, 12],
    defaultBpm: 92,
    character: 'Solemnidad, hondura y reposo',
    description: 'La reina de los palos flamencos. Comparte la métrica de doce tiempos con las bulerías pero a un tempo pausado, majestuoso, donde cada paso y cada silencio cargan el peso de siglos de dolor y orgullo.',
    poeticQuote: 'En la soledad de la soleá, el bailaor no baila para la galería: baila para su propia sombra.'
  },
  {
    id: 'alegrias',
    name: 'Alegrías de Cádiz',
    family: 'Cantiñas y Puertos (12 tiempos)',
    totalBeats: 12,
    accents: [3, 6, 8, 10, 12],
    defaultBpm: 140,
    character: 'Luz salinera, elegancia y brío',
    description: 'Nacidas bajo el sol gaditano, las alegrías despliegan el compás de doce tiempos con un compás nítido y airoso. Es el palo clásico por excelencia para el despliegue de la bata de cola y el mantón.',
    poeticQuote: 'El compás de Cádiz huele a espuma de mar y a cascabel de plata en el taconeo.'
  },
  {
    id: 'tangos',
    name: 'Tangos Flamencos',
    family: 'Compás Binario (4 tiempos)',
    totalBeats: 4,
    accents: [2, 3, 4], // El 1 suele ser silencioso o preparación ("¡Un, DOS, TRES, CUATRO!")
    defaultBpm: 124,
    character: 'Cadencia terrenal, sensualidad y balanceo',
    description: 'A diferencia de los palos de doce tiempos, los tangos caminan sobre una métrica de cuatro tiempos donde el primer tiempo queda suspendido para romper con fuerza en el dos, tres y cuatro.',
    poeticQuote: 'Los tangos vienen de la tierra húmeda, se meten en las caderas y piden tierra bajo los pies.'
  }
];
