import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StageCurtain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Levantamiento automático del telón tras una breve pausa dramática
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-flamenco-void text-flamenco-linen px-6 select-none pointer-events-none"
        >
          {/* Telón escénico dividido que sube */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }}
            style={{ originY: 0 }}
            className="absolute inset-0 bg-gradient-to-b from-flamenco-void via-[#150a0a] to-flamenco-void border-b border-flamenco-gold/20"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
            {/* Logo de FlamenKos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-flamenco-gold/30 bg-flamenco-void/80 p-3 shadow-[0_0_50px_rgba(197,155,39,0.2)] mb-6 overflow-hidden flex items-center justify-center"
            >
              <img
                src="/images/logo-flamenkos.png"
                alt="FlamenKos Miguel Lorca"
                className="w-full h-full object-contain filter invert contrast-125"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-flamenco-linen mb-2"
            >
              FlamenKos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xs tracking-[0.35em] uppercase text-flamenco-albero mb-6"
            >
              Academia de Danza · Miguel Lorca · Ronda
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-[1px] bg-flamenco-almagre"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
