import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Efecto magnético sutil (máximo 6px)
    const distanceX = (clientX - centerX) * 0.15;
    const distanceY = (clientY - centerY) * 0.15;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-flamenco-almagre hover:bg-flamenco-carmine text-white border border-flamenco-carmine/40 shadow-[0_4px_24px_rgba(142,20,20,0.35)]';
      case 'gold':
        return 'bg-gradient-to-r from-flamenco-albero via-flamenco-gold to-flamenco-albero text-flamenco-void font-bold shadow-[0_4px_24px_rgba(197,155,39,0.3)] hover:brightness-110';
      case 'outline':
        return 'bg-transparent text-flamenco-linen border border-flamenco-gold/40 hover:border-flamenco-gold hover:bg-flamenco-gold/10';
      case 'secondary':
      default:
        return 'bg-flamenco-surface text-flamenco-linen border border-white/10 hover:border-white/25 hover:bg-flamenco-surfaceLight';
    }
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm font-sans text-sm tracking-wider uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.button>
  );
};
