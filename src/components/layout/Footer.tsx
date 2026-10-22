import React from 'react';
import { Instagram, Facebook, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-flamenco-void text-flamenco-linen pt-20 pb-12 border-t border-flamenco-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Logo y descripción */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-flamenco-gold/40 bg-flamenco-surface p-1 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/logo-flamenkos.png"
                    alt="Logo FlamenKos"
                    className="w-full h-full object-contain filter invert contrast-125"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-widest text-flamenco-linen">
                    FLAMENKOS
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-flamenco-albero font-sans">
                    Academia de Danza · Miguel Lorca
                  </p>
                </div>
              </div>

              <p className="text-xs text-flamenco-muted font-sans font-light leading-relaxed max-w-sm mb-6">
                Templo de arte y compás en Ronda (Málaga). Formación en baile flamenco para todas las edades desde los 3 años. El duende no se aprende de memoria: se forja sobre la madera.
              </p>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/miguellorcaronda/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Personal Miguel Lorca"
                className="w-9 h-9 rounded-full bg-flamenco-surface border border-white/10 hover:border-flamenco-gold/50 flex items-center justify-center text-flamenco-muted hover:text-flamenco-albero transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="http://instagram.com/academia_flamenkos/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Academia FlamenKos"
                className="w-9 h-9 rounded-full bg-flamenco-surface border border-white/10 hover:border-flamenco-gold/50 flex items-center justify-center text-flamenco-muted hover:text-flamenco-almagre transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/AcademiaDeDanzaFlamenkos/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Academia FlamenKos"
                className="w-9 h-9 rounded-full bg-flamenco-surface border border-white/10 hover:border-flamenco-gold/50 flex items-center justify-center text-flamenco-muted hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-bold text-flamenco-linen uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-flamenco-muted font-sans">
              <li>
                <a href="#maestro" className="hover:text-flamenco-albero transition-colors">
                  El Maestro Miguel Lorca
                </a>
              </li>
              <li>
                <a href="#disciplinas" className="hover:text-flamenco-albero transition-colors">
                  Disciplinas & Cursos
                </a>
              </li>
              <li>
                <a href="#compas" className="hover:text-flamenco-albero transition-colors">
                  Laboratorio del Compás
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-flamenco-albero transition-colors">
                  Galas y Eventos en Ronda
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-flamenco-albero transition-colors">
                  Horarios Semanales
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-flamenco-albero transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Sede y Dirección */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold text-flamenco-linen uppercase tracking-wider mb-4">
              Sede Central
            </h4>
            <div className="space-y-3 text-xs text-flamenco-muted font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-flamenco-almagre mt-0.5 flex-shrink-0" />
                <span>
                  Calle Molino, 6b<br />
                  29400 Ronda, Málaga (Andalucía)
                </span>
              </div>
              <p className="pt-2 text-[11px] text-flamenco-muted/80">
                Matrículas y clases de prueba disponibles durante todo el curso lectivo. Grupos desde los 3 años hasta personas mayores.
              </p>
            </div>
          </div>
        </div>

        {/* Fila inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-flamenco-muted font-sans gap-4">
          <p>
            © {new Date().getFullYear()} Academia de Danza FlamenKos Miguel Lorca. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[11px]">
              Hecho con <Heart className="w-3 h-3 text-flamenco-almagre fill-current inline" /> para el arte de Ronda
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-flamenco-gold text-flamenco-muted hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
