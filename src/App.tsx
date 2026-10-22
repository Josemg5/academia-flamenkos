import React, { useState, useCallback } from 'react';
import { useLenis } from './hooks/useLenis';
import { FilmGrain } from './components/ui/FilmGrain';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/cinematic/Preloader';
import { Scene3D } from './components/3d/Scene3D';
import { HeaderMinimal } from './components/ui/HeaderMinimal';
import { Hero } from './components/cinematic/Hero';
import { Manifesto } from './components/cinematic/Manifesto';
import { EventsSection } from './components/cinematic/EventsSection';
import { DisciplinesList, DisciplineItem } from './components/cinematic/DisciplinesList';
import { FinalCTA } from './components/cinematic/FinalCTA';
import { AdmissionModal } from './components/booking/AdmissionModal';
import { ScrollToTop } from './components/ui/ScrollToTop';

export function App() {
  // Inicialización de scroll suave inercial Lenis
  useLenis();

  // Estados interactivos
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDisciplineName, setSelectedDisciplineName] = useState<string | null>(null);

  // Estados de conexión con el Shader Líquido 3D
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);
  const [isHoveredDiscipline, setIsHoveredDiscipline] = useState(false);
  const [shaderMousePos, setShaderMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleHoverDiscipline = useCallback((item: DisciplineItem | null, mouseEvent?: React.MouseEvent) => {
    if (item && mouseEvent) {
      setActiveImageUrl(item.imageUrl);
      setIsHoveredDiscipline(true);
      // Coordenadas normalizadas del ratón (0 a 1)
      const normX = mouseEvent.clientX / window.innerWidth;
      const normY = 1.0 - (mouseEvent.clientY / window.innerHeight);
      setShaderMousePos({ x: normX, y: normY });
    } else {
      setIsHoveredDiscipline(false);
    }
  }, []);

  const handleOpenGeneralBooking = () => {
    setSelectedDisciplineName(null);
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#E5E5E5] overflow-x-hidden selection:bg-[#990000] selection:text-white">
      {/* Capa Global de Ruido (Film Grain Cinematográfico 35mm) */}
      <FilmGrain />

      {/* Cursor Físico Personalizado en Rojo Carmín con Inercia */}
      <CustomCursor />

      {/* Preloader Teatral con Contador 0-100% y Telón Clip-Path */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Motor 3D WebGL (R3F): Partículas de Brasas + Shader Líquido GLSL */}
      <Scene3D
        activeImageUrl={activeImageUrl}
        isHovered={isHoveredDiscipline}
        mousePos={shaderMousePos}
      />

      {/* Encabezado Minimalista de Estudio */}
      <HeaderMinimal onOpenBooking={handleOpenGeneralBooking} />

      {/* SECCIÓN 1: Hero Monumental 100vh con Tipografía 15vw y Parallax Extremo GSAP */}
      <Hero onOpenBooking={handleOpenGeneralBooking} />

      {/* SECCIÓN 2: Manifiesto Abisal (Scrollytelling Puro palabra por palabra) */}
      <Manifesto />

      {/* SECCIÓN 3: NUEVA Cartelera (Noticias & Eventos en Ronda con líneas animadas GSAP) */}
      <EventsSection />

      {/* SECCIÓN 4: Galería de Disciplinas (Acordeón Cinemático Sedoso + WebGL Shader) */}
      <DisciplinesList onHoverDiscipline={handleHoverDiscipline} />

      {/* SECCIÓN 5: Clímax Rojo Carmín con Botón Magnético ("CONTACTAR CON SECRETARÍA") */}
      <FinalCTA onOpenBooking={handleOpenGeneralBooking} />

      {/* Modal de Contacto y Admisión */}
      <AdmissionModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDiscipline={selectedDisciplineName}
      />

      {/* Botón flotante en esquina inferior derecha para volver al inicio */}
      <ScrollToTop />
    </div>
  );
}

export default App;
