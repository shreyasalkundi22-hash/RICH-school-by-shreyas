import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SchoolIntro from './components/SchoolIntro';
import PhilosophySection from './components/PhilosophySection';
import ProgramsSection from './components/ProgramsSection';
import ActivitiesSection from './components/ActivitiesSection';
import AboutSection from './components/AboutSection';
import FacilitiesSection from './components/FacilitiesSection';
import FacultySection from './components/FacultySection';
import GallerySection from './components/GallerySection';
import SchoolPoliciesSection from './components/SchoolPoliciesSection';
import AdmissionsCTA from './components/AdmissionsCTA';
import ContactSection from './components/ContactSection';
import ComingSoonModal from './components/ComingSoonModal';
import Footer from './components/Footer';

export default function App() {
  const [replayKey, setReplayKey] = useState(0);
  const [comingSoonModal, setComingSoonModal] = useState({
    isOpen: false,
    topic: ''
  });

  const handleOpenComingSoon = (topicTitle = 'Special Feature') => {
    setComingSoonModal({
      isOpen: true,
      topic: topicTitle
    });
  };

  const handleCloseComingSoon = () => {
    setComingSoonModal({
      isOpen: false,
      topic: ''
    });
  };

  const handleOpenPolicy = () => {
    const policyElement = document.getElementById('policy');
    if (policyElement) {
      policyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('junior_rich_intro_seen');
    setReplayKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark relative font-sans selection:bg-brand-gold selection:text-white">
      
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 1. Fullscreen Intro Animation */}
      <IntroAnimation key={replayKey} forceReplay={replayKey > 0} />

      {/* 2. Liquid Glass Header / Navbar */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenComingSoon={handleOpenComingSoon}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Main Content Sections */}
      <main>
        {/* 3. Cinematic Hero Section */}
        <HeroSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenComingSoon={handleOpenComingSoon}
          onOpenPolicy={handleOpenPolicy}
        />

        {/* 4. Quick School Intro */}
        <SchoolIntro />

        {/* 5. Learning Philosophy */}
        <PhilosophySection />

        {/* 6. Academic Programs */}
        <ProgramsSection onOpenComingSoon={handleOpenComingSoon} />

        {/* 7. Activities (Karate & Yoga) */}
        <ActivitiesSection onOpenComingSoon={handleOpenComingSoon} />

        {/* 8. Editorial About School */}
        <AboutSection
          onOpenComingSoon={handleOpenComingSoon}
          onOpenPolicy={handleOpenPolicy}
        />

        {/* 9. Facilities Section */}
        <FacilitiesSection onOpenComingSoon={handleOpenComingSoon} />

        {/* 10. Faculty Banner */}
        <FacultySection onOpenComingSoon={handleOpenComingSoon} />

        {/* 11. School Gallery */}
        <GallerySection onOpenComingSoon={handleOpenComingSoon} />

        {/* 12. School Policies Section (DISPLAYED BEFORE ADMISSIONS & CONTACT WITH PAGE TURN ANIMATIONS) */}
        <SchoolPoliciesSection />

        {/* 13. Admissions CTA */}
        <AdmissionsCTA
          onOpenEnquiry={handleOpenEnquiry}
          onOpenComingSoon={handleOpenComingSoon}
        />

        {/* 14. Contact & Verified Enquiry Form */}
        <ContactSection />
      </main>

      {/* 15. Universal Coming Soon Modal System */}
      <ComingSoonModal
        isOpen={comingSoonModal.isOpen}
        onClose={handleCloseComingSoon}
        topicTitle={comingSoonModal.topic}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 16. Multi-Column Footer */}
      <Footer
        onOpenComingSoon={handleOpenComingSoon}
        onReplayIntro={handleReplayIntro}
        onOpenPolicy={handleOpenPolicy}
      />

    </div>
  );
}
