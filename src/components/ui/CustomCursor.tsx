import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Si es un dispositivo exclusivamente táctil, no mostrar el seguidor
    const touchQuery = window.matchMedia('(pointer: coarse) and (hover: none)');
    if (touchQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const follower = followerRef.current;
    if (!follower) return;

    const pos = { x: -100, y: -100 };
    const mouse = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const tickerCallback = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.16, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      gsap.set(follower, {
        x: pos.x,
        y: pos.y,
      });
    };

    gsap.ticker.add(tickerCallback);
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('data-cursor') === 'pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gsap.ticker.remove(tickerCallback);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovered
          ? 'w-10 h-10 border border-[#CC0000] bg-[#CC0000]/15 scale-125 shadow-[0_0_15px_rgba(204,0,0,0.3)]'
          : 'w-6 h-6 border border-[#CC0000]/60 bg-[#CC0000]/5'
      }`}
      style={{ willChange: 'transform' }}
    />
  );
};
