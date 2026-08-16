import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, Award } from 'lucide-react';

export default function SchoolIntro() {
  return (
    <section className="py-24 bg-[#121611] text-stone-100 relative overflow-hidden">
      
      {/* Subtle Glowing Background Spheres */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Oversized Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>02 — School Statement</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Where curiosity becomes <span className="text-brand-gold italic">confidence.</span>
            </h2>

            <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl">
              At <strong>Jr. R.I.C.H. Pre-Primary School</strong>, early childhood education goes beyond memorization. We craft immersive environments where play, Montessori discovery, moral values, and physical activity flourish together.
            </p>
          </motion.div>

          {/* Right Column: Floating Pillar Chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">Nurturing Care</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Warm, caring teachers ensuring every child feels safe, valued, and encouraged.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">Moral Ethics</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Integrated character harvesting under the stewardship of Param Jyoti Foundation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 flex items-center justify-center text-sky-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">Montessori Method</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Hands-on sensory exploration fostering independent problem-solving skills.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-rose-400/20 flex items-center justify-center text-rose-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">Karate & Yoga</h3>
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
