import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Sparkles } from 'lucide-react';

export default function FacultySection({ onOpenComingSoon }) {
  return (
    <section id="faculty" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Educators</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Our Caring Faculty
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Trained in early childhood pedagogy, Montessori presentations, and gentle student guidance to ensure every child thrives in a caring environment.
          </p>
        </div>

        {/* Coming Soon Interactive Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div
            onClick={() => onOpenComingSoon('Early Childhood Educators Profile')}
            className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer space-y-4 text-center group"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Heart className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Pre-Primary Educators</h3>
              <p className="text-xs text-brand-green font-semibold mt-1">Montessori & Play Home Specialists</p>
            </div>
            <p className="text-xs text-stone-500">Trained in phonetics, child psychology, and sensory materials presentation.</p>
          </div>

          <div
            onClick={() => onOpenComingSoon('Co-Curricular Instructors Profile')}
            className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer space-y-4 text-center group"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
              <Award className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Karate & Yoga Instructors</h3>
              <p className="text-xs text-brand-green font-semibold mt-1">Physical Fitness & Discipline</p>
            </div>
            <p className="text-xs text-stone-500">Certified martial arts masters and yoga practitioners guiding weekly physical development.</p>
          </div>

          <div
            onClick={() => onOpenComingSoon('Primary Academic Staff')}
            className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer space-y-4 text-center group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
              <Sparkles className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Primary Academic Staff</h3>
              <p className="text-xs text-brand-green font-semibold mt-1">1st to 4th Standard Teachers</p>
            </div>
            <p className="text-xs text-stone-500">Subject matter experts fostering mathematical fluency, science curiosity, and moral ethics.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
