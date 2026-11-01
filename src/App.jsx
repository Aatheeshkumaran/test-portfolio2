import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals
import ResumeModal from './components/ResumeModal';
import JarvisTerminalModal from './components/JarvisTerminalModal';

import { sound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  // Initialize sound state
  useEffect(() => {
    const savedSound = localStorage.getItem('sound_enabled');
    if (savedSound === 'true') {
      setSoundEnabled(true);
      sound.setEnabled(true);
    }
  }, []);

  const handleSoundToggle = (val) => {
    setSoundEnabled(val);
    localStorage.setItem('sound_enabled', val ? 'true' : 'false');
  };

  return (
    <div className="portfolio-app">
      {/* Dynamic Cyber Cursor for Desktop */}
      <CustomCursor />

      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation Header */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={handleSoundToggle}
        openResumeModal={() => setResumeModalOpen(true)}
        openTerminalModal={() => setTerminalModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          openResumeModal={() => setResumeModalOpen(true)}
          openTerminalModal={() => setTerminalModalOpen(true)}
        />

        <AboutSection
          openResumeModal={() => setResumeModalOpen(true)}
        />

        <ExperienceSection />

        <ProjectsSection
          openTerminalModal={() => setTerminalModalOpen(true)}
        />

        <SkillsSection />

        <CertificationsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        openResumeModal={() => setResumeModalOpen(true)}
        openTerminalModal={() => setTerminalModalOpen(true)}
      />

      {/* Full Interactive Official Resume Modal with Print Engine */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Jarvis AI Terminal Simulator Modal */}
      <JarvisTerminalModal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
      />
    </div>
  );
}
