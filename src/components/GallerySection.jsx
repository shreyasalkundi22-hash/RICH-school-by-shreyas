import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export default function GallerySection({ onOpenComingSoon }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Montessori Practical Exploration',
      category: 'Activities',
      img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-8 h-80 sm:h-96',
    },
    {
      id: 2,
      title: 'Classroom Storytelling Session',
      category: 'Learning',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-4 h-80 sm:h-96',
    },
    {
      id: 3,
      title: 'Karate & Physical Training',
      category: 'Sports',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-4 h-80 sm:h-96',
    },
    {
      id: 4,
      title: 'Art & Creative Craft Workshop',
      category: 'Activities',
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-8 h-80 sm:h-96',
    },
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#18181B] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Image className="w-3.5 h-3.5" />
              <span>08 — Visual Archives</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Full-Screen Gallery
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Activities', 'Learning', 'Sports'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? 'bg-brand-gold text-stone-900 shadow-lg'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setLightboxIndex(idx)}
              className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer group ${item.span}`}
              data-cursor="OPEN"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-300 tracking-wider block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-2xl flex flex-col items-center justify-between p-6"
          >
            <div className="w-full max-w-5xl flex items-center justify-between text-white z-10">
              <span className="font-serif font-bold text-lg text-amber-300">
                {filteredItems[lightboxIndex].title}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="my-auto max-w-4xl max-h-[80vh] flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>

            <div className="flex items-center gap-4 text-white text-xs font-bold z-10">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
              <span className="font-mono text-amber-400">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-full bg-brand-green hover:bg-emerald-800 transition-colors flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
