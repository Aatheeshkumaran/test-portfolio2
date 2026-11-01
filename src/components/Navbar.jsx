import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Volume2,
  VolumeX,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({
  soundEnabled,
  setSoundEnabled,
  openResumeModal,
  openTerminalModal
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Determine active section
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.setEnabled(nextState);
    if (nextState) sound.playSuccess();
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Scroll Progress Bar */}
        <div
          className="scroll-progress-line"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="navbar-container">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <span className="brand-symbol">&lt;AK /&gt;</span>
            <div className="brand-text-col">
              <span className="brand-name">AATHEESH</span>
              <span className="brand-sub">FULL-STACK & 3D</span>
            </div>
            <span className="brand-live-badge" title="Status: Open for roles">
              <span className="live-ping"></span>
              <span className="live-dot"></span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    {link.label}
                    {activeSection === link.id && <span className="active-glow-pill" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Tools */}
          <div className="navbar-actions">
            {/* Jarvis AI Terminal Launcher */}
            <button
              type="button"
              className="action-icon-btn terminal-btn"
              onClick={() => {
                sound.playClick();
                openTerminalModal();
              }}
              title="Launch Jarvis AI Terminal"
            >
              <Terminal size={17} />
              <span className="btn-label-desktop">Jarvis AI</span>
            </button>

            {/* Audio Toggle */}
            <button
              type="button"
              className={`action-icon-btn sound-btn ${soundEnabled ? 'sound-active' : ''}`}
              onClick={toggleSound}
              title={soundEnabled ? 'Mute UI Audio' : 'Enable Cybernetic Audio'}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Resume Button */}
            <button
              type="button"
              className="resume-nav-btn"
              onClick={() => {
                sound.playClick();
                openResumeModal();
              }}
              onMouseEnter={() => sound.playHover()}
            >
              <FileText size={16} />
              <span>Resume</span>
              <Sparkles size={13} className="sparkle-icon" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-status-row">
            <span className="live-dot pulse"></span>
            <span>Available for Full-time Roles (2026)</span>
          </div>

          <nav className="mobile-links-list">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <span>{link.label}</span>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
            >
              <FileText size={18} />
              <span>View Interactive Resume</span>
            </button>

            <button
              type="button"
              className="mobile-terminal-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openTerminalModal();
              }}
            >
              <Terminal size={18} />
              <span>Open Jarvis AI Terminal</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
