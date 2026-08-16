import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AdmissionsCTA({ onOpenEnquiry, onOpenComingSoon }) {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-brand-orange text-white relative overflow-hidden">
      
      {/* Ambient Light circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono font-bold uppercase tracking-wider"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>Academic Year 2026-27 Enrolment</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Ready to begin the journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-amber-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Give your child the gift of joyful learning, moral ethics, and holistic growth at <strong>Jr. R.I.C.H. Pre-Primary School</strong>, Keshwapur, Hubballi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onOpenEnquiry}
            className="px-9 py-4 rounded-full bg-white text-stone-900 font-bold text-sm shadow-2xl hover:bg-stone-100 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Submit Admission Enquiry</span>
          </button>

          <button
            onClick={() => onOpenComingSoon('Admission Criteria & Fee Details')}
            className="px-8 py-4 rounded-full bg-stone-900/40 hover:bg-stone-900/60 text-white border border-white/40 text-sm font-bold transition-all flex items-center gap-2"
          >
            <span>View Admission Criteria</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Micro Guarantee Badges */}
        <div className="pt-8 flex flex-wrap justify-center gap-6 text-xs text-amber-100 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-200" /> Play Home to 4th Std
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-200" /> Montessori & Moral Ethics
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-200" /> 6 Co-Curricular Activities
          </span>
        </div>

      </div>
    </section>
  );
}
