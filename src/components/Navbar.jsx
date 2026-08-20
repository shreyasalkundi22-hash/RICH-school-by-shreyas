import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sparkles, Send, FileText, Facebook, Instagram } from 'lucide-react';
import schoolLogoImg from '../assets/school_logo.jpg';
import trustLogoImg from '../assets/trust_logo.jpg';

export default function Navbar({ onOpenEnquiry, onOpenComingSoon, onOpenPolicy }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const facebookUrl = "https://www.facebook.com/share/14m6gKtMfFV/";
  const instagramUrl = "https://www.instagram.com/";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

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
    { name: 'School Policy', href: '#policy', isPolicy: true },
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
      
      {/* Scroll Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-stone-200/30 overflow-hidden z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-gold via-brand-leafGreen to-brand-green"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Ultra-Transparent Floating Liquid Glass Navigation Panel */}
      <div
        className={`pointer-events-auto w-[96vw] max-w-[1440px] mx-auto rounded-[20px] sm:rounded-[24px] transition-all duration-500 ease-out ${
          scrolled ? 'liquid-glass-panel-scrolled py-2 px-3 sm:px-5 shadow-xl' : 'liquid-glass-panel py-2.5 px-3 sm:px-5'
        }`}
      >
        <div className="flex items-center justify-between gap-2 xl:gap-3 w-full">
          
          {/* Brand Logo Container + Social Icons at Start */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="#home" className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0">
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
              
              <div className="flex flex-col justify-center select-none shrink-0">
                <span className="font-cinzel font-extrabold text-sm sm:text-base lg:text-lg tracking-wider text-brand-dark group-hover:text-brand-green transition-colors leading-none whitespace-nowrap">
                  JR. RICH
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-brand-gold tracking-widest uppercase leading-tight whitespace-nowrap mt-0.5">
                  SCHOOL
                </span>
              </div>
            </a>

            {/* Social Logos at the Starting Header */}
            <div className="flex items-center gap-1.5 border-l border-stone-300/60 pl-2 shrink-0">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/80 hover:bg-blue-600 hover:text-white text-blue-600 border border-white shadow-sm transition-all duration-200"
                title="Official Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/80 hover:bg-pink-600 hover:text-white text-pink-600 border border-white shadow-sm transition-all duration-200"
                title="Official Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1.5 shrink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="relative px-2.5 2xl:px-3.5 py-1.5 text-xs 2xl:text-sm font-bold text-stone-900 hover:text-brand-green group transition-all duration-300 ease-out flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span>{link.name}</span>
                {link.comingSoon && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shrink-0" title="Coming Soon" />
                )}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenPolicy}
              className="px-3.5 py-1.5 rounded-full bg-white/60 hover:bg-white/90 text-stone-800 border border-white/80 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              title="View Official School Policies"
            >
              <FileText className="w-3.5 h-3.5 text-brand-green" />
              <span>Policies</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-brand-gold via-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-300 ease-out flex items-center gap-1.5 border border-white/50 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/95 animate-spin-slow shrink-0" />
              <span className="tracking-wide">Admission Enquiry</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
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

        {/* Mobile Liquid Glass Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/80 shadow-2xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                
                {/* Social Links inside Mobile Drawer */}
                <div className="flex items-center justify-between px-3 py-2 bg-stone-100/80 rounded-xl mb-1">
                  <span className="text-xs font-bold text-stone-600">Connect with Us:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-blue-600 text-white shadow-sm"
                    >
                      <Facebook className="w-3.5 h-3.5 fill-current" />
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-pink-600 text-white shadow-sm"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-stone-900 hover:bg-white/60 hover:text-brand-green transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    {link.isPolicy && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold">
                        Official Doc
                      </span>
                    )}
                  </a>
                ))}
                <div className="pt-3 mt-1 border-t border-stone-200 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPolicy();
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-50 text-amber-900 font-bold text-xs border border-amber-200"
                  >
                    <FileText className="w-4 h-4 text-brand-gold" />
                    <span>View School Policies</span>
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
                    Admission Enquiry
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
