import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, ArrowRight, HelpCircle } from 'lucide-react';

export default function AdmissionsCTA({ onOpenEnquiry, onOpenComingSoon }) {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Admissions 2026 - 2027</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Begin Their Journey?
          </h2>

          <p className="text-amber-50 text-base sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Give your child a joyful and nurturing beginning to their learning journey at Junior R.I.C.H. Pre-Primary School.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-amber-900 font-bold text-base shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Enquire About Admissions</span>
            </button>

            <a
              href="tel:+919972477742"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-base shadow-lg border border-emerald-700/60 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-emerald-300" />
              <span>Call the School</span>
            </a>
          </div>

          {/* Admission details coming soon note */}
          <div className="inline-flex items-center gap-2 text-xs text-amber-100 font-medium bg-black/10 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-amber-200" />
            <span>Detailed fee structures and guidelines: </span>
            <button 
              onClick={() => onOpenComingSoon('Admission Guidelines & Fee Structure')}
              className="underline font-bold hover:text-white"
            >
              Admission details coming soon
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
