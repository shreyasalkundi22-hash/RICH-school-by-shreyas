import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Sun, Heart, Star, Smile, Award, FileText, ShieldCheck } from 'lucide-react';
import schoolLogoImg from '../assets/school_logo.jpg';
import trustLogoImg from '../assets/trust_logo.jpg';

export default function HeroSection({ onOpenEnquiry, onOpenComingSoon, onOpenPolicy }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[#FAF8F5]">
      
      {/* Soft Background Radial Lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating vector decorations */}
      <motion.div 
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 left-10 md:left-24 text-brand-gold opacity-60 hidden sm:block pointer-events-none"
      >
        <Sun className="w-12 h-12 stroke-[1.5]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-28 left-20 text-brand-leafGreen opacity-50 hidden sm:block pointer-events-none"
      >
        <Star className="w-10 h-10 fill-brand-leafGreen/20 stroke-[1.5]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Oversized Editorial Typography Composition */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* OFFICIAL DUAL LOGO BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 p-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-stone-200/80"
            >
              <img
                src={schoolLogoImg}
                alt="Jr. R.I.C.H. Official School Logo"
                className="h-11 sm:h-12 w-auto object-contain bg-white rounded-xl p-1 shadow-sm"
              />
              <div className="h-9 w-px bg-stone-200 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <img
                  src={trustLogoImg}
                  alt="Param Jyoti Foundation"
                  className="h-9 w-auto object-contain bg-white rounded-lg p-0.5"
                />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green block leading-tight">A Unit of</span>
                  <span className="text-xs font-serif font-bold text-stone-800 block leading-tight">Param Jyoti Foundation</span>
                </div>
              </div>
            </motion.div>

            {/* Admissions Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 shadow-sm mb-5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-leafGreen animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Admissions Open 2026-27 • Keshwapur, Hubballi
              </span>
            </motion.div>

            {/* OVERSIZED 8XL/9XL DISPLAY HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.98] mb-4"
            >
              <span className="font-cinzel font-extrabold tracking-widest text-stone-900 drop-shadow-md">
                JR. RICH
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-600 to-brand-orange font-dmserif italic font-normal text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-normal mt-2">
                SCHOOL
              </span>
            </motion.h1>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl font-bold text-brand-green tracking-wide uppercase mb-4 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand-leafGreen animate-pulse shrink-0" />
              <span>Where Little Minds Begin Big Journeys.</span>
            </motion.p>

            {/* SUPPORTING DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed mb-8"
            >
              A joyful learning environment where curiosity grows, confidence shines and every child discovers the joy of learning.
            </motion.p>

            {/* PRIMARY ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onOpenComingSoon('Explore School Story')}
                className="px-8 py-4 rounded-full bg-brand-green hover:bg-emerald-800 text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore School</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 rounded-full bg-white hover:bg-amber-50 text-brand-dark font-bold text-sm border-2 border-brand-gold/70 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Admission Enquiry</span>
              </button>

              <button
                onClick={onOpenPolicy}
                className="px-7 py-4 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm border border-amber-300 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>School Policies</span>
              </button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-stone-200/80 w-full max-w-lg"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-serif text-2xl lg:text-3xl font-bold text-brand-green">Pre Nursery</span>
                <span className="text-xs text-stone-500 font-medium">To 4th Standard</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-serif text-2xl lg:text-3xl font-bold text-brand-gold">6 Activities</span>
                <span className="text-xs text-stone-500 font-medium">Karate, Yoga & Music</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-serif text-2xl lg:text-3xl font-bold text-brand-blue">Primary</span>
                <span className="text-xs text-stone-500 font-medium">1st to 4th Std</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Asymmetric Layered Imagery */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden p-3 bg-gradient-to-tr from-amber-200 via-emerald-100 to-sky-200 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
                  alt="Preschool children learning and playing joyfully"
                  className="w-full h-[420px] sm:h-[500px] object-cover rounded-[2rem]"
                  data-cursor="VIEW"
                />
                
                {/* Floating Glass Badge 1 */}
                <div className="absolute top-8 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-stone-100 flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-brand-gold">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Joyful Learning</p>
                    <p className="text-[10px] text-stone-500">Nurturing Environment</p>
                  </div>
                </div>

                {/* Floating Glass Badge 2 */}
                <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-stone-100 flex items-center gap-3 animate-float-medium">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-brand-green">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Confidence & Growth</p>
                    <p className="text-[10px] text-stone-500">Holistic Care</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
