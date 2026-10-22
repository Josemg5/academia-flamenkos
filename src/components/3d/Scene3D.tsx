import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import { LiquidImage } from './LiquidImage';

interface Scene3DProps {
  activeImageUrl?: string | null;
  isHovered?: boolean;
  mousePos?: { x: number; y: number };
}

export const Scene3D: React.FC<Scene3DProps> = ({
  activeImageUrl = null,
  isHovered = false,
  mousePos = { x: 0.5, y: 0.5 },
}) => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-[#000000] overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        {/* Iluminación teatral de tablao */}
        <ambientLight intensity={0.05} />
        <spotLight
          position={[0, 8, 4]}
          color="#CC0000"
          intensity={2.5}
          angle={0.6}
          penumbra={0.9}
        />
        <pointLight position={[0, -6, 2]} color="#660000" intensity={1.2} />

        {/* Sistema de partículas de brasas flotantes */}
        <Particles count={1800} />

        {/* Shader líquido para galería de disciplinas cuando está activo */}
        {activeImageUrl && (
          <Suspense fallback={null}>
            <LiquidImage
              imageUrl={activeImageUrl}
              isHovered={isHovered}
              mousePos={mousePos}
            />
          </Suspense>
        )}
      </Canvas>
    </div>
  );
};
