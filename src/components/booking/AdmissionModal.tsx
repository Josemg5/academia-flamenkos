import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageSquare, Send, Phone, ChevronDown, Check } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDiscipline?: string | null;
}

const PHONE_DISPLAY = '635 96 41 25';
const PHONE_WA = '34635964125';

const topics = [
  'Información general',
  'Clases infantiles (desde 3 años)',
  'Clases para adultos',
  'Horarios y precios',
  'Eventos y galas',
  'Otra consulta',
];

const inputClass =
  'w-full px-4 py-3 bg-[#0a0a0a] border border-[#260000] text-[#E5E5E5] text-sm font-sans focus:border-[#CC0000] focus:outline-none transition-colors placeholder:text-[#555555] rounded-none';

const labelClass =
  'block text-[10px] uppercase tracking-[0.25em] text-[#E5E5E5] font-sans mb-1.5 font-semibold';

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  preselectedDiscipline,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    topic: topics[0],
    question: '',
  });
  const [sent, setSent] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown personalizado al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Si se abre desde una disciplina concreta, se precarga la duda
  useEffect(() => {
    if (preselectedDiscipline) {
      setFormData((prev) => ({
        ...prev,
        question: prev.question || `Tengo una duda sobre ${preselectedDiscipline}: `,
      }));
    }
  }, [preselectedDiscipline]);

  const buildWhatsAppUrl = () => {
    const text = [
      '¡Hola! Tengo una duda para la Academia FlamenKos Miguel Lorca:',
      '',
      `Nombre: ${formData.name}`,
      `Contacto: ${formData.contact}`,
      `Tema: ${formData.topic}`,
      '',
      formData.question,
    ].join('\n');
    return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', contact: '', topic: topics[0], question: '' });
      setDropdownOpen(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Fondo oscuro desenfocado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#000000]/95 backdrop-blur-xl"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dudas-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl bg-[#060606] border border-[#2b0000] p-6 sm:p-10 my-8 shadow-[0_25px_60px_rgba(153,0,0,0.3)]"
          >
            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-bone-muted hover:text-[#CC0000] transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {!sent ? (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#CC0000] font-sans font-semibold block mb-2">
                    Academia FlamenKos · Ronda
                  </span>
                  <h2
                    id="dudas-title"
                    className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#E5E5E5] tracking-tight"
                  >
                    ¿Tienes alguna duda?
                  </h2>
                  <p className="text-sm text-bone-muted font-sans mt-2">
                    Escríbenos tu pregunta y te responderemos lo antes posible. También puedes
                    llamarnos al{' '}
                    <a
                      href={`tel:${PHONE_WA}`}
                      className="text-[#E5E5E5] hover:text-[#CC0000] transition-colors whitespace-nowrap font-medium"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="duda-name" className={labelClass}>
                        Nombre *
                      </label>
                      <input
                        id="duda-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="duda-contact" className={labelClass}>
                        Teléfono o email *
                      </label>
                      <input
                        id="duda-contact"
                        type="text"
                        required
                        autoComplete="tel"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Para responderte"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* DESPLEGABLE PERSONALIZADO ESTÉTICO (Sin el azul feo de Windows) */}
                  <div className="relative" ref={dropdownRef}>
                    <label className={labelClass}>
                      Tema de la consulta
                    </label>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border text-left flex items-center justify-between text-sm font-sans transition-all ${
                        dropdownOpen
                          ? 'border-[#CC0000] text-white shadow-[0_0_15px_rgba(204,0,0,0.25)]'
                          : 'border-[#260000] text-[#E5E5E5] hover:border-[#550000]'
                      }`}
                    >
                      <span>{formData.topic}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#CC0000] transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 right-0 top-full mt-1 bg-[#0a0a0a] border border-[#3d0000] shadow-[0_15px_40px_rgba(0,0,0,0.9)] z-50 overflow-hidden divide-y divide-[#180000]"
                        >
                          {topics.map((t) => {
                            const isSelected = formData.topic === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, topic: t });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left text-xs uppercase tracking-wider font-sans flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? 'bg-[#1a0000] text-[#CC0000] font-bold'
                                    : 'text-[#C5C5C5] hover:bg-[#120000] hover:text-white'
                                }`}
                              >
                                <span>{t}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#CC0000]" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label htmlFor="duda-question" className={labelClass}>
                      Tu duda *
                    </label>
                    <textarea
                      id="duda-question"
                      required
                      rows={4}
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Ej. ¿Puede empezar mi hija de 4 años a mitad de curso? ¿Qué calzado necesito para la primera clase?"
                      className={`${inputClass} resize-none leading-relaxed`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#990000] hover:bg-[#CC0000] text-white font-sans text-xs uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2 transition-colors shadow-[0_0_25px_rgba(153,0,0,0.4)]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar duda por WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-[#6A6A6A] font-sans text-center mt-2.5">
                      Se abrirá WhatsApp para enviar tu duda directamente a Miguel Lorca.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#1A0000] border border-[#CC0000] flex items-center justify-center mx-auto mb-4 text-[#CC0000]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold uppercase text-[#E5E5E5] mb-2">
                  Gracias, {formData.name.split(' ')[0]}
                </h3>
                <p className="text-sm text-bone-muted font-sans max-w-sm mx-auto mb-8">
                  Se ha abierto WhatsApp con tu duda ya preparada. Solo tienes que pulsar enviar y te
                  responderemos con la mayor brevedad.
                </p>

                <div className="space-y-3">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-sans font-bold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>¿No se abrió? Abrir WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${PHONE_WA}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 border border-[#330000] hover:border-[#CC0000] text-[#E5E5E5] text-xs uppercase tracking-wider font-sans font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#CC0000]" />
                    <span>Llamar al {PHONE_DISPLAY}</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="pt-2 text-xs uppercase tracking-[0.2em] text-bone-muted hover:text-white transition-colors block mx-auto"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
