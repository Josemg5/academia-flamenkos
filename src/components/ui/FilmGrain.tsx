import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 w-full h-full overflow-hidden opacity-25 mix-blend-overlay"
    >
      <svg
        className="w-[200%] h-[200%] -top-[50%] -left-[50%] absolute animate-grain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="filmNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#filmNoise)" />
      </svg>
    </div>
  );
};
