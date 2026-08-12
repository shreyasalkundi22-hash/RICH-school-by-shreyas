import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Smile, BookOpen, GraduationCap, Shapes, Sparkles, ChevronRight } from 'lucide-react';

export default function ProgramsSection({ onOpenComingSoon }) {
  const programs = [
    {
      name: 'Play Home',
      icon: Baby,
      age: '2 - 3 Years',
      color: 'from-amber-400 to-amber-500',
      badgeBg: 'bg-amber-100 text-amber-800',
      description: 'Sensory exploration, social interplay, and playful motor skill development in a gentle, warm setting.',
    },
    {
      name: 'Nursery',
      icon: Smile,
      age: '3 - 4 Years',
      color: 'from-emerald-400 to-emerald-600',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      description: 'Building early language skills, creative arts, active listening, and basic numerical concepts through play.',
    },
    {
      name: 'L.K.G.',
      icon: BookOpen,
      age: '4 - 5 Years',
      color: 'from-sky-400 to-blue-600',
      badgeBg: 'bg-sky-100 text-sky-800',
      description: 'Phonics foundation, guided reading readiness, early math blocks, and expressive storytelling.',
    },
    {
      name: 'U.K.G.',
      icon: GraduationCap,
      age: '5 - 6 Years',
      color: 'from-orange-400 to-rose-500',
      badgeBg: 'bg-orange-100 text-orange-800',
      description: 'Strengthening literacy, problem-solving confidence, logical reasoning, and structured daily routines.',
    },
    {
      name: 'Montessori',
      icon: Shapes,
      age: 'Child-Centered',
      color: 'from-purple-400 to-indigo-600',
      badgeBg: 'bg-purple-100 text-purple-800',
      description: 'Self-directed learning materials, tactile exploration, independent problem solving, and focused discovery.',
    },
    {
      name: 'Primary (Up to 4th Standard)',
      icon: Sparkles,
      age: 'Grades 1st to 4th',
      color: 'from-teal-400 to-emerald-700',
      badgeBg: 'bg-teal-100 text-teal-800',
      description: 'Comprehensive academic grounding combined with physical education, karate, yoga, and character building.',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Academic Levels & Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Learning That Grows With Them
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3">
              From early toddler curiosity to foundational primary grades, our tailored environments foster confidence at every step.
            </p>
          </motion.div>

          <button
            onClick={() => onOpenComingSoon('Full Curriculum & Syllabus')}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>Curriculum Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => onOpenComingSoon(`${program.name} Program Details`)}
                className="group cursor-pointer bg-stone-50/70 hover:bg-white rounded-3xl p-7 border-2 border-stone-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${program.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.badgeBg}`}>
                      {program.age}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-green transition-colors mb-3">
                    {program.name}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>

                {/* Coming Soon / More Info Notice */}
                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-stone-500 group-hover:text-brand-green transition-colors">
                  <span>More information coming soon</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
