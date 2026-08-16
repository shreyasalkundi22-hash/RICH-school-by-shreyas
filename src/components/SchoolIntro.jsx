import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, Award } from 'lucide-react';

export default function SchoolIntro() {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      
      {/* Subtle Ambient Glowing Spheres */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Oversized Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Story & Vision</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Where curiosity becomes <span className="text-brand-gold italic">confidence.</span>
            </h2>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl">
              At <strong>Jr. R.I.C.H. Pre-Primary School</strong>, early childhood education goes beyond memorization. We craft immersive environments where play, Montessori discovery, moral values, and physical activity flourish together.
            </p>
          </motion.div>

          {/* Right Column: Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Nurturing Care</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Warm, caring teachers ensuring every child feels safe, valued, and encouraged.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Moral Ethics</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Integrated character harvesting under the stewardship of Param Jyoti Foundation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-400/20 flex items-center justify-center text-sky-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Montessori Method</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Hands-on sensory exploration fostering independent problem-solving skills.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-400/20 flex items-center justify-center text-rose-300">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Karate & Yoga</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Physical fitness, flexibility, mindfulness, and discipline integrated into weekly routines.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
