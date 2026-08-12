import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles, ChevronRight } from 'lucide-react';

export default function FacultySection({ onOpenComingSoon }) {
  return (
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              <span>Meet the People Behind the Learning</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Dedicated, Compassionate & Trained Educators
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed mb-8">
              Our faculty information is being prepared. Check back soon to meet the educators who help young minds grow with care, patience, and enthusiasm.
            </p>

            <button
              onClick={() => onOpenComingSoon('Faculty & Staff Directory')}
              className="px-8 py-4 rounded-full bg-brand-gold hover:bg-amber-500 text-brand-dark font-bold text-sm shadow-lg transition-all duration-200 inline-flex items-center gap-3"
            >
              <span>Faculty Profiles Coming Soon</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
