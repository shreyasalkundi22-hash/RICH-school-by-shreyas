import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles } from 'lucide-react';

export default function ActivitiesSection({ onOpenComingSoon }) {
  const activities = [
    {
      title: 'Martial Arts & Karate',
      subtitle: 'Self-Defense, Focus & Discipline',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      description: 'Structured martial arts training building physical endurance, motor coordination, respect, and self-confidence.',
      tag: 'Co-Curricular'
    },
    {
      title: 'Yoga & Asanas',
      subtitle: 'Flexibility, Mindfulness & Breathing',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
      description: 'Age-appropriate yoga poses and breathing exercises fostering inner balance, mental clarity, and body awareness.',
      tag: 'Wellness'
    }
  ];

  return (
    <section id="activities" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>06 — Co-Curricular Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight">
              Karate & Yoga Training
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Integrated physical development modules offered to foster stamina, discipline, and emotional balance from an early age.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => onOpenComingSoon(act.title)}
              className="bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              data-cursor="VIEW"
            >
              <div className="relative h-64 sm:h-76 overflow-hidden">
                <img
                  src={act.img}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-brand-gold text-stone-900 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase shadow-md">
                  {act.tag}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider block">
                  {act.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{act.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
