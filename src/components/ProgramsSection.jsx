import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

export default function ProgramsSection({ onOpenComingSoon }) {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      num: '01',
      title: 'Play Home',
      subtitle: 'Early Exploration & Joyful Discovery',
      age: '2 – 3 Years',
      img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
      description: 'A gentle introduction to learning through tactile play, sensory discovery, music, and motor development in a safe, loving environment.',
      highlights: ['Tactile Play & Craft', 'Social Interaction', 'Music & Rhymes', 'Safe Environment']
    },
    {
      num: '02',
      title: 'Nursery',
      subtitle: 'Foundational Communication & Social Skills',
      age: '3 – 4 Years',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
      description: 'Fostering language development, early phonetics, vocabulary expansion, curiosity, and creative expression.',
      highlights: ['Phonetics & Reading', 'Creative Drawing', 'Storytelling', 'Group Activities']
    },
    {
      num: '03',
      title: 'L.K.G. (Lower Kindergarten)',
      subtitle: 'Cognitive Growth & Pre-Writing Skills',
      age: '4 – 5 Years',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      description: 'Developing reading readiness, number concepts, fine motor precision, and structured interactive learning routines.',
      highlights: ['Pre-Writing Drills', 'Number Concepts', 'Environmental Studies', 'Confidence Building']
    },
    {
      num: '04',
      title: 'U.K.G. (Upper Kindergarten)',
      subtitle: 'Primary Readiness & Independent Problem Solving',
      age: '5 – 6 Years',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
      description: 'Preparing children for formal primary schooling with fluent reading, basic math, logical reasoning, and teamwork.',
      highlights: ['Fluent Phonics', 'Addition Basics', 'Science Experiments', 'Primary Transition']
    },
    {
      num: '05',
      title: 'Montessori Curriculum',
      subtitle: 'Self-Directed Learning & Practical Life Skills',
      age: '2 – 6 Years',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      description: 'Specially designed Montessori apparatus guiding children to master self-correction, concentration, and practical life skills.',
      highlights: ['Practical Life Tools', 'Sensorial Materials', 'Self-Correction', 'Concentration Drills']
    },
    {
      num: '06',
      title: 'Primary (Up to 4th Std)',
      subtitle: 'Comprehensive Academic Excellence & Ethics',
      age: '6 – 10 Years',
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
      description: 'Rigorous primary academic curriculum coupled with moral character harvesting, Karate, Yoga, and analytical thinking.',
      highlights: ['Core Subjects Mastery', 'Karate & Physical Ed', 'Moral Ethics', 'Leadership Skills']
    }
  ];

  return (
    <section id="programs" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Programs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Learning Pathways
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Hover or click on any program below to reveal detailed curriculum highlights and age-specific learning objectives.
          </p>
        </div>

        {/* Magazine-style Split Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Program List */}
          <div className="lg:col-span-6 space-y-3">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.num}
                onClick={() => setActiveProgram(idx)}
                onMouseEnter={() => setActiveProgram(idx)}
                className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeProgram === idx
                    ? 'bg-white border-brand-gold shadow-xl scale-[1.01]'
                    : 'bg-white/60 border-stone-200 hover:bg-white hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xl sm:text-2xl font-bold ${
                      activeProgram === idx ? 'text-brand-gold' : 'text-stone-400'
                    }`}>
                      {prog.num}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">{prog.subtitle}</p>
                    </div>
                  </div>

                  <span className={`p-2 rounded-full transition-transform ${
                    activeProgram === idx ? 'bg-brand-gold text-stone-900 rotate-45' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Active Program Magazine Reveal Tile */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6"
              >
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={programs[activeProgram].img}
                    alt={programs[activeProgram].title}
                    className="w-full h-full object-cover"
                    data-cursor="VIEW"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-stone-900 shadow-md">
                    Age: {programs[activeProgram].age}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider block mb-1">
                    Program {programs[activeProgram].num} Showcase
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                    {programs[activeProgram].title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {programs[activeProgram].description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-3 border-t border-stone-100">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                    Curriculum Highlights:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {programs[activeProgram].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenComingSoon(`${programs[activeProgram].title} Full Syllabus & Timetable`)}
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-brand-green text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Syllabus Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
