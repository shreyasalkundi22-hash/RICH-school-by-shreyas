import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, CompassIcon } from 'lucide-react';

export default function SchoolIntro() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl blob-shape-1 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl blob-shape-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Organic Image Frame */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  alt="Child exploring creative learning activities"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Accent Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-gradient-to-r from-brand-gold to-amber-500 text-white p-5 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold">Keshwapur, Hubballi</h4>
                    <p className="text-[11px] text-white/90">A safe & caring campus</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Leaf Icon */}
              <div className="absolute -top-6 -left-6 z-20 w-14 h-14 rounded-2xl bg-brand-softGreen text-brand-green flex items-center justify-center shadow-lg border border-emerald-200">
                <Heart className="w-7 h-7 fill-brand-green/20" />
              </div>

            </motion.div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>WELCOME TO JUNIOR R.I.C.H.</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
                A joyful beginning to a lifelong journey of learning.
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                Junior R.I.C.H. Pre-Primary School provides a nurturing environment where children can learn, explore, create and grow with confidence.
              </p>

              {/* Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-brand-gold mb-2" />
                  <h4 className="font-bold text-sm text-stone-800">Learn & Explore</h4>
                  <p className="text-xs text-stone-500 mt-1">Stimulating hands-on activities</p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-brand-leafGreen mb-2" />
                  <h4 className="font-bold text-sm text-stone-800">Create & Play</h4>
                  <p className="text-xs text-stone-500 mt-1">Fostering imagination</p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-sky-200 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-brand-blue mb-2" />
                  <h4 className="font-bold text-sm text-stone-800">Grow & Thrive</h4>
                  <p className="text-xs text-stone-500 mt-1">Building self-confidence</p>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
