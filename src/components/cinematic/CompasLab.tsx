import React, { useState, useEffect, useRef } from 'react';
import { compasData } from '../../data/compasData';
import { PaloCompas } from '../../types';
import { Play, Pause, Volume2, Sparkles, Music2, Footprints } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface CompasLabProps {
  playTaconeo: (isAccent: boolean) => void;
  playPalma: (isAccent: boolean) => void;
}

export const CompasLab: React.FC<CompasLabProps> = ({ playTaconeo, playPalma }) => {
  const [selectedPalo, setSelectedPalo] = useState<PaloCompas>(compasData[0]); // Bulerías default
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [soundMode, setSoundMode] = useState<'taconeo' | 'palmas' | 'silencio'>('taconeo');
  
  const timerRef = useRef<number | null>(null);

  // Intervalo de compás según BPM del palo
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalMs = (60 / selectedPalo.defaultBpm) * 1000;

    timerRef.current = window.setInterval(() => {
      setCurrentBeat((prev) => {
        const next = prev >= selectedPalo.totalBeats ? 1 : prev + 1;
        const isAccent = selectedPalo.accents.includes(next);

        // Disparo sonoro
        if (soundMode === 'taconeo') {
          playTaconeo(isAccent);
        } else if (soundMode === 'palmas') {
          playPalma(isAccent);
        }

        return next;
      });
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, selectedPalo, soundMode, playTaconeo, playPalma]);

  const handlePaloChange = (palo: PaloCompas) => {
    setIsPlaying(false);
    setSelectedPalo(palo);
    setCurrentBeat(1);
  };

  const handleBeatClick = (beatNumber: number) => {
    setCurrentBeat(beatNumber);
    const isAccent = selectedPalo.accents.includes(beatNumber);
    if (soundMode === 'taconeo') {
      playTaconeo(isAccent);
    } else {
      playPalma(isAccent);
    }
  };

  return (
    <section id="compas" className="relative py-28 bg-flamenco-stage overflow-hidden border-t border-b border-flamenco-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
            Laboratorio Rítmico Interactivo
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight mb-4">
            El Pulso del Compás Flamenco
          </h2>
          <p className="text-sm sm:text-base text-flamenco-muted font-sans font-light">
            En la academia FlamenKos de Miguel Lorca no memorizamos cifras: hacemos que el compás lata en tu cuerpo. Experimenta aquí los acentos del reloj flamenco de 12 tiempos y el latido de los palos festeros.
          </p>
        </div>

        {/* Selector de Palos */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {compasData.map((palo) => (
            <button
              key={palo.id}
              onClick={() => handlePaloChange(palo)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-sans rounded-sm transition-all duration-300 border ${
                selectedPalo.id === palo.id
                  ? 'bg-flamenco-almagre text-white border-flamenco-carmine shadow-[0_4px_20px_rgba(142,20,20,0.4)]'
                  : 'bg-flamenco-surface text-flamenco-muted border-flamenco-borderSubtle hover:text-flamenco-linen hover:border-flamenco-gold/30'
              }`}
            >
              {palo.name} ({palo.totalBeats} Tiempos)
            </button>
          ))}
        </div>

        {/* Consola Interactiva del Compás */}
        <div className="max-w-4xl mx-auto rounded-sm bg-flamenco-surface border border-flamenco-gold/20 p-6 sm:p-10 shadow-2xl">
          {/* Info del palo actual */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-2xl font-bold text-flamenco-linen">
                  {selectedPalo.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-flamenco-void text-flamenco-albero border border-flamenco-gold/30">
                  {selectedPalo.defaultBpm} BPM
                </span>
              </div>
              <p className="text-xs text-flamenco-muted font-sans">
                {selectedPalo.family} · Carácter: <strong className="text-flamenco-linen font-normal">{selectedPalo.character}</strong>
              </p>
            </div>

            {/* Selector de Sonido */}
            <div className="flex items-center gap-2 bg-flamenco-void p-1.5 rounded-sm border border-white/5">
              <button
                onClick={() => setSoundMode('taconeo')}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans rounded transition-colors flex items-center gap-1.5 ${
                  soundMode === 'taconeo'
                    ? 'bg-flamenco-almagre text-white'
                    : 'text-flamenco-muted hover:text-white'
                }`}
              >
                <Footprints className="w-3.5 h-3.5" />
                <span>Taconeo</span>
              </button>
              <button
                onClick={() => setSoundMode('palmas')}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans rounded transition-colors flex items-center gap-1.5 ${
                  soundMode === 'palmas'
                    ? 'bg-flamenco-almagre text-white'
                    : 'text-flamenco-muted hover:text-white'
                }`}
              >
                <Music2 className="w-3.5 h-3.5" />
                <span>Palmas</span>
              </button>
              <button
                onClick={() => setSoundMode('silencio')}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans rounded transition-colors ${
                  soundMode === 'silencio'
                    ? 'bg-flamenco-surfaceLight text-white'
                    : 'text-flamenco-muted hover:text-white'
                }`}
              >
                Mudo
              </button>
            </div>
          </div>

          {/* El Reloj / Cinta de Tiempos */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <span className="text-xs font-sans tracking-widest text-flamenco-albero uppercase">
                {selectedPalo.totalBeats === 12
                  ? 'Acentos en los tiempos fuertes: [ 3 · 6 · 8 · 10 · 12 ]'
                  : 'Acentos en los tiempos sincopados: [ 2 · 3 · 4 ]'}
              </span>
            </div>

            {/* Cuadrícula o tira de pulsos */}
            <div className={`grid gap-2 sm:gap-3 ${
              selectedPalo.totalBeats === 12
                ? 'grid-cols-6 sm:grid-cols-12'
                : 'grid-cols-4 max-w-md mx-auto'
            }`}>
              {Array.from({ length: selectedPalo.totalBeats }, (_, i) => i + 1).map((beat) => {
                const isCurrent = currentBeat === beat;
                const isAccent = selectedPalo.accents.includes(beat);

                return (
                  <button
                    key={beat}
                    onClick={() => handleBeatClick(beat)}
                    className={`relative aspect-square flex flex-col items-center justify-center rounded-sm transition-all duration-150 border ${
                      isCurrent
                        ? isAccent
                          ? 'bg-flamenco-almagre text-white border-white scale-110 z-20 shadow-[0_0_25px_rgba(184,29,29,0.9)]'
                          : 'bg-flamenco-gold text-flamenco-void font-bold border-white scale-105 z-10'
                        : isAccent
                        ? 'bg-flamenco-void text-flamenco-albero border-flamenco-gold/40 hover:border-flamenco-gold'
                        : 'bg-flamenco-void/60 text-flamenco-muted border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={`font-serif text-lg sm:text-xl font-bold ${
                      isAccent ? 'text-flamenco-goldLight' : ''
                    }`}>
                      {beat}
                    </span>
                    {isAccent && (
                      <span className="text-[9px] uppercase tracking-tighter text-flamenco-almagre font-sans font-bold">
                        Fuerte
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controles de reproducción y cita */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-6">
            <div className="flex items-center gap-4">
              <MagneticButton
                variant={isPlaying ? 'primary' : 'gold'}
                onClick={() => setIsPlaying(!isPlaying)}
                className="py-3 px-6 text-xs"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-1" />
                    <span>Pausar Compás</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-1 fill-current" />
                    <span>Hacer Sonar el Compás</span>
                  </>
                )}
              </MagneticButton>

              <span className="text-xs text-flamenco-muted font-sans hidden sm:inline">
                Haz clic en cualquier número para escuchar el golpe
              </span>
            </div>

            <p className="text-xs italic text-flamenco-muted font-serif text-right max-w-sm">
              "{selectedPalo.poeticQuote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
