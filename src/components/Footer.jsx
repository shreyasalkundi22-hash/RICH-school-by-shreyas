import React from 'react';
import { MapPin, Phone, Mail, Navigation, Play, Heart, FileText, ShieldCheck } from 'lucide-react';
import schoolLogoImg from '../assets/school_logo.jpg';
import trustLogoImg from '../assets/trust_logo.jpg';

export default function Footer({ onOpenComingSoon, onReplayIntro, onOpenPolicy }) {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Our School', comingSoon: true, title: 'Our School Story' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#programs' },
    { name: 'School Policy Document', isPolicy: true },
    { name: 'Faculty', comingSoon: true, title: 'Faculty & Educators' },
    { name: 'Facilities', comingSoon: true, title: 'Campus Facilities' },
    { name: 'Gallery', comingSoon: true, title: 'School Gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Beside Ambika Aradhna Sakaria Bhavan Arihant Society Keshwapur Hubballi Karnataka'
  )}`;

  return (
    <footer className="bg-[#1C2518] text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-brand-gold">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-md">
                <img
                  src={schoolLogoImg}
                  alt="Jr. R.I.C.H. School Logo"
                  className="h-12 w-auto object-contain rounded-lg"
                />
                <img
                  src={trustLogoImg}
                  alt="Param Jyoti Foundation Trust Logo"
                  title="Param Jyoti Foundation Unit"
                  className="h-12 w-auto object-contain rounded-lg border-l border-stone-200 pl-2"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Jr. R.I.C.H.
                </span>
                <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase">
                  Pre-Primary School
                </span>
              </div>
            </div>

            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-sm mt-2">
              A joyful learning environment where curiosity grows, confidence shines and every child discovers the joy of learning. Rishabh Institute of Character Harvesting.
            </p>

            <div className="text-xs text-emerald-200/80 space-y-2 mt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Beside Ambika Aradhna (Sakaria) Bhavan, Arihant Society, Keshwapur, Hubballi, Karnataka
                </span>
              </p>
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-gold hover:underline font-semibold pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-4 pb-2 border-b border-emerald-800/80 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {links.map((link) => (
                <li key={link.name}>
                  {link.isPolicy ? (
                    <button
                      onClick={onOpenPolicy}
                      className="text-amber-300 hover:text-white font-bold transition-colors flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{link.name}</span>
                    </button>
                  ) : link.comingSoon ? (
                    <button
                      onClick={() => onOpenComingSoon(link.title)}
                      className="text-emerald-100/70 hover:text-brand-gold transition-colors flex items-center gap-1.5"
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] text-amber-300 font-mono">(Soon)</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-emerald-100/70 hover:text-brand-gold transition-colors block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-white mb-4 pb-2 border-b border-emerald-800/80 inline-block">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs text-emerald-100/80 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold" />
                <div className="flex flex-wrap gap-2">
                  <a href="tel:+919972477742" className="hover:text-white underline">+91 9972477742</a>
                  <span>•</span>
                  <a href="tel:+917019497751" className="hover:text-white underline">+91 7019497751</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+917676997407" className="hover:text-white underline">+91 7676997407</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:richschoolhubli@gmail.com" className="hover:text-white underline font-medium">
                  richschoolhubli@gmail.com
                </a>
              </div>
            </div>

            {/* Replay Intro Animation Toggle */}
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenPolicy}
                className="px-4 py-2.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-bold transition-all border border-amber-400/40 inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>View School Policy Document</span>
              </button>

              <button
                onClick={onReplayIntro}
                className="px-4 py-2 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 text-xs font-bold transition-all border border-emerald-700/60 inline-flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-200" />
                <span>Replay Intro Animation</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60 font-medium">
          <p>© Jr. R.I.C.H. Pre-Primary School (Param Jyoti Foundation Unit). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>for Hubballi’s Young Learners</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
