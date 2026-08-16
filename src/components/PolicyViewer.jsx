import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, XCircle, Search, ChevronLeft, ChevronRight, Download, Printer, ShieldCheck, Heart, Sparkles, X } from 'lucide-react';
import schoolLogoImg from '../assets/school_logo.jpg';
import trustLogoImg from '../assets/trust_logo.jpg';

export default function PolicyViewer({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const pages = [
    {
      pageNumber: 1,
      title: "Initial Days, Drop-off, Food & Attire",
      sections: [
        {
          num: "1. Initial Days",
          dos: [
            "Aim to settle children comfortably without disturbing others. Attendance starts at 1 hour and increases to full days over 2 weeks.",
            "Activities the child enjoys (art, music, sand play, outdoor games) are introduced first to accelerate adjustment.",
            "Parents' co-operation is requested to help the child settle quickly."
          ],
          donts: [
            "Do not linger after dropping off the child, as knowing you are nearby causes disturbance.",
            "Avoid prolonged farewells at drop-off; a quick, reassuring goodbye is most effective."
          ]
        },
        {
          num: "2. Drop off and Pick up",
          dos: [
            "Hand over the child directly to designated school staff.",
            "Greet children affectionately at pick-up time.",
            "Parents/Guardians MUST show their Guardian ID card when picking up children.",
            "Escorts without an ID card require a signed permission letter and advance notice with a secret OTP code from the registered phone."
          ],
          donts: [
            "Do not speak on mobile phones or leave abruptly at the gate.",
            "Avoid loud conversations outside school premises during drop-off or pick-up."
          ]
        },
        {
          num: "3. Food Guidelines",
          dos: [
            "Provide packed healthy snacks (chapatis, fresh fruits, dosa, upma, sandwiches cut into small manageable pieces).",
            "Portions should match the child's appetite. Aqua-Guard purified water is provided, or send a labelled water bottle."
          ],
          donts: [
            "Chips, fizzy drinks, and Maggi are strictly prohibited.",
            "No junk food allowed. Food sharing among children is discouraged due to varying dietary needs and allergies."
          ]
        },
        {
          num: "4. Attire & Belongings",
          dos: [
            "Dress children in loose-fitting, comfortable clothes and easy-to-wear shoes fostering self-reliance.",
            "Send 2 emergency changes of clothing (replace soiled clothes the next day).",
            "Clearly label all belongings (bags, water bottles, extra clothes) with the child's name."
          ],
          donts: [
            "Avoid clothes or footwear that are difficult for children to manage independently."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      title: "Illness, Toilet Training, Celebrations & Visitors",
      sections: [
        {
          num: "5. Illness & Medical Care",
          dos: [
            "School administers long-term medicine based on written parent instructions. Inform school promptly of illness.",
            "Medical reports must be submitted for long leaves. First aid treatment is administered immediately in emergencies."
          ],
          donts: [
            "Do NOT send sick children to school with fever, diarrhea, or contagious illnesses (viral fever, typhoid, etc.)."
          ]
        },
        {
          num: "6. Toilet Training",
          dos: [
            "Assistance is provided for children 2+ years during toilet training, with parents taking primary responsibility."
          ],
          donts: [
            "Diapers are discouraged at school unless necessary for verified medical reasons."
          ]
        },
        {
          num: "7. Birthdays & Celebrations",
          dos: [
            "Celebrate birthdays by prior appointment. Distribute child-safe stationery or plant saplings instead of chocolates/sweets.",
            "Children participate in inclusive cultural celebrations respecting all sentiments."
          ],
          donts: [
            "Elaborate celebrations at school are not encouraged to prevent unequal expectations among children."
          ]
        },
        {
          num: "8. Visitors & CCTV Observation",
          dos: [
            "Parents are invited to visit & observe classrooms 2–3 times a year. CCTV access is provided to observe children naturally."
          ],
          donts: [
            "Avoid calling frequently for minor concerns. Trained professionals continuously supervise safety."
          ]
        },
        {
          num: "9. School Property",
          dos: [
            "Promptly return any school materials children accidentally bring home in their pockets or bags."
          ],
          donts: [
            "No personal toys or play materials from home are allowed in the school environment."
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      title: "Field Trips, Safety, Teachers & Assessment",
      sections: [
        {
          num: "Injury & Accidents",
          content: "First aid is administered immediately. If required, children are taken to the nearest medical doctor without delay."
        },
        {
          num: "Field Trips & Outings",
          content: "Educational visits to museums, national parks, and zoos are conducted with full precautions. Students must wear full school uniforms and carry school bags."
        },
        {
          num: "Continuous Assessment",
          content: "Continuous evaluation tracks physical, cognitive, and social development. Regular progress reports are shared with parents."
        },
        {
          num: "Qualified Teachers & Ratio",
          content: "Staff are trained in child care and holistic Montessori presentation. Healthy student-teacher ratios ensure individualized attention."
        },
        {
          num: "Emergency Procedures",
          content: "Parents are notified via phone/text during emergencies or unexpected city shutdowns. Emergency contacts on admission forms are utilized."
        },
        {
          num: "Discipline & Decorum",
          content: "Curriculum structures foster self-discipline. Teachers model positive behavior, respect, and emotional maturity."
        },
        {
          num: "Holidays & Attendance",
          content: "Operates Monday to Friday. Vacations should align with the annual holiday calendar. Absence must be communicated in advance."
        },
        {
          num: "Campus Safety & Security",
          content: "All gates and latches remain locked during school hours. Smoking is strictly prohibited on campus."
        },
        {
          num: "Parent Communication",
          content: "Regular diary notes, emails, and Parent-Teacher Meetings (PTMs) keep lines of communication open."
        }
      ]
    },
    {
      pageNumber: 4,
      title: "Home Environment & Core Educational Values",
      sections: [
        {
          num: "Home Guidelines for Parents",
          guidelines: [
            "Encourage independence: allow children to pour water, feed themselves, and organize their belongings.",
            "Be role models: demonstrate habits like putting slippers neatly on shoe racks before asking children to do so.",
            "Maintain consistent routines: fixed sleep, meal, and play timings prevent disorientation.",
            "Reduce screen & technology time: tablets/mobiles hinder early attention spans. Limit exposure to educational songs/music.",
            "Structured language phonetics: avoid premature ABC rote learning at home. Emphasize reading aloud and storytelling."
          ]
        },
        {
          num: "School Commitments & Core Motto",
          quotes: [
            "WE WISH YOU AND YOUR CHILD AN ENJOYABLE AND FULFILLING EXPERIENCE AT OUR SCHOOL.",
            "WE CHERISH OUR CHILDREN'S SENSE OF WONDER, CURIOSITY, AND EAGERNESS TO LEARN.",
            "REMEMBER, EXCELLENCE IS AN ATTITUDE, NOT JUST A SKILL."
          ]
        }
      ]
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-900/70 backdrop-blur-lg">
        
        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col max-h-[90vh]"
        >
          
          {/* Top Header Bar */}
          <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white p-5 sm:p-6 flex items-center justify-between shrink-0 border-b border-amber-400/30">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl backdrop-blur-md">
                <img src={schoolLogoImg} alt="Jr. R.I.C.H. Logo" className="h-9 w-auto object-contain bg-white rounded-lg p-0.5" />
                <img src={trustLogoImg} alt="Param Jyoti Foundation" className="h-9 w-auto object-contain bg-white rounded-lg p-0.5 hidden sm:block" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Jr. R.I.C.H. School Policy Document</span>
                  <span className="text-[10px] bg-amber-400 text-stone-900 font-mono px-2 py-0.5 rounded-full font-bold uppercase">Official</span>
                </h3>
                <p className="text-xs text-emerald-200/80">Param Jyoti Foundation • Hubballi, Karnataka</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-colors"
                title="Print Document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Page Tabs Header */}
          <div className="bg-stone-100 border-b border-stone-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {pages.map((p) => (
                <button
                  key={p.pageNumber}
                  onClick={() => setCurrentPage(p.pageNumber)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    currentPage === p.pageNumber
                      ? 'bg-brand-green text-white shadow-md'
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Page {p.pageNumber}</span>
                </button>
              ))}
            </div>

            <span className="text-xs font-semibold text-stone-500 hidden sm:block">
              Page {currentPage} of 4 • {pages[currentPage - 1].title}
            </span>
          </div>

          {/* Page Body Content Container */}
          <div className="p-6 sm:p-8 overflow-y-auto grow space-y-6 bg-stone-50/50">
            
            {/* Page 1 */}
            {currentPage === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="border-b border-amber-200 pb-3">
                  <h4 className="font-serif text-xl font-bold text-stone-900">1. Initial Days, Drop off, Pick up, Food & Attire Guidelines</h4>
                  <p className="text-xs text-stone-500 mt-1">Essential operational procedures for smooth daily routine adaptation.</p>
                </div>

                {pages[0].sections.map((sec, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
                    <h5 className="font-serif text-lg font-bold text-brand-green flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                      <span>{sec.num}</span>
                    </h5>

                    {sec.dos && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                          Do's
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                          {sec.dos.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.donts && (
                      <div className="space-y-2 pt-2 border-t border-stone-100">
                        <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md inline-block">
                          Don'ts
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                          {sec.donts.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Page 2 */}
            {currentPage === 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="border-b border-amber-200 pb-3">
                  <h4 className="font-serif text-xl font-bold text-stone-900">2. Illness, Toilet Training, Celebrations & Observations</h4>
                  <p className="text-xs text-stone-500 mt-1">Health protocols, campus observations, and celebration guidelines.</p>
                </div>

                {pages[1].sections.map((sec, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
                    <h5 className="font-serif text-lg font-bold text-brand-green flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                      <span>{sec.num}</span>
                    </h5>

                    {sec.dos && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                          Do's
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                          {sec.dos.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.donts && (
                      <div className="space-y-2 pt-2 border-t border-stone-100">
                        <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md inline-block">
                          Don'ts
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                          {sec.donts.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Page 3 */}
            {currentPage === 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="border-b border-amber-200 pb-3">
                  <h4 className="font-serif text-xl font-bold text-stone-900">3. Field Trips, Safety, Teachers & Assessment</h4>
                  <p className="text-xs text-stone-500 mt-1">Holistic academic framework, safety measures, and teacher responsibilities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pages[2].sections.map((sec, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                      <h5 className="font-bold text-sm text-brand-dark mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-brand-green" />
                        <span>{sec.num}</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Page 4 */}
            {currentPage === 4 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="border-b border-amber-200 pb-3">
                  <h4 className="font-serif text-xl font-bold text-stone-900">4. Home Environment & Core Educational Motto</h4>
                  <p className="text-xs text-stone-500 mt-1">Nurturing home habits and core school philosophy.</p>
                </div>

                {/* Home Guidelines */}
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
                  <h5 className="font-serif text-lg font-bold text-brand-green flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />
                    <span>Home Environment Guidelines for Parents</span>
                  </h5>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    {pages[3].sections[0].guidelines.map((g, i) => (
                      <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-stone-50">
                        <span className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Declarations */}
                <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-brand-orange text-white rounded-2xl p-6 shadow-xl space-y-4 text-center">
                  <h5 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                    Our Motto & Promise to Every Child
                  </h5>
                  <div className="space-y-3 max-w-2xl mx-auto">
                    {pages[3].sections[1].quotes.map((q, i) => (
                      <div key={i} className="p-3 bg-white/15 backdrop-blur-md rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wide">
                        "{q}"
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Bottom Pagination Controls */}
          <div className="bg-white border-t border-stone-200 px-6 py-4 flex items-center justify-between shrink-0">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>

            <span className="text-xs font-mono font-bold text-stone-600">
              Page {currentPage} / 4
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 4))}
              disabled={currentPage === 4}
              className="px-4 py-2 rounded-full bg-brand-green hover:bg-emerald-800 text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
