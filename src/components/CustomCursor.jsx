import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop screens
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !('ontouchstart' in window));
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect cursor context badges
      const target = e.target;
      const galleryElem = target.closest('[data-cursor="OPEN"]');
      const imageElem = target.closest('[data-cursor="VIEW"]');
      const interactiveElem = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');

      if (galleryElem) {
        setCursorText('OPEN');
        setIsHovered(true);
      } else if (imageElem) {
        setCursorText('VIEW');
        setIsHovered(true);
      } else if (interactiveElem) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Inner Dot / Badge Container */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-bold text-[10px] tracking-wider rounded-full shadow-lg ${
          cursorText
            ? 'w-14 h-14 bg-brand-gold text-stone-900 border-2 border-white'
            : 'w-3 h-3 bg-brand-gold mix-blend-difference'
        }`}
        animate={{
          x: mousePosition.x - (cursorText ? 28 : 6),
          y: mousePosition.y - (cursorText ? 28 : 6),
          scale: isHovered && !cursorText ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
      >
        {cursorText}
      </motion.div>

      {/* Outer Fluid Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-green/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? (cursorText ? 1.5 : 1.8) : 1,
          backgroundColor: isHovered && !cursorText ? 'rgba(78, 124, 56, 0.08)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
}
