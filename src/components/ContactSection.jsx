import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Sparkles, Navigation, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    program: 'Play Home',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback if confetti library script fails
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Beside Ambika Aradhna Sakaria Bhavan Arihant Society Keshwapur Hubballi Karnataka'
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-green text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Admissions Enquiry & Contact
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We invite you to visit our campus in Keshwapur, Hubballi or send an enquiry below. Our administrative staff will contact you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Visually Rich Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200 space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Campus Location
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-amber-100 text-brand-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Address</h4>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      Beside Ambika Aradhna (Sakaria) Bhavan, Arihant Society, Keshwapur, Hubballi, Karnataka
                    </p>
                    <a
                      href={mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-gold hover:underline font-bold mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-emerald-100 text-brand-green shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Phone Contact</h4>
                    <div className="flex flex-wrap gap-2 mt-1 font-semibold text-brand-green">
                      <a href="tel:+919972477742" className="hover:underline">+91 9972477742</a>
                      <span>•</span>
                      <a href="tel:+917019497751" className="hover:underline">+91 7019497751</a>
                    </div>
                    <a href="tel:+917676997407" className="block hover:underline font-semibold text-brand-green mt-1">
                      +91 7676997407
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-sky-100 text-brand-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Email Address</h4>
                    <a href="mailto:richschoolhubli@gmail.com" className="text-stone-600 hover:text-brand-blue font-medium mt-1 block">
                      richschoolhubli@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-purple-100 text-purple-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">School Hours</h4>
                    <p className="text-stone-600 mt-1">Monday – Friday: 9:00 AM – 3:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Glass Admissions Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-200 relative overflow-hidden">
              
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase text-brand-gold tracking-wider block">
                  Enrolment Form 2026-27
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  Send Admission Enquiry
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-stone-900">Enquiry Submitted!</h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.parentName}</strong>. We have received your enquiry for <strong>{formData.childName || 'your child'}</strong> ({formData.program}). Our admissions office will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        childName: '',
                        phone: '',
                        email: '',
                        program: 'Play Home',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-green text-white font-bold text-xs hover:bg-emerald-800 transition-colors inline-block mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9972477742"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Select Program / Grade *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all"
                    >
                      <option value="Play Home">Play Home (2 - 3 Years)</option>
                      <option value="Nursery">Nursery (3 - 4 Years)</option>
                      <option value="LKG">L.K.G. (4 - 5 Years)</option>
                      <option value="UKG">U.K.G. (5 - 6 Years)</option>
                      <option value="Montessori">Montessori Curriculum</option>
                      <option value="Primary 1st to 4th Std">Primary (1st to 4th Std)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Additional Message / Questions
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify any questions about transportation, timings, or policies..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-gold via-amber-500 to-amber-600 hover:from-amber-500 hover:to-brand-gold text-stone-900 font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry Application</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
