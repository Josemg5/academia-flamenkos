import { useState, useRef, useEffect, useCallback } from 'react';

export function useCompasAudio() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [ambientActive, setAmbientActive] = useState(false);
  
  // Ambient audio nodes
  const ambientGainRef = useRef<GainNode | null>(null);
  const ambientOscRef = useRef<OscillatorNode | null>(null);

  // Initialize AudioContext on first user interaction
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Sintetizador acústico de taconeo sobre tarima de madera
  const playTaconeo = useCallback((isAccent: boolean) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Oscilador de golpe sordo de madera
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Ruido para simular la suela de clavos sobre madera
      const bufferSize = ctx.sampleRate * 0.05;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = isAccent ? 1200 : 800;
      noiseFilter.Q.value = 3;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(isAccent ? 0.4 : 0.18, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      // Cuerpo del tacón (frecuencia grave cálida)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isAccent ? 130 : 95, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.08);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);

      gain.gain.setValueAtTime(isAccent ? 0.8 : 0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      whiteNoise.start(now);
      osc.stop(now + 0.13);
      whiteNoise.stop(now + 0.07);
    } catch {
      // Audio fallback silencioso si los permisos de audio del navegador están restringidos
    }
  }, [getAudioContext]);

  // Sintetizador de palmas flamencas (secas vs sordas)
  const playPalma = useCallback((isAccent: boolean) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const bufferSize = ctx.sampleRate * 0.08;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = isAccent ? 'bandpass' : 'lowpass';
      filter.frequency.value = isAccent ? 1800 : 750;
      filter.Q.value = isAccent ? 2.5 : 1.2;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(isAccent ? 0.7 : 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.08);
    } catch {
      // Fallback
    }
  }, [getAudioContext]);

  // Toggle de ambiente de fondo (armonía lejana en Modo Frigio flamenco: Mi menor / Fa)
  const toggleAmbientSound = useCallback(() => {
    const ctx = getAudioContext();
    if (ambientActive) {
      if (ambientGainRef.current) {
        ambientGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        ambientOscRef.current?.stop();
        ambientOscRef.current?.disconnect();
        ambientGainRef.current?.disconnect();
        ambientOscRef.current = null;
        ambientGainRef.current = null;
        setAmbientActive(false);
      }, 500);
    } else {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      // Tono sutil cálido en frecuencia baja
      osc.type = 'sine';
      osc.frequency.setValueAtTime(164.81, now); // Nota Mi3 (tónica del flamenco)

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 1.2); // Muy suave y atmosférico

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      ambientOscRef.current = osc;
      ambientGainRef.current = gain;
      setAmbientActive(true);
    }
  }, [ambientActive, getAudioContext]);

  // Detener todo al desmontar
  useEffect(() => {
    return () => {
      if (ambientOscRef.current) {
        try {
          ambientOscRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return {
    isPlaying,
    setIsPlaying,
    currentBeat,
    setCurrentBeat,
    ambientActive,
    toggleAmbientSound,
    playTaconeo,
    playPalma,
    getAudioContext
  };
}
