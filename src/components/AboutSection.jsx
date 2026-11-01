import React, { useState, useEffect } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import {
  GraduationCap,
  Clock,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Compass,
  Code,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function AboutSection({ openResumeModal }) {
  const { personal, education } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live India Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text, type) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    triggerConfetti();

    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const edu = education[0];

  return (
    <section id="about" className="about-section section-padding">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Compass size={14} />
            <span>ORIGIN & ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            Behind The <span className="gradient-highlight">Code & Craft</span>
          </h2>
          <p className="section-subtitle">
            Bridging analytical Python backend architectures with sensory, responsive modern frontend interfaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Bento Card 1: Narrative & Engineering Mindset (Large 2 Cols) */}
          <div className="bento-card bento-hero">
            <div className="bento-glow-blob cyan" />
            <div className="card-top-tag">
              <Sparkles size={14} />
              <span>Core Philosophy</span>
            </div>
            <h3 className="bento-card-title">
              Crafting Digital Solutions Through Continuous Learning & Practical Engineering
            </h3>
            <p className="bento-paragraph">
              I am a passionate <strong>Computer Science Engineer (Class of 2026)</strong> driven by the desire to construct end-to-end web products that feel alive. My technical foundation spans robust <strong>Python & Django REST APIs</strong>, high-performance <strong>React interfaces</strong>, and interactive <strong>Three.js 3D spatial environments</strong>.
            </p>
            <p className="bento-paragraph">
              Having completed two focused internships across modern web and full-stack domains, I emphasize modular OOP paradigms, clean MVC architectural patterns, and user-centered design principles that elevate both code reliability and user delight.
            </p>

            <div className="bento-pills-row">
              <span className="bento-pill">⚡ Rapid Prototyping</span>
              <span className="bento-pill">🛡️ Secure RESTful APIs</span>
              <span className="bento-pill">🎨 Pixel-Perfect UI/UX</span>
              <span className="bento-pill">🌐 Spatial 3D Experiences</span>
            </div>
          </div>

          {/* Bento Card 2: Academic Credential (Education) */}
          <div className="bento-card bento-education">
            <div className="bento-glow-blob purple" />
            <div className="card-top-tag">
              <GraduationCap size={14} />
              <span>Formal Education</span>
            </div>

            <div className="edu-badge-row">
              <span className="cgpa-pill">CGPA: 7.4</span>
              <span className="year-pill">{edu.duration}</span>
            </div>

            <h4 className="edu-degree">{edu.degree}</h4>
            <div className="edu-institution-row">
              <MapPin size={15} className="map-icon" />
              <span>{edu.institution}, {edu.location}</span>
            </div>

            <div className="edu-highlights">
              {edu.highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <CheckCircle2 size={15} className="highlight-check" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 3: Live Time & Location */}
          <div className="bento-card bento-clock">
            <div className="card-top-tag">
              <Clock size={14} />
              <span>Live Timezone</span>
            </div>

            <div className="clock-display">
              <span className="time-numbers">{currentTime || '11:45:00 AM'}</span>
              <span className="tz-label">IST (UTC+5:30)</span>
            </div>

            <div className="geo-location-row">
              <MapPin size={15} className="map-icon emerald" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>

            <div className="status-ping-card">
              <span className="live-dot pulse emerald" />
              <span>Open to Relocation & Remote Roles Worldwide</span>
            </div>
          </div>

          {/* Bento Card 4: Direct Interactive Quick Contact Card */}
          <div className="bento-card bento-contact-quick">
            <div className="bento-glow-blob emerald" />
            <div className="card-top-tag">
              <FileText size={14} />
              <span>Direct Credentials</span>
            </div>

            <h4 className="bento-card-title sm">Get in Direct Touch</h4>

            <div className="quick-contact-actions">
              {/* Copy Email */}
              <div className="copy-action-box">
                <div className="contact-text-col">
                  <span className="action-type">Primary Email</span>
                  <span className="action-val">{personal.email}</span>
                </div>
                <button
                  type="button"
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Copy Phone */}
              <div className="copy-action-box">
                <div className="contact-text-col">
                  <span className="action-type">Mobile Contact</span>
                  <span className="action-val">{personal.phone}</span>
                </div>
                <button
                  type="button"
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="bento-button-group">
              <button
                type="button"
                className="bento-cta-btn"
                onClick={() => {
                  sound.playClick();
                  openResumeModal();
                }}
              >
                <FileText size={16} />
                <span>Open Full Resume</span>
              </button>

              <a
                href={personal.links.portfolio}
                target="_blank"
                rel="noreferrer"
                className="bento-link-btn"
                title="View previous portfolio deploy"
              >
                <span>Live Portfolio</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
