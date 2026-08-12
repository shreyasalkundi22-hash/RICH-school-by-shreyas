import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Activity, ShieldCheck, HeartHandshake, Sparkles, ChevronRight } from 'lucide-react';

export default function FacilitiesSection({ onOpenComingSoon }) {
  const facilities = [
    { title: 'Classrooms', icon: Building2 },
    { title: 'Learning Spaces', icon: BookOpen },
    { title: 'Activity Areas', icon: Activity },
    { title: 'Play & Recreation', icon: Sparkles },
    { title: 'Safety & Care', icon: ShieldCheck },
    { title: 'Other Facilities', icon: HeartHandshake },
  ];

  return (
    <section id="facilities" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Campus Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              School Facilities
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3">
              Designed for child safety, interactive learning, and cheerful exploration.
            </p>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onOpenComingSoon(`Facility: ${fac.title}`)}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-gold flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full inline-block">
                    Details Coming Soon
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-400 hover:text-brand-green">
                  <span>View Specifications</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
