import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Music, Dumbbell, Zap, BookOpen, Heart, Sparkles } from 'lucide-react';

export default function ActivitiesSection({ onOpenComingSoon }) {
  const activities = [
    {
      title: 'Martial Arts & Karate',
      subtitle: 'Self-Defense, Focus & Discipline',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      description: 'Structured martial arts training building physical endurance, motor coordination, respect, and self-confidence.',
      tag: 'Co-Curricular',
      icon: Dumbbell
    },
    {
      title: 'Yoga & Asanas',
      subtitle: 'Flexibility, Mindfulness & Breathing',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
      description: 'Age-appropriate yoga poses and breathing exercises fostering inner balance, mental clarity, and body awareness.',
      tag: 'Wellness',
      icon: Heart
    },
    {
      title: 'Music Classes',
      subtitle: 'Vocal Melody, Rhythm & Harmony',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      description: 'Joyful music and vocal training cultivating auditory appreciation, rhythm awareness, and creative expression.',
      tag: 'Arts & Culture',
      icon: Music
    },
    {
      title: 'Mallakhamb Classes',
      subtitle: 'Traditional Gymnastics & Pole Balance',
      img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      description: 'Traditional Indian aerial gymnastics developing extraordinary core strength, agility, focus, and body control.',
      tag: 'Traditional Physical Art',
      icon: Zap
    },
    {
      title: 'Skating Classes',
      subtitle: 'Balance, Speed & Coordination',
      img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
      description: 'Exciting roller skating sessions enhancing balance, spatial reflexes, leg stamina, and athletic agility.',
      tag: 'Sports',
      icon: Activity
    },
    {
      title: 'Sanskrit Classes',
      subtitle: 'Vedic Chanting & Cultural Heritage',
      img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80',
      description: 'Enriching Sanskrit sloka recitation, phonetics, and moral storytelling connecting children to rich linguistic ethics.',
      tag: 'Language & Ethics',
      icon: BookOpen
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
              <span>06 — Co-Curricular Excellence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight">
              Co-Curricular & Activity Classes
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Karate, Yoga, Music, Mallakhamb, Skating, and Sanskrit modules fostering holistic physical development, cultural heritage, and mental focus.
          </p>
        </div>

        {/* 6 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, idx) => {
            const IconComponent = act.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => onOpenComingSoon(act.title)}
                className="bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                data-cursor="VIEW"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={act.img}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 bg-brand-gold text-stone-900 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase shadow-md">
                    {act.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-brand-green">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 space-y-2.5 grow">
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider block">
                    {act.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">{act.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
