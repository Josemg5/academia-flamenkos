import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
}

export const Particles: React.FC<ParticlesProps> = ({ count = 2200 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generar posiciones, velocidades y colores aleatorios de brasas/ceniza
  const { positions, speeds, colors, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const col = new Float32Array(count * 3);
    const phs = new Float32Array(count);

    // Paleta de brasas: rojo oscuro (#550000), carmín sangre (#990000), brasa apagada (#881100)
    const colorPalette = [
      new THREE.Color('#990000'),
      new THREE.Color('#CC0000'),
      new THREE.Color('#550000'),
      new THREE.Color('#771100'),
      new THREE.Color('#330000'),
    ];

    for (let i = 0; i < count; i++) {
      // Posiciones en volumen 3D
      pos[i * 3] = (Math.random() - 0.5) * 28;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16; // Z

      // Velocidad ascendente
      spd[i] = 0.25 + Math.random() * 0.75;
      phs[i] = Math.random() * Math.PI * 2;

      // Color aleatorio de la paleta
      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return {
      positions: pos,
      speeds: spd,
      colors: col,
      phases: phs,
    };
  }, [count]);

  // Generar textura circular suave para evitar puntos cuadrados toscos
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Movimiento vertical suave continuo (cenizas flotando hacia arriba)
      posArray[i3 + 1] += speeds[i] * delta * 0.8;

      // Deriva horizontal sinusoidal (física de aire caliente)
      posArray[i3] += Math.sin(time * 0.4 + phases[i]) * 0.005;
      posArray[i3 + 2] += Math.cos(time * 0.3 + phases[i]) * 0.004;

      // Reaparición por debajo al salir del viewport
      if (posArray[i3 + 1] > 12) {
        posArray[i3 + 1] = -12;
        posArray[i3] = (Math.random() - 0.5) * 28;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        map={circleTexture}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
