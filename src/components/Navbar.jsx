import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sparkles, Send, FileText, ShieldCheck } from 'lucide-react';
import schoolLogoImg from '../assets/school_logo.jpg';
import trustLogoImg from '../assets/trust_logo.jpg';

export default function Navbar({ onOpenEnquiry, onOpenComingSoon, onOpenPolicy }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#programs' },
    { name: 'Facilities', href: '#facilities', comingSoon: true, title: 'Campus Facilities' },
    { name: 'Activities', href: '#activities' },
    { name: 'Faculty', href: '#faculty', comingSoon: true, title: 'Faculty & Educators' },
    { name: 'Gallery', href: '#gallery', comingSoon: true, title: 'Photo & Event Gallery' },
    { name: 'Policy', href: '#policy', isPolicy: true },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isPolicy) {
      e.preventDefault();
      onOpenPolicy();
      setMobileMenuOpen(false);
    } else if (link.comingSoon) {
      e.preventDefault();
      onOpenComingSoon(link.title);
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3.5 px-2 sm:px-4 pointer-events-none transition-all duration-500 ease-out">
      
      {/* Real Ultra-Transparent iOS Liquid Glass Floating Navigation Panel */}
      <div
        className={`pointer-events-auto w-[96vw] max-w-[1440px] mx-auto rounded-[20px] sm:rounded-[24px] transition-all duration-500 ease-out ${
          scrolled ? 'liquid-glass-panel-scrolled py-2 px-3 sm:px-5' : 'liquid-glass-panel py-2.5 px-3 sm:px-5'
        }`}
      >
        <div className="flex items-center justify-between gap-2 xl:gap-3 w-full">
          
          {/* Brand Logo & Compact Name Container (shrink-0) */}
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0">
            
            {/* OFFICIAL SCHOOL LOGO DISPLAYED AT THE STARTING BEFORE SCHOOL NAME */}
            <div className="relative bg-white/95 p-1 sm:p-1.5 rounded-xl shadow-sm border border-white/90 group-hover:scale-105 transition-transform duration-300 ease-out shrink-0 flex items-center gap-1.5">
              <img
                src={schoolLogoImg}
                alt="Jr. R.I.C.H. School Logo"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain rounded-lg block"
              />
              <img
                src={trustLogoImg}
                alt="Param Jyoti Foundation Trust Logo"
                title="Param Jyoti Foundation Unit"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain rounded-lg block border-l border-stone-200 pl-1.5 hidden sm:block"
              />
            </div>
            
            {/* Logo Text Block - Updated to "Jr. R.I.C.H. PRE-PRIMARY SCHOOL" */}
            <div className="flex flex-col justify-center select-none shrink-0">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-brand-dark group-hover:text-brand-green transition-colors leading-none whitespace-nowrap">
                Jr. R.I.C.H.
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-brand-gold tracking-wide uppercase leading-tight whitespace-nowrap mt-0.5">
                PRE-PRIMARY SCHOOL
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1.5 shrink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="px-2 2xl:px-3 py-1.5 text-xs 2xl:text-sm font-bold text-stone-900 hover:text-brand-green hover:bg-white/40 hover:-translate-y-0.5 rounded-full transition-all duration-300 ease-out flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span>{link.name}</span>
                {link.isPolicy && (
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded-md bg-emerald-100 text-brand-green font-bold">Doc</span>
                )}
                {link.comingSoon && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shrink-0" title="Coming Soon" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Button - Premium Floating Liquid CTA (shrink-0) */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenPolicy}
              className="px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/90 text-stone-800 border border-white/80 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              title="View Official School Policy Document"
            >
              <FileText className="w-3.5 h-3.5 text-brand-green" />
              <span>Policy Doc</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-brand-gold via-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-300 ease-out flex items-center gap-1.5 border border-white/50 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/95 animate-spin-slow shrink-0" />
              <span className="tracking-wide">Enquire Now</span>
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Actions (< xl breakpoint) */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm flex items-center gap-1 shrink-0"
            >
              <Send className="w-3 h-3" />
              <span>Enquire</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/70 backdrop-blur-md shadow-sm border border-white/80 text-stone-900 hover:text-brand-green focus:outline-none transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Liquid Glass Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/80 shadow-2xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="py-2 px-3 rounded-xl text-xs font-bold text-stone-900 hover:bg-white/60 hover:text-brand-green transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    {link.isPolicy && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold">
                        Official Doc
                      </span>
                    )}
                    {link.comingSoon && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-amber-100/80 text-amber-900 font-bold">
                        Soon
                      </span>
                    )}
                  </a>
                ))}
                <div className="pt-3 mt-1 border-t border-white/60 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPolicy();
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-50 text-amber-900 font-bold text-xs border border-amber-200"
                  >
                    <FileText className="w-4 h-4 text-brand-gold" />
                    <span>View School Policy Document</span>
                  </button>

                  <a
                    href="tel:+919972477742"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50/80 text-brand-green font-bold text-xs border border-emerald-100/80"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: +91 9972477742</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiry();
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-gold to-amber-500 text-white font-bold text-xs shadow-md text-center"
                  >
                    Admissions Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
