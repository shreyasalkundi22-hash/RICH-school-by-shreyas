import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sprout, Star, BookOpen, Pencil, Sparkles, Phone, Mail } from 'lucide-react';

export default function ComingSoonModal({ isOpen, onClose, topicTitle, onOpenEnquiry }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-amber-100 overflow-hidden z-10 my-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Ambient Animation visuals */}
          <div className="flex justify-center mb-6 relative">
            
            {/* Glowing circle behind */}
            <div className="w-24 h-24 rounded-full bg-emerald-100/80 flex items-center justify-center relative">
              
              {/* Growing Sprout Icon */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-brand-green"
              >
                <Sprout className="w-12 h-12 stroke-[1.8]" />
              </motion.div>

              {/* Floating Orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <Star className="w-4 h-4 text-amber-400 absolute -top-1 left-2 fill-amber-300" />
                <Pencil className="w-4 h-4 text-sky-500 absolute top-2 -right-1" />
                <BookOpen className="w-4 h-4 text-emerald-600 absolute -bottom-1 right-3" />
              </motion.div>

            </div>

          </div>

          {/* Text Content */}
          <div className="text-center">
            
            {topicTitle && (
              <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider inline-block mb-3">
                {topicTitle}
              </span>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight mb-3">
              Something Wonderful Is Growing...
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              We're preparing this space with detailed official information about <strong>Junior R.I.C.H. Pre-Primary School</strong>. Please check back soon!
            </p>

            {/* Action buttons inside modal */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-full bg-brand-green hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Have Questions? Send Direct Enquiry</span>
              </button>

              <a
                href="tel:+919972477742"
                className="w-full py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Admissions: +91 9972477742</span>
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
