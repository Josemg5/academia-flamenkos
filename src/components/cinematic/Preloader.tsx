import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const curtainRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Revelación teatral con clip-path vertical dramático
        if (curtainRef.current) {
          gsap.to(curtainRef.current, {
            clipPath: 'inset(50% 0% 50% 0%)',
            duration: 1.1,
            ease: 'power4.inOut',
            onComplete: () => {
              if (containerRef.current) {
                containerRef.current.style.display = 'none';
              }
              onComplete();
            },
          });
        }
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        setPercent(Math.floor(counter.val));
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center select-none"
    >
      {/* Telón negro puro con clip-path */}
      <div
        ref={curtainRef}
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        className="absolute inset-0 bg-[#000000] flex flex-col items-center justify-center px-6"
      >
        <div className="flex flex-col items-center">
          <span className="font-serif text-[11px] uppercase tracking-[0.5em] text-bone-muted mb-4">
            Academia FlamenKos · Ronda
          </span>
          {/* Contador en rojo carmín puro */}
          <div className="font-mono text-4xl sm:text-6xl font-light text-[#CC0000] tracking-wider mb-3">
            {percent.toString().padStart(2, '0')}%
          </div>
          <div className="w-12 h-[1px] bg-[#990000]/60" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#990000] mt-4 font-sans">
            El Desgarro Inminente
          </span>
        </div>
      </div>
    </div>
  );
};
