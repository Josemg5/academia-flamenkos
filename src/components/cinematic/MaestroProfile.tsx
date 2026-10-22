import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Heart, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const MaestroProfile: React.FC = () => {
  return (
    <section id="maestro" className="relative py-28 bg-flamenco-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Retrato y Composición Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Marco teatral de alta costura con borde albero */}
              <div className="relative z-10 overflow-hidden rounded-sm border border-flamenco-gold/40 p-2 bg-flamenco-stage shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="/images/miguel-lorca-hero.png"
                  alt="Miguel Lorca en el escenario"
                  className="w-full h-[480px] object-cover object-top filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flamenco-void via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-flamenco-albero font-sans font-bold block mb-1">
                    Dirección Artística
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-flamenco-linen">
                    Miguel Lorca
                  </h3>
                  <p className="text-xs text-flamenco-muted font-sans mt-1">
                    Bailaor, Maestro y Coreógrafo · Ronda, Málaga
                  </p>
                </div>
              </div>

              {/* Decoración de fondo de cuadro */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-flamenco-almagre/30 -z-0 rounded-sm pointer-events-none" />
            </div>
          </motion.div>

          {/* Biografía y Trayectoria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-flamenco-albero font-sans font-semibold mb-3 block">
              El Alma de la Escuela
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-flamenco-linen leading-tight mb-6">
              Una vida entregada al flamenco, desde Ronda para Europa
            </h2>

            <div className="space-y-4 text-base text-flamenco-muted font-sans font-light leading-relaxed mb-8">
              <p>
                Con décadas de experiencia ininterrumpida sobre los escenarios, <strong className="text-flamenco-linen font-normal">Miguel Lorca</strong> ha llevado la pureza, el nervio y la elegancia del baile flamenco por múltiples países y festivales de Europa. Su danza combina la fuerza telúrica del taconeo andaluz con la pulcritud y el dibujo estilizado de la escuela clásica.
              </p>
              <p>
                En su academia en <strong className="text-flamenco-linen font-normal">C. Molino, 6b (Ronda)</strong>, Miguel Lorca vuelca toda esa vivencia internacional en un proyecto pedagógico generoso y cercano. Su filosofía abraza a estudiantes de todas las generaciones: desde niños y niñas de 3 años que dan sus primeros compases lúdicos, hasta adultos que sueñan con bailar por derecho, y jóvenes talentos que preparan su salto a las compañías profesionales.
              </p>
            </div>

            {/* Credenciales y méritos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-sm bg-flamenco-surface border border-flamenco-borderSubtle">
                <Globe className="w-5 h-5 text-flamenco-albero mb-2" />
                <h4 className="font-serif text-base font-bold text-flamenco-linen mb-1">Giras Europeas</h4>
                <p className="text-xs text-flamenco-muted font-sans">
                  Presentaciones en teatros, festivales y encuentros internacionales.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-flamenco-surface border border-flamenco-borderSubtle">
                <Award className="w-5 h-5 text-flamenco-almagre mb-2" />
                <h4 className="font-serif text-base font-bold text-flamenco-linen mb-1">Pedagogía Viva</h4>
                <p className="text-xs text-flamenco-muted font-sans">
                  Atención individualizada, técnica postural y transmisión directa del duende.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-flamenco-surface border border-flamenco-borderSubtle">
                <Heart className="w-5 h-5 text-flamenco-gold mb-2" />
                <h4 className="font-serif text-base font-bold text-flamenco-linen mb-1">Comunidad FlamenKos</h4>
                <p className="text-xs text-flamenco-muted font-sans">
                  Galas benéficas, festivales en Ronda y montajes colectivos.
                </p>
              </div>
            </div>

            {/* Enlaces Sociales Oficiales */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <span className="text-xs uppercase tracking-wider text-flamenco-muted font-sans">
                Sigue el día a día del maestro:
              </span>

              <a
                href="https://www.instagram.com/miguellorcaronda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-flamenco-surface hover:bg-flamenco-surfaceLight border border-white/10 text-xs text-flamenco-linen transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-flamenco-albero" />
                <span>@miguellorcaronda</span>
                <ArrowUpRight className="w-3 h-3 text-flamenco-muted" />
              </a>

              <a
                href="http://instagram.com/academia_flamenkos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-flamenco-surface hover:bg-flamenco-surfaceLight border border-white/10 text-xs text-flamenco-linen transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-flamenco-almagre" />
                <span>@academia_flamenkos</span>
                <ArrowUpRight className="w-3 h-3 text-flamenco-muted" />
              </a>

              <a
                href="https://www.facebook.com/AcademiaDeDanzaFlamenkos/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-flamenco-surface hover:bg-flamenco-surfaceLight border border-white/10 text-xs text-flamenco-linen transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>Facebook Oficial</span>
                <ArrowUpRight className="w-3 h-3 text-flamenco-muted" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
