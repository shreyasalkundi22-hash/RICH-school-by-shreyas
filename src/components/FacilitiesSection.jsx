import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ShieldCheck, Sparkles, Building, Waves } from 'lucide-react';

export default function FacilitiesSection({ onOpenComingSoon }) {
  const facilities = [
    {
      title: 'Montessori Practical Life Hub',
      category: 'Sensorial & Cognitive Tools',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-7 h-72 sm:h-80',
    },
    {
      title: 'CCTV Monitored Safety System',
      category: '24/7 Security & Observation',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-5 h-72 sm:h-80',
    },
    {
      title: 'Aqua-Guard Purified Drinking Water',
      category: 'Hygienic Hydration Station',
      img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-5 h-72 sm:h-80',
    },
    {
      title: 'Karate & Yoga Training Studio',
      category: 'Physical Education & Discipline',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-7 h-72 sm:h-80',
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-green text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>Campus Infrastructure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Facilities & Environment
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Safe, clean, and stimulating facilities designed to support physical health, safety, and cognitive exploration.
          </p>
        </div>

        {/* Masonry Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onOpenComingSoon(fac.title)}
              className={`relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 cursor-pointer group ${fac.span}`}
              data-cursor="VIEW"
            >
              <img
                src={fac.img}
                alt={fac.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />

              {/* Glass Tag Label */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1 group-hover:bg-white/20 transition-colors">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-300 tracking-widest block">
                  {fac.category}
                </span>
                <h3 className="font-serif text-xl font-bold">{fac.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
