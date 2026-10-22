import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ArrowUpRight, X, Phone, MapPin } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  title: string;
  date: string;
  category: 'Cartel Oficial' | 'Escena & Tablao' | 'Hitos & Premios';
  caption: string;
  likes: number;
  comments: number;
  location: string;
  phone?: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 'post-matriculacion-1',
    image: '/images/ig-matriculacion.jpg',
    title: 'Matriculación de Nuevos Alumnos',
    date: 'Septiembre · Temporada 2026/27',
    category: 'Cartel Oficial',
    caption: '¡Abrimos plazo de matriculación para todas las edades! Desde los pequeños de 3 años en FlamenKitos hasta adultos iniciación y perfeccionamiento. Del lunes 21 al jueves 24 de septiembre, de 18:00 a 20:00 H en nuestra sede de C/ Molino 6, Ronda.',
    likes: 248,
    comments: 34,
    location: 'C/ Molino 6, Ronda (Málaga)',
    phone: '635 96 41 25',
  },
  {
    id: 'post-comienzo-clases',
    image: '/images/ig-comienzo-clases.jpg',
    title: 'Comienzo de Clases Oficiales',
    date: '5 de Octubre',
    category: 'Cartel Oficial',
    caption: '¡Arrancamos un nuevo curso lleno de duende, compás e ilusión! El maestro Miguel Lorca y todo el elenco de profesoras os esperan sobre la tarima de Ronda. ¡Te esperamos!',
    likes: 312,
    comments: 42,
    location: 'Salas FlamenKos · Ronda',
    phone: '635 96 41 25',
  },
  {
    id: 'post-feria-pedro-romero',
    image: '/images/ig-feria-pedro-romero.jpg',
    title: 'Feliz Feria & Fiestas de Pedro Romero',
    date: 'Feria Goyesca de Ronda',
    category: 'Escena & Tablao',
    caption: 'Desde la Academia de Danza FlamenKos de Miguel Lorca os deseamos una feliz Feria y Fiestas de Pedro Romero. El arte, la tradición y la elegancia rondeña en cada desplante.',
    likes: 420,
    comments: 56,
    location: 'El Tajo · Ronda, Málaga',
    phone: '635 96 41 25',
  },
  {
    id: 'post-unicaja',
    image: '/images/ig-unicaja.jpg',
    title: 'Reconocimiento en Fundación Unicaja',
    date: 'Gala Cultural',
    category: 'Hitos & Premios',
    caption: 'El maestro Miguel Lorca recibiendo el reconocimiento por su dedicación a la docencia flamenca y la difusión cultural de la danza andaluza en el Centro Cultural de la Fundación Unicaja.',
    likes: 189,
    comments: 28,
    location: 'Centro Cultural Fundación Unicaja',
    phone: '635 96 41 25',
  },
  {
    id: 'post-matriculacion-2',
    image: '/images/ig-matriculacion-2.jpg',
    title: 'Convocatoria Cantera Infantil',
    date: 'Curso 2026/27',
    category: 'Cartel Oficial',
    caption: 'Nuestras alumnas con sus trajes de volantes y claveles rojos. En FlamenKos formamos el compás desde los 3 años de edad en un ambiente lúdico, familiar y riguroso. C/ Molino 6 · Tel: 635 96 41 25.',
    likes: 275,
    comments: 19,
    location: 'C/ Molino 6, Ronda',
    phone: '635 96 41 25',
  },
  {
    id: 'post-escena',
    image: '/images/ig-escena.jpg',
    title: 'Mística & Puesta en Escena',
    date: 'Teatro en Vivo',
    category: 'Escena & Tablao',
    caption: 'La solemnidad del silencio antes de que comience el taconeo. Luces teatrales, atmósfera de claroscuro y la presencia de Miguel Lorca guiando a la compañía.',
    likes: 380,
    comments: 47,
    location: 'Teatro Municipal Vicente Espinel',
    phone: '635 96 41 25',
  },
];

export const EventsSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Cartel Oficial' | 'Escena & Tablao'>('Todos');

  const filteredPosts = instagramPosts.filter((post) => {
    if (activeFilter === 'Todos') return true;
    return post.category === activeFilter;
  });

  return (
    <>
      <section
        id="cartelera"
        className="relative w-full bg-[#000000] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-10 border-t border-[#180000]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Cabecera Editorial Estilo Perfil Instagram */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#220000] gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#120000] border border-[#330000] text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#CC0000] font-sans font-bold mb-2.5 sm:mb-3">
                <Instagram className="w-3.5 h-3.5" />
                <span>@academia_flamenkos · Instagram Feed</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#E5E5E5]">
                Noticias & Cartelera
              </h2>
            </div>

            {/* Enlace oficial a Instagram */}
            <div className="flex items-center gap-4">
              <a
                href="http://instagram.com/academia_flamenkos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#120000] active:bg-[#CC0000] hover:bg-[#CC0000] text-white border border-[#3d0000] hover:border-[#CC0000] text-xs font-sans uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(204,0,0,0.25)]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Seguir en Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Filtros de la Galería */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {(['Todos', 'Cartel Oficial', 'Escena & Tablao'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-sans transition-all duration-300 border ${
                  activeFilter === tab
                    ? 'bg-[#990000] text-white border-[#CC0000] shadow-[0_0_15px_rgba(204,0,0,0.3)]'
                    : 'bg-[#0a0a0a] text-bone-muted border-[#220000] hover:border-[#440000] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CUADRÍCULA ESTILO INSTAGRAM RESPONSIVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPosts.map((post) => (
              <motion.article
                layout
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group relative aspect-[4/5] bg-[#080808] border border-[#220000] hover:border-[#CC0000] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl"
              >
                {/* Imagen del Post de Instagram */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badge de Categoría permanente */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-sans font-bold bg-black/85 text-[#CC0000] border border-[#330000] backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Pie de foto visible en móviles (Touch friendly) */}
                <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-3.5 pt-7 z-10">
                  <span className="text-[9px] uppercase tracking-wider text-[#CC0000] font-sans font-semibold block mb-0.5">
                    {post.date}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white leading-tight line-clamp-1">
                    {post.title}
                  </h4>
                </div>

                {/* Overlay de Hover en pantallas con ratón */}
                <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-between p-6 z-20">
                  <div className="flex justify-end">
                    <span className="text-[10px] uppercase tracking-wider font-sans text-bone-muted bg-black/60 px-2 py-1">
                      {post.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-xs text-bone-muted font-sans font-light line-clamp-3 mb-4">
                      {post.caption}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[#330000] text-xs font-sans text-bone-muted">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[#CC0000]">
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-white">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#CC0000] font-semibold">
                        Ver publicación →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX RESPONSIVE DE PUBLICACIÓN */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative max-w-4xl w-full max-h-[92svh] bg-[#070707] border border-[#330000] shadow-[0_30px_90px_rgba(204,0,0,0.25)] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden my-auto"
            >
              {/* Botón Cerrar flotante visible */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 z-30 p-2 text-bone-muted hover:text-[#CC0000] active:text-[#CC0000] bg-black/80 rounded-full transition-colors border border-[#330000]"
                aria-label="Cerrar publicación"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Columna Izquierda: Cartel / Fotografía */}
              <div className="w-full md:w-1/2 bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#220000] min-h-[220px] max-h-[38svh] md:max-h-[85vh]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-contain object-center max-h-[36svh] md:max-h-[80vh]"
                />
              </div>

              {/* Columna Derecha: Detalles del Post */}
              <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  {/* Encabezado del perfil */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#1f0000]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full border border-[#CC0000] p-0.5 overflow-hidden bg-black flex-shrink-0">
                        <img
                          src="/images/logo-flamenkos.png"
                          alt="Logo FlamenKos"
                          className="w-full h-full object-contain filter invert"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans text-xs font-bold text-white tracking-wider">
                            academia_flamenkos
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                        </div>
                        <span className="text-[10px] text-bone-muted font-sans block">
                          Ronda, Málaga
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] uppercase tracking-wider text-[#CC0000] font-sans px-2 py-0.5 bg-[#1a0000] border border-[#330000]">
                      {selectedPost.category}
                    </span>
                  </div>

                  {/* Título y Texto de la publicación */}
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#E5E5E5] leading-tight mb-2.5">
                    {selectedPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-bone-muted font-sans font-light leading-relaxed mb-5 whitespace-pre-line">
                    {selectedPost.caption}
                  </p>

                  {/* Metadatos de Sede y Teléfono */}
                  <div className="space-y-2 text-xs font-sans text-bone-muted py-3 px-3.5 border border-[#1c0000] bg-[#0b0b0b] mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#CC0000] flex-shrink-0" />
                      <span>{selectedPost.location}</span>
                    </div>
                    {selectedPost.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#CC0000] flex-shrink-0" />
                        <a
                          href={`tel:${selectedPost.phone.replace(/\s+/g, '')}`}
                          className="font-mono text-white font-medium hover:text-[#CC0000] transition-colors"
                        >
                          {selectedPost.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Acciones Inferiores (WhatsApp directo / Llamada) */}
                <div className="pt-4 border-t border-[#1f0000] space-y-2.5">
                  <a
                    href={`https://wa.me/34635964125?text=Hola,%20he%20visto%20en%20la%20web%20la%20publicación%20"${encodeURIComponent(selectedPost.title)}"%20y%20quisiera%20más%20información.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#25D366] active:bg-[#20ba59] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-sans font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Preguntar por WhatsApp</span>
                  </a>

                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans text-bone-muted px-1">
                    <a
                      href="http://instagram.com/academia_flamenkos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#CC0000] transition-colors flex items-center gap-1"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Ver en Instagram</span>
                    </a>

                    <button
                      onClick={() => setSelectedPost(null)}
                      className="hover:text-white uppercase tracking-wider transition-colors py-1"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
