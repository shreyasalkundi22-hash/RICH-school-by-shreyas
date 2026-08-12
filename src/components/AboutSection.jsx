import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AboutSection({ onOpenComingSoon }) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Image Visual */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Rounded Image with Border Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-50">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="Junior R.I.C.H. Preschool atmosphere"
                  className="w-full h-[450px] sm:h-[520px] object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-brand-leafGreen to-emerald-700 text-white p-6 rounded-3xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-2xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold">Safe & Nurturing</h4>
                    <p className="text-xs text-white/90">Dedicated to child happiness</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                About Junior R.I.C.H.
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
                Growing Curious Minds. Building Confident Futures.
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                Junior R.I.C.H. Pre-Primary School provides a warm, stimulating learning community where every child receives attentive guidance to flourish academically, socially, and physically.
              </p>

              {/* Verified Details Grid */}
              <div className="space-y-4 mb-8">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="p-2.5 rounded-xl bg-amber-200/60 text-amber-900 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Prime Location</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Keshwapur, Hubballi, Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <div className="p-2.5 rounded-xl bg-emerald-200/60 text-brand-green mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Offered Levels</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Play Home to 4th Standard (Montessori + Primary)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
                  <div className="p-2.5 rounded-xl bg-sky-200/60 text-brand-blue mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Holistic Approach</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Academics + Co-curricular development (Karate & Yoga)</p>
                  </div>
                </div>

              </div>

              {/* Discover Button */}
              <button
                onClick={() => onOpenComingSoon('About Our School & Founder Vision')}
                className="px-8 py-4 rounded-full bg-brand-gold hover:bg-amber-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 group"
              >
                <span>Discover Our School</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
