import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const subtitle = subtitleRef.current;
    if (!container || !image || !text) return;

    // Timeline de Parallax Extremo atado a ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // La imagen de fondo se desplaza hacia abajo a un 35% de la velocidad de scroll
    tl.to(
      image,
      {
        yPercent: 28,
        scale: 1.1,
        ease: 'none',
      },
      0
    );

    // El texto monumental asciende y desvanece suavemente
    tl.to(
      text,
      {
        yPercent: -45,
        opacity: 0.2,
        ease: 'none',
      },
      0
    );

    if (subtitle) {
      tl.to(
        subtitle,
        {
          yPercent: -30,
          opacity: 0,
          ease: 'none',
        },
        0
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] h-[100svh] overflow-hidden bg-[#000000] flex items-center justify-center select-none pt-16 pb-8"
    >
      {/* Fotografía del Bailaor detrás del texto con Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <img
          src="/images/miguel-lorca-hero.png"
          alt="Miguel Lorca bailando flamenco"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75"
        />
        {/* Capas teatrales de claroscuro puro (Abismo Vanta) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#000000]" />
        {/* Tinte carmín profundo sutil */}
        <div className="absolute inset-0 bg-[#990000]/10 mix-blend-color" />
      </div>

      {/* Tipografía Monumental Calibrada y Totalmente Responsive */}
      <div className="relative z-10 w-full px-4 sm:px-6 text-center flex flex-col items-center justify-center max-w-full">
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4 tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-xs text-[#CC0000] font-sans font-semibold">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#CC0000] animate-ping" />
          <span>FlamenKos · Ronda, Málaga</span>
        </div>

        {/* MIGUEL LORCA a escala fluida que ocupa la pantalla sin desbordarse en móvil ni desktop */}
        <h1
          ref={textRef}
          className="font-serif text-[11.2vw] sm:text-[12.2vw] font-bold uppercase tracking-tight text-[#E5E5E5] leading-[0.9] text-center w-full mix-blend-exclusion whitespace-nowrap overflow-visible"
        >
          MIGUEL LORCA
        </h1>

        {/* Subtítulo y Botones adaptados a móvil */}
        <div
          ref={subtitleRef}
          className="mt-6 sm:mt-8 max-w-lg w-full flex flex-col items-center text-center px-2"
        >
          <p className="text-[11px] sm:text-sm text-bone-muted tracking-[0.18em] sm:tracking-[0.25em] uppercase font-sans font-light mb-6 sm:mb-8 leading-relaxed">
            Danza Flamenca de Autor · Desde los 3 años hasta la maestría
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-[#990000] active:bg-[#CC0000] hover:bg-[#CC0000] text-[#E5E5E5] font-sans text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] transition-all duration-300 shadow-[0_0_30px_rgba(153,0,0,0.5)] border-l-2 border-[#CC0000] text-center"
            >
              <span>Contacta con nosotros</span>
              <div className="hidden sm:block absolute inset-0 border border-[#CC0000] translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform pointer-events-none" />
            </button>

            <a
              href="tel:635964125"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 border border-[#330000] hover:border-[#CC0000] active:bg-[#1a0000] bg-black/60 text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.25em] text-bone-muted hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#CC0000]" />
              <span>635 96 41 25</span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador inferior de scroll */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-bone-muted opacity-70 pointer-events-none">
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] sm:tracking-[0.4em] font-sans">Scroll</span>
        <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#CC0000] animate-bounce" />
      </div>
    </section>
  );
};
