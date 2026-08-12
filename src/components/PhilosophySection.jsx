import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award, Rocket, Sparkles, Star } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      title: 'BELIEVE',
      color: 'gold',
      bgClass: 'hover:bg-amber-500/10 hover:border-amber-400',
      badgeBg: 'bg-amber-100 text-amber-900',
      accentColor: '#F5B025',
      icon: Compass,
      description: 'We encourage every child to believe in themselves, explore their interests and discover their unique strengths.',
    },
    {
      title: 'ACHIEVE',
      color: 'green',
      bgClass: 'hover:bg-emerald-500/10 hover:border-emerald-400',
      badgeBg: 'bg-emerald-100 text-emerald-900',
      accentColor: '#4E7C38',
      icon: Award,
      description: 'Through joyful learning and meaningful activities, children are encouraged to develop skills, confidence and curiosity.',
    },
    {
      title: 'SUCCEED',
      color: 'orange',
      bgClass: 'hover:bg-orange-500/10 hover:border-orange-400',
      badgeBg: 'bg-orange-100 text-orange-900',
      accentColor: '#EE6C4D',
      icon: Rocket,
      description: 'We help children build a strong foundation for their future through academics, activities and positive experiences.',
    },
  ];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      
      {/* Decorative Floating shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <Star className="absolute top-12 left-10 text-amber-300 opacity-50 w-8 h-8 animate-spin-slow" />
        <Sparkles className="absolute bottom-16 right-12 text-emerald-300 opacity-50 w-10 h-10 animate-pulse-subtle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-100/80 text-brand-green text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Our Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Building Confidence, Curiosity & Excellence
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-4">
              Our foundational pillars guide every lesson, activity, and interaction at Junior R.I.C.H.
            </p>
          </motion.div>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-stone-100 transition-all duration-300 flex flex-col justify-between overflow-hidden ${pillar.bgClass}`}
              >
                {/* Accent Blob inside card */}
                <div 
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: pillar.accentColor }}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ backgroundColor: `${pillar.accentColor}15`, color: pillar.accentColor }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <span className={`text-xs font-bold tracking-widest px-3 py-1 rounded-full ${pillar.badgeBg}`}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight mb-4 group-hover:text-brand-green transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Card Micro-interaction indicator */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 group-hover:text-stone-700 transition-colors">
                    Empowering Children
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    style={{ backgroundColor: pillar.accentColor, color: '#fff' }}
                  >
                    →
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
