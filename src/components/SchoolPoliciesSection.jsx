import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, ZoomIn, Download, Sparkles, BookOpen, ShieldCheck, X } from 'lucide-react';
import page1 from '../assets/policy_page_1.jpg';
import page2 from '../assets/policy_page_2.jpg';
import page3 from '../assets/policy_page_3.jpg';
import page4 from '../assets/policy_page_4.jpg';

export default function SchoolPoliciesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const pages = [
    { num: 1, title: 'Page 1: Initial Days, Drop off & Pick up, Food, Attire', img: page1 },
    { num: 2, title: 'Page 2: Illness, Toilet Training, Celebrations, Visitors', img: page2 },
    { num: 3, title: 'Page 3: Injury, Field Trips, Assessment, Teachers, Discipline', img: page3 },
    { num: 4, title: 'Page 4: Home Environment, Phonetics & School Motto', img: page4 },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 3D Page flip animation variants
  const pageFlipVariants = {
    initial: (dir) => ({
      rotateY: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transformOrigin: dir > 0 ? 'right center' : 'left center',
      transition: {
        duration: 0.5,
        ease: [0.5, 0, 0.75, 0],
      },
    }),
  };

  return (
    <section id="policy" className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      
      {/* Soft Background Blobs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-brand-green text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>09 — Official Booklet</span>
          </motion.div>

          {/* Heading: School Policies */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight leading-tight mb-4"
          >
            School Policies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-sm sm:text-base leading-relaxed"
          >
            Flip through the official 4-page policy document of <strong>Jr. R.I.C.H. Pre-Primary School</strong>. Press the arrow marks or page controls to turn pages.
          </motion.p>
        </div>

        {/* Interactive Page Book Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Book Spine / Frame Shadow Wrapper */}
          <div className="relative bg-stone-900 rounded-3xl p-3 sm:p-5 shadow-2xl border-4 border-stone-800 backdrop-blur-md">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-3 py-2 text-white text-xs font-bold border-b border-stone-800 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-gold" />
                <span className="truncate">{pages[currentPage].title}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Zoom Page Image"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inspect Zoom</span>
                </button>
                <span className="bg-brand-gold text-stone-900 font-mono px-2.5 py-0.5 rounded-full text-[11px]">
                  {currentPage + 1} / {pages.length}
                </span>
              </div>
            </div>

            {/* Main Page Flipping Viewing Area */}
            <div className="relative min-h-[500px] sm:min-h-[650px] md:min-h-[780px] bg-stone-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner group perspective-1000">
              
              {/* Arrow Button - PREVIOUS PAGE */}
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="absolute left-3 sm:left-6 z-30 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-xl backdrop-blur-md border border-stone-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 active:scale-95 group-hover:opacity-100"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-brand-dark" />
              </button>

              {/* Arrow Button - NEXT PAGE */}
              <button
                onClick={handleNext}
                disabled={currentPage === pages.length - 1}
                className="absolute right-3 sm:right-6 z-30 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-xl backdrop-blur-md border border-stone-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 active:scale-95 group-hover:opacity-100"
                aria-label="Next Page"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-brand-dark" />
              </button>

              {/* Animated Flipping Document Image */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={pageFlipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => setIsZoomed(true)}
                  className="w-full h-full flex items-center justify-center cursor-zoom-in p-2 sm:p-4"
                >
                  <img
                    src={pages[currentPage].img}
                    alt={`Jr. R.I.C.H. School Policy Page ${currentPage + 1}`}
                    className="max-h-[500px] sm:max-h-[640px] md:max-h-[760px] w-auto object-contain rounded-lg shadow-md border border-stone-200"
                  />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Bottom Book Pagination Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 px-2">
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 mx-auto">
                {pages.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => {
                      setDirection(idx > currentPage ? 1 : -1);
                      setCurrentPage(idx);
                    }}
                    className={`w-9 h-9 rounded-full text-xs font-bold transition-all flex items-center justify-center ${
                      currentPage === idx
                        ? 'bg-brand-gold text-stone-900 shadow-md scale-110'
                        : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
                    }`}
                  >
                    {p.num}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === pages.length - 1}
                className="px-5 py-2.5 rounded-full bg-brand-green hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Full-Screen Zoom Lightbox Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/90 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Header */}
            <div className="w-full max-w-5xl flex items-center justify-between text-white z-10">
              <div>
                <h4 className="font-serif text-lg font-bold text-amber-300">
                  {pages[currentPage].title}
                </h4>
                <p className="text-xs text-stone-400">Full Resolution Official Policy Document Page</p>
              </div>

              <button
                onClick={() => setIsZoomed(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Zoom"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image display */}
            <div className="my-auto max-w-4xl max-h-[80vh] overflow-auto flex items-center justify-center p-2">
              <img
                src={pages[currentPage].img}
                alt={`School Policy Page ${currentPage + 1} Full View`}
                className="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl bg-white p-2"
              />
            </div>

            {/* Footer controls inside Zoom */}
            <div className="flex items-center gap-4 text-white text-xs font-bold z-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <span className="font-mono text-amber-400">
                Page {currentPage + 1} of {pages.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === pages.length - 1}
                className="px-4 py-2 rounded-full bg-brand-green hover:bg-emerald-800 disabled:opacity-30 transition-colors flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
