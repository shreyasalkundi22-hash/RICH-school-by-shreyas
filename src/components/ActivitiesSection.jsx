import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Sun, Palette, Music, Sparkles, ChevronRight } from 'lucide-react';

export default function ActivitiesSection({ onOpenComingSoon }) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F4F9F2] to-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl blob-shape-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-brand-green text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Co-Curricular Growth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Learning Beyond the Classroom
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-4">
              Enriched physical, mental, and creative activities designed to nurture well-rounded, energetic children.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Highlight 1: Karate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 fill-white/30" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  Physical Discipline
                </span>
                <h3 className="font-serif text-3xl font-bold text-brand-dark mt-1">Karate</h3>
              </div>
            </div>

            <p className="text-stone-600 text-base leading-relaxed mb-6">
              Building discipline, confidence, focus and physical coordination through age-appropriate martial arts training.
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold text-stone-700">Focus & Agility Training</span>
            </div>
          </motion.div>

          {/* Highlight 2: Yoga */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 hover:border-emerald-300 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-leafGreen text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sun className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Mindfulness & Health
                </span>
                <h3 className="font-serif text-3xl font-bold text-brand-dark mt-1">Yoga</h3>
              </div>
            </div>

            <p className="text-stone-600 text-base leading-relaxed mb-6">
              Encouraging balance, calmness, flexibility and mindful movement tailored for early childhood development.
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-leafGreen" />
              <span className="text-xs font-semibold text-stone-700">Breathwork & Flexibility</span>
            </div>
          </motion.div>

        </div>

        {/* Co-Curricular Additional Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-dashed border-emerald-200 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-brand-dark mb-2">
            Co-Curricular Activities
          </h4>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-6">
            We are expanding our arts, music, outdoor games, and expressive drama modules.
          </p>
          <button
            onClick={() => onOpenComingSoon('Co-Curricular Activities Schedule')}
            className="px-6 py-2.5 rounded-full bg-emerald-50 text-brand-green font-bold text-xs hover:bg-emerald-100 transition-colors inline-flex items-center gap-2"
          >
            <span>More activities coming soon</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
