import React from 'react';

interface HeaderMinimalProps {
  onOpenBooking: () => void;
}

export const HeaderMinimal: React.FC<HeaderMinimalProps> = ({ onOpenBooking }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12 pt-[max(1rem,env(safe-area-inset-top))] pb-4 sm:py-6 flex items-center justify-between pointer-events-none select-none">
      {/* Logotipo / Marca */}
      <a
        href="#"
        className="pointer-events-auto flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#330000] bg-black p-1 overflow-hidden flex items-center justify-center group-hover:border-[#CC0000] transition-colors flex-shrink-0">
          <img
            src="/images/logo-flamenkos.png"
            alt="Logo FlamenKos"
            className="w-full h-full object-contain filter invert contrast-125"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bold text-[#E5E5E5] group-hover:text-[#CC0000] transition-colors leading-tight">
            FlamenKos
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#990000] font-sans">
            Miguel Lorca · Ronda
          </span>
        </div>
      </a>

      {/* Navegación y Botón */}
      <div className="pointer-events-auto flex items-center gap-4 sm:gap-8">
        <a
          href="#cartelera"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.3em] font-sans text-bone-muted hover:text-[#E5E5E5] transition-colors"
        >
          Cartelera
        </a>

        <a
          href="#disciplinas"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.3em] font-sans text-bone-muted hover:text-[#E5E5E5] transition-colors"
        >
          Disciplinas
        </a>

        <button
          onClick={onOpenBooking}
          className="px-3.5 py-2 sm:px-5 sm:py-2.5 bg-black border border-[#CC0000] active:bg-[#CC0000] hover:bg-[#CC0000] active:text-white hover:text-white text-[#E5E5E5] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(204,0,0,0.3)] whitespace-nowrap"
        >
          Contacta con nosotros
        </button>
      </div>
    </header>
  );
};
