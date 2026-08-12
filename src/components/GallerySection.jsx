import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Sparkles, Lock } from 'lucide-react';

export default function GallerySection({ onOpenComingSoon }) {
  const sampleCategories = ['All Moments', 'Classroom Learning', 'Karate & Yoga', 'Art & Craft', 'Celebrations'];

  return (
    <section id="gallery" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Campus Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              School Gallery
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3">
              Capturing milestones of discovery, friendship, and achievements.
            </p>
          </motion.div>
        </div>

        {/* Category Pill Tabs Preview */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {sampleCategories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => onOpenComingSoon(`Gallery Category: ${cat}`)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                i === 0
                  ? 'bg-brand-green text-white shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Placeholder Experience */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-white/70 backdrop-blur-md border-2 border-dashed border-amber-200 text-center shadow-lg">
          
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-brand-gold flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
            Our School Gallery is Coming Soon
          </h3>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            We are curating official photography of our campus, classrooms, activities, and celebrations. Check back soon for our full interactive photo & video showcase.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-brand-gold animate-spin-slow" />
            <span>Grid • Masonry • Lightbox Views Prepared</span>
          </div>

        </div>

      </div>
    </section>
  );
}
