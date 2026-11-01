import React from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import {
  ArrowUp,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Terminal,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ openResumeModal, openTerminalModal }) {
  const { personal } = resumeData;

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-cyber-container">
      <div className="footer-inner-content">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <span className="brand-code-symbol">&lt;AK /&gt;</span>
              <span className="brand-name-bold">{personal.name}</span>
            </div>
            <p className="footer-bio-snippet">
              Python Full-Stack Developer, UX/UI Developer & Creative Frontend Engineer graduating in 2026 from Nehru Institute of Engineering and Technology.
            </p>
            <div className="footer-tech-stack-indicator">
              <span>Stack: React 19 · Three.js · Python · Django · Modern CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about" onClick={() => sound.playClick()}>About & Origin</a></li>
              <li><a href="#experience" onClick={() => sound.playClick()}>Internship Track Record</a></li>
              <li><a href="#projects" onClick={() => sound.playClick()}>Featured Engineering</a></li>
              <li><a href="#skills" onClick={() => sound.playClick()}>Tech Matrix</a></li>
              <li><a href="#certifications" onClick={() => sound.playClick()}>Certifications</a></li>
              <li><a href="#contact" onClick={() => sound.playClick()}>Direct Transmission</a></li>
            </ul>
          </div>

          {/* Dynamic Utilities */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Portals & Tools</h4>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  className="footer-text-btn"
                  onClick={() => {
                    sound.playClick();
                    openResumeModal();
                  }}
                >
                  Interactive Resume (PDF)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-text-btn"
                  onClick={() => {
                    sound.playClick();
                    openTerminalModal();
                  }}
                >
                  Jarvis AI Terminal Simulator
                </button>
              </li>
              <li>
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href={personal.links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                >
                  Legacy Web Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Contact Coordinates</h4>
            <div className="footer-contact-details">
              <a href={personal.links.mailTo} className="footer-coord-link">
                <Mail size={14} className="text-cyan" />
                <span>{personal.email}</span>
              </a>
              <a href={personal.links.telTo} className="footer-coord-link">
                <Phone size={14} className="text-emerald" />
                <span>{personal.phone}</span>
              </a>
              <div className="footer-social-row">
                <a href={personal.links.github} target="_blank" rel="noreferrer" className="footer-social-icon" title="GitHub">
                  <GithubIcon size={16} />
                </a>
                <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon" title="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
                <a href={personal.links.portfolio} target="_blank" rel="noreferrer" className="footer-social-icon" title="Portfolio">
                  <Globe size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            <span>© 2026 {personal.name}. All systems operational.</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Return to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
