import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface LiquidImageProps {
  imageUrl: string;
  isHovered: boolean;
  mousePos: { x: number; y: number };
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Distorsión líquida continua cuando está activo
    float waveX = sin(uv.y * 8.0 + uTime * 2.0) * 0.015 * uHover;
    float waveY = cos(uv.x * 8.0 + uTime * 1.8) * 0.015 * uHover;

    // Distorsión reactiva a la posición del ratón
    float dist = distance(uv, uMouse);
    float ripple = sin(dist * 18.0 - uTime * 3.5) * exp(-dist * 3.5) * 0.035 * uHover;

    vec2 distortedUv = uv + vec2(waveX + ripple, waveY + ripple);

    // Aberración cromática sutil en los bordes de la onda
    float r = texture2D(uTexture, distortedUv + vec2(0.008 * uHover, 0.0)).r;
    float g = texture2D(uTexture, distortedUv).g;
    float b = texture2D(uTexture, distortedUv - vec2(0.008 * uHover, 0.0)).b;

    vec4 color = vec4(r, g, b, 1.0);

    // Tinte oscuro y dramático de alta costura flamenca (sombras en carmín profundo)
    vec3 flamencoGrade = mix(color.rgb, vec3(color.r * 1.15, color.g * 0.7, color.b * 0.7), 0.25);

    // Viñeteado suave en los bordes
    float vignette = smoothstep(0.7, 0.2, length(uv - 0.5));
    flamencoGrade *= vignette;

    gl_FragColor = vec4(flamencoGrade, 1.0);
  }
`;

export const LiquidImage: React.FC<LiquidImageProps> = ({ imageUrl, isHovered, mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    }),
    [texture]
  );

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    
    // Actualizar tiempo
    material.uniforms.uTime.value = state.clock.getElapsedTime();

    // Lerp suave hacia el estado de hover (de 0 a 1)
    const targetHover = isHovered ? 1.0 : 0.0;
    material.uniforms.uHover.value = THREE.MathUtils.lerp(
      material.uniforms.uHover.value,
      targetHover,
      delta * 4.0
    );

    // Actualizar coordenadas normalizadas del ratón
    material.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
      material.uniforms.uMouse.value.x,
      mousePos.x,
      delta * 5.0
    );
    material.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
      material.uniforms.uMouse.value.y,
      mousePos.y,
      delta * 5.0
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[4.2, 5.2, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};
