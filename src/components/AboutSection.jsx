import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Sparkles, ArrowRight, ShieldCheck, Heart, Users, Award } from 'lucide-react';
import trustLogoImg from '../assets/trust_logo.jpg';
import schoolLogoImg from '../assets/school_logo.jpg';

export default function AboutSection({ onOpenComingSoon, onOpenPolicy }) {
  const stats = [
    { label: 'Academic Levels', value: 'Play Home - 4th', icon: BookOpen },
    { label: 'Foundation Unit', value: 'Param Jyoti', icon: ShieldCheck },
    { label: 'Key Activities', value: 'Karate & Yoga', icon: Award },
    { label: 'Environment', value: 'CCTV Secured', icon: Heart },
  ];

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
                  alt="Jr. R.I.C.H. Preschool atmosphere"
                  className="w-full h-[450px] sm:h-[520px] object-cover"
                />
              </div>

              {/* Floating Trust Logo Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-stone-200 flex items-center gap-3.5 max-w-xs">
                <img src={trustLogoImg} alt="Param Jyoti Foundation Trust Logo" className="h-12 w-auto object-contain rounded-lg bg-stone-50 p-1" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">Param Jyoti Foundation</h4>
                  <p className="text-[11px] text-brand-green font-semibold">Shri Labdhi Chandrapuri Seva Samiti Trust</p>
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
              <div className="flex items-center gap-2 mb-4">
                <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block">
                  About Jr. R.I.C.H.
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-brand-green text-xs font-mono font-bold uppercase">
                  Moral Ethics + Modern Education
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
                Growing Curious Minds. Building Confident Futures.
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                <strong>Jr. R.I.C.H. Pre-Primary School</strong> (Rishabh Institute of Character Harvesting) provides a warm, stimulating learning community where every child receives attentive guidance to flourish academically, socially, and physically under the stewardship of the <strong>Param Jyoti Foundation</strong>.
              </p>

              {/* Verified Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-200/60 text-amber-900 mt-0.5 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Prime Campus</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Keshwapur, Hubballi, Karnataka</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-200/60 text-brand-green mt-0.5 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Grades Offered</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Play Home to 4th Std (Montessori + Primary)</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-200/60 text-brand-blue mt-0.5 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Holistic Care</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Academics + 6 Co-Curriculars</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-200/60 text-purple-800 mt-0.5 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">Verified Policies</h4>
                    <p className="text-xs text-stone-600 mt-0.5">CCTV, Food, Attire & Safety</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenComingSoon('About Our School & Founder Vision')}
                  className="px-7 py-3.5 rounded-full bg-brand-gold hover:bg-amber-600 text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Discover Our School</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenPolicy}
                  className="px-7 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs shadow-sm transition-all flex items-center gap-2 border border-stone-300"
                >
                  <span>Read School Policy Document</span>
                </button>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
