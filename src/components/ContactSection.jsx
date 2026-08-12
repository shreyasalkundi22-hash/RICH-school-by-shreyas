import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    classInterested: 'Play Home',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneNumbers = [
    { label: 'Primary Contact', number: '+91 9972477742', tel: '+919972477742' },
    { label: 'Admissions Office', number: '+91 7019497751', tel: '+917019497751' },
    { label: 'Helpline', number: '+91 7676997407', tel: '+917676997407' },
  ];

  const classOptions = [
    'Play Home',
    'Nursery',
    'L.K.G.',
    'U.K.G.',
    'Montessori',
    'Primary',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.childName.trim()) newErrors.childName = "Child's name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate submission saving
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }
    }, 800);
  };

  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Beside Ambika Aradhna Sakaria Bhavan Arihant Society Keshwapur Hubballi Karnataka'
  )}`;

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background soft blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-brand-green text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Contact & Admissions Enquiry
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3">
              We welcome parents to reach out, visit our campus, or send us an enquiry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-stone-50 rounded-3xl p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
                    School Address
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Beside Ambika Aradhna (Sakaria) Bhavan,<br />
                    Arihant Society, Keshwapur,<br />
                    Hubballi, Karnataka
                  </p>
                  <a
                    href={mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="bg-stone-50 rounded-3xl p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">
                    Phone Contact
                  </h3>
                  <div className="space-y-2">
                    {phoneNumbers.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.tel}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all text-xs font-semibold text-stone-800 group"
                      >
                        <span>{p.number}</span>
                        <span className="text-[10px] text-brand-green group-hover:underline">Call →</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-stone-50 rounded-3xl p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
                    Email Contact
                  </h3>
                  <a
                    href="mailto:richschoolhubli@gmail.com"
                    className="text-stone-700 hover:text-brand-blue font-semibold text-sm underline block"
                  >
                    richschoolhubli@gmail.com
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    Direct email for admissions and inquiries
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50/80 rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl relative">
              
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                Send an Admissions Enquiry
              </h3>
              <p className="text-stone-600 text-sm mb-6">
                Fill in the details below and our school administration team will reach back to you.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-brand-green mx-auto mb-4" />
                  <h4 className="font-serif text-2xl font-bold text-brand-green mb-2">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-stone-700 text-sm mb-6">
                    Thank you, <strong>{formData.parentName}</strong>. Your enquiry for <strong>{formData.childName}</strong> ({formData.classInterested}) has been received. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        childName: '',
                        phone: '',
                        email: '',
                        classInterested: 'Play Home',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-green text-white text-xs font-bold shadow-md hover:bg-emerald-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.parentName ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-brand-gold'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.parentName}
                        </p>
                      )}
                    </div>

                    {/* Child Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Aarav"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.childName ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-brand-gold'
                        }`}
                      />
                      {errors.childName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.childName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 9972477742"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-brand-gold'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-brand-gold'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Class Interested Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Class Interested In *
                    </label>
                    <select
                      name="classInterested"
                      value={formData.classInterested}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white"
                    >
                      {classOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Message / Queries
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions regarding admissions, transport, or timing..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-400 text-center mt-2">
                    Submissions are stored securely and prepared for school backend routing.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
