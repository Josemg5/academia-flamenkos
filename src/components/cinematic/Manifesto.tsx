import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phrase1Ref = useRef<HTMLHeadingElement>(null);
  const phrase2Ref = useRef<HTMLHeadingElement>(null);
  const phrase3Ref = useRef<HTMLHeadingElement>(null);
  const phrase4Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const phrases = [
      phrase1Ref.current,
      phrase2Ref.current,
      phrase3Ref.current,
      phrase4Ref.current,
    ];

    phrases.forEach((phrase) => {
      if (!phrase) return;

      const words = phrase.querySelectorAll('.manifesto-word');

      gsap.fromTo(
        words,
        {
          yPercent: 120,
          opacity: 0,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        },
        {
          yPercent: 0,
          opacity: 1,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: phrase,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.2,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && container.contains(st.trigger as Node)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#000000] py-24 sm:py-52 px-4 sm:px-12 flex flex-col items-center justify-center space-y-32 sm:space-y-64 select-none"
    >
      {/* Frase 1 */}
      <div className="w-full max-w-5xl text-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#CC0000] font-sans font-semibold mb-4 sm:mb-6 block">
          01 / El Principio
        </span>
        <h2
          ref={phrase1Ref}
          className="font-serif text-3xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-[#E5E5E5] leading-[1.1]"
        >
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">El</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">flamenco</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">no</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">se</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block text-bone-muted">baila...</span>
          </span>
        </h2>
      </div>

      {/* Frase 2 (El Clímax) */}
      <div className="w-full max-w-5xl text-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#CC0000] font-sans font-semibold mb-4 sm:mb-6 block">
          02 / La Verdad
        </span>
        <h2
          ref={phrase2Ref}
          className="font-serif text-4xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-[#CC0000] leading-[0.95]"
        >
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block mr-3 sm:mr-4 text-white">...se</span>
          </span>
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block text-[#CC0000] underline decoration-[#990000] decoration-wavy">
              desgarra.
            </span>
          </span>
        </h2>
      </div>

      {/* Frase 3 */}
      <div className="w-full max-w-5xl text-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#CC0000] font-sans font-semibold mb-4 sm:mb-6 block">
          03 / La Métrica
        </span>
        <h2
          ref={phrase3Ref}
          className="font-serif text-3xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-[#E5E5E5] leading-[1.1]"
        >
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">El</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">compás</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">no</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block mr-2 sm:mr-4">se</span>
          </span>
          <span className="inline-block overflow-hidden py-1">
            <span className="manifesto-word inline-block text-bone-muted mr-2 sm:mr-4">cuenta,</span>
          </span>
        </h2>
      </div>

      {/* Frase 4 */}
      <div className="w-full max-w-5xl text-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#CC0000] font-sans font-semibold mb-4 sm:mb-6 block">
          04 / La Cuna
        </span>
        <h2
          ref={phrase4Ref}
          className="font-serif text-4xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-[#E5E5E5] leading-[0.98]"
        >
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block mr-2 sm:mr-4 text-[#CC0000]">late</span>
          </span>
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block mr-2 sm:mr-4 text-white">en</span>
          </span>
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block mr-2 sm:mr-4 text-white">las</span>
          </span>
          <span className="inline-block overflow-hidden py-1.5 sm:py-2">
            <span className="manifesto-word inline-block text-[#CC0000]">vísceras.</span>
          </span>
        </h2>
        <p className="mt-8 sm:mt-12 text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-bone-muted font-sans font-light max-w-xl mx-auto px-2">
          Academia FlamenKos Miguel Lorca · Calle Molino 6b, Ronda
        </p>
      </div>
    </section>
  );
};
