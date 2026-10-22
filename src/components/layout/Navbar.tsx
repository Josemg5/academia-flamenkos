import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Phone, MapPin } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface NavbarProps {
  ambientActive: boolean;
  toggleAmbientSound: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  ambientActive,
  toggleAmbientSound,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'El Maestro', href: '#maestro' },
    { name: 'Disciplinas', href: '#disciplinas' },
    { name: 'El Compás', href: '#compas' },
    { name: 'Eventos & Galas', href: '#eventos' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Sede & Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-flamenco-void/90 backdrop-blur-md py-3 border-b border-flamenco-borderSubtle shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Marca */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Inicio Academia FlamenKos Miguel Lorca"
          >
            <div className="w-10 h-10 rounded-full border border-flamenco-gold/40 bg-flamenco-surface p-1 shadow-md group-hover:border-flamenco-gold transition-colors overflow-hidden flex items-center justify-center">
              <img
                src="/images/logo-flamenkos.png"
                alt="Logo FlamenKos"
                className="w-full h-full object-contain filter invert contrast-125 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg font-bold text-flamenco-linen group-hover:text-flamenco-gold transition-colors leading-none">
                FLAMENKOS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-flamenco-albero font-sans mt-0.5">
                Miguel Lorca · Ronda
              </span>
            </div>
          </a>

          {/* Menú de Escritorio */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs uppercase tracking-wider text-flamenco-muted hover:text-flamenco-linen transition-colors font-sans relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-flamenco-albero hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Botones de acción derecha */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Control de Paisaje Sonoro */}
            <button
              onClick={toggleAmbientSound}
              title={ambientActive ? 'Silenciar ambiente escénico' : 'Activar ambiente escénico de tablao'}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-wider ${
                ambientActive
                  ? 'border-flamenco-almagre bg-flamenco-almagre/20 text-flamenco-linen shadow-[0_0_15px_rgba(142,20,20,0.4)]'
                  : 'border-white/10 hover:border-flamenco-gold/40 text-flamenco-muted hover:text-flamenco-linen'
              }`}
            >
              {ambientActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-flamenco-almagre animate-pulse" />
                  <span className="hidden xl:inline text-[11px] text-flamenco-albero font-sans">Sonido Vivo</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden xl:inline text-[11px] text-flamenco-muted font-sans">Ambiente</span>
                </>
              )}
            </button>

            {/* CTA Reserva de Clase Gratis */}
            <MagneticButton
              variant="gold"
              onClick={onOpenBooking}
              className="py-2.5 px-4 text-xs font-semibold"
            >
              Clase de Prueba Gratis
            </MagneticButton>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleAmbientSound}
              className="p-2 rounded-full border border-white/10 text-flamenco-muted"
              aria-label="Control de sonido"
            >
              {ambientActive ? <Volume2 className="w-4 h-4 text-flamenco-almagre" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-flamenco-linen hover:text-flamenco-gold focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-flamenco-void/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-flamenco-albero font-sans border-b border-flamenco-borderSubtle pb-2">
              Navegación Escénica
            </p>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left font-serif text-2xl tracking-wide text-flamenco-linen hover:text-flamenco-albero transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-flamenco-borderSubtle">
            <div className="flex items-center gap-2 text-xs text-flamenco-muted">
              <MapPin className="w-4 h-4 text-flamenco-albero flex-shrink-0" />
              <span>C. Molino, 6b, 29400 Ronda, Málaga</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-flamenco-muted">
              <Phone className="w-4 h-4 text-flamenco-albero flex-shrink-0" />
              <span>Información y Matrículas: Abiertas todo el año</span>
            </div>
            <MagneticButton
              variant="gold"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-2"
            >
              Solicitar Clase de Prueba Gratuita
            </MagneticButton>
          </div>
        </div>
      )}
    </>
  );
};
