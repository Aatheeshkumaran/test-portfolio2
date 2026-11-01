import React, { useState, useEffect } from 'react';
import Hero3D from './Hero3D';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import {
  ArrowDown,
  Terminal,
  FileText,
  Mail,
  Phone,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeroSection({ openResumeModal, openTerminalModal }) {
  const { personal, stats } = resumeData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personal.titles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, personal.titles]);

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Background Mesh Gradients */}
      <div className="hero-mesh-background" aria-hidden="true">
        <div className="ambient-blob cyan-blob" />
        <div className="ambient-blob purple-blob" />
        <div className="ambient-blob emerald-blob" />
        <div className="grid-overlay-matrix" />
      </div>

      <div className="hero-content-container">
        <div className="hero-layout-grid">
          {/* Left Column: Typography, Story & CTA */}
          <div className="hero-text-col">
            <div className="hero-eyebrow-chip">
              <span className="eyebrow-ping" />
              <Sparkles size={14} className="eyebrow-sparkle" />
              <span>SPATIAL WEB ARCHITECT · CLASS OF 2026</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name-gradient">{personal.name}</span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="hero-dynamic-role">
              <span className="role-prefix">&gt;&nbsp;</span>
              <span className="typed-text">{displayedText}</span>
              <span className="blinking-cursor">|</span>
            </div>

            <p className="hero-description">
              {personal.summary}
            </p>

            {/* CTA Action Buttons */}
            <div className="hero-actions-group">
              <a
                href="#projects"
                className="primary-cta-btn"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
              >
                <span>Explore Featured Work</span>
                <span className="btn-shine" />
              </a>

              <button
                type="button"
                className="secondary-glass-btn"
                onClick={() => {
                  sound.playClick();
                  openResumeModal();
                }}
                onMouseEnter={() => sound.playHover()}
              >
                <FileText size={17} />
                <span>Interactive Resume</span>
              </button>

              <button
                type="button"
                className="tertiary-terminal-btn"
                onClick={() => {
                  sound.playClick();
                  openTerminalModal();
                }}
                onMouseEnter={() => sound.playHover()}
                title="Open Jarvis AI Simulation"
              >
                <Terminal size={17} />
                <span>Jarvis Console</span>
              </button>
            </div>

            {/* Quick Connect & Verified Profiles */}
            <div className="hero-social-strip">
              <span className="strip-label">Direct Connect:</span>
              <div className="social-links-row">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-btn"
                  title="GitHub Profile"
                  onMouseEnter={() => sound.playHover()}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-btn"
                  title="LinkedIn Profile"
                  onMouseEnter={() => sound.playHover()}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.links.mailTo}
                  className="social-pill-btn"
                  title="Send Email"
                  onMouseEnter={() => sound.playHover()}
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>

                <a
                  href={personal.links.telTo}
                  className="social-pill-btn"
                  title="Direct Phone Call"
                  onMouseEnter={() => sound.playHover()}
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Three.js Interactive Hologram */}
          <div className="hero-3d-col">
            <div className="canvas-frame-container">
              <div className="frame-corner corner-tl" />
              <div className="frame-corner corner-tr" />
              <div className="frame-corner corner-bl" />
              <div className="frame-corner corner-br" />

              <Hero3D />
            </div>
          </div>
        </div>

        {/* Live Metrics & Quick Stats Strip */}
        <div className="hero-stats-deck">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-glow-bar" />
              <div className="stat-value-row">
                <span className="stat-number">{stat.value}</span>
                {idx === 0 && <Layers size={18} className="stat-icon cyan" />}
                {idx === 1 && <Code2 size={18} className="stat-icon purple" />}
                {idx === 2 && <Cpu size={18} className="stat-icon emerald" />}
                {idx === 3 && <Award size={18} className="stat-icon amber" />}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Scroll Prompt */}
        <div className="hero-scroll-indicator">
          <a
            href="#about"
            className="scroll-cue-link"
            onClick={() => sound.playClick()}
          >
            <span className="scroll-cue-text">SCROLL TO DISCOVER</span>
            <div className="scroll-cue-mouse">
              <div className="mouse-wheel" />
            </div>
            <ArrowDown size={14} className="bounce-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
