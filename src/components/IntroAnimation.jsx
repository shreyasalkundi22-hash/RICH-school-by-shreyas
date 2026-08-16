import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import schoolLogoImg from '../assets/school_logo.jpg';

export default function IntroAnimation({ forceReplay, onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check if user has already seen intro this session
    const hasSeen = sessionStorage.getItem('junior_rich_intro_seen');
    if (hasSeen && !forceReplay) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Sequence timing
    const t1 = setTimeout(() => setStep(1), 300);   // Believe
    const t2 = setTimeout(() => setStep(2), 1000);  // Achieve
    const t3 = setTimeout(() => setStep(3), 1700);  // Succeed
    const t4 = setTimeout(() => {
      setStep(4);
      sessionStorage.setItem('junior_rich_intro_seen', 'true');
    }, 2600);
    const t5 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [forceReplay, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: step === 4 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-0 z-[100] bg-[#1C2518] text-[#FDFBF7] flex flex-col justify-between p-8 md:p-12 overflow-hidden select-none"
      >
        {/* Decorative subtle ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5B025]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#76A035]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar with mini institution branding */}
        <div className="flex items-center justify-between z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img 
              src={schoolLogoImg} 
              alt="Jr. R.I.C.H. Logo" 
              className="w-10 h-10 object-contain rounded-lg bg-white p-1 shadow-md block"
            />
            <div className="text-xs uppercase tracking-widest text-[#E8D3A7] font-semibold">
              Jr. R.I.C.H. Pre-Primary
            </div>
          </motion.div>

          <span className="text-xs tracking-widest text-emerald-200/60 uppercase font-mono">
            Hubballi, KA
          </span>
        </div>

        {/* Center Masking Typography: BELIEVE. ACHIEVE. SUCCEED. */}
        <div className="my-auto flex flex-col items-center justify-center text-center py-12 z-10">
          <div className="flex flex-col gap-2 md:gap-4 font-serif text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none font-bold">
            
            {/* BELIEVE. */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "120%", opacity: 0, scale: 0.95 }}
                animate={step >= 1 ? { y: "0%", opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#F5B025]"
              >
                BELIEVE.
              </motion.span>
            </div>

            {/* ACHIEVE. */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "120%", opacity: 0, scale: 0.95 }}
                animate={step >= 2 ? { y: "0%", opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#76A035]"
              >
                ACHIEVE.
              </motion.span>
            </div>

            {/* SUCCEED. */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "120%", opacity: 0, scale: 0.95 }}
                animate={step >= 3 ? { y: "0%", opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#E07A5F]"
              >
                SUCCEED.
              </motion.span>
            </div>

          </div>
        </div>

        {/* Bottom subtle progress indicator */}
        <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center gap-3">
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : step >= 3 ? "100%" : "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#F5B025] via-[#76A035] to-[#E07A5F]"
            />
          </div>
          <p className="text-[11px] text-[#E8D3A7]/70 tracking-wider uppercase font-medium">
            Preparing joyful learning experiences
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
