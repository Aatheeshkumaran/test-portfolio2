import React from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import {
  Award,
  ShieldCheck,
  Cpu,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function CertificationsSection() {
  const { certifications, education } = resumeData;

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  const handleVerifyCert = (title) => {
    sound.playSuccess();
    triggerConfetti();
  };

  return (
    <section id="certifications" className="certifications-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Award size={14} />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="section-title">
            Academic & <span className="gradient-highlight">Industry Certifications</span>
          </h2>
          <p className="section-subtitle">
            Rigorous programs from premier institutions including IIT Kharagpur, IIT Madras, and Coursera.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card-cyber"
              style={{
                '--cert-color': cert.color
              }}
              onMouseEnter={() => sound.playHover()}
            >
              <div className="cert-ambient-glow" />

              <div className="cert-card-top">
                <div className="cert-icon-wrapper" style={{ color: cert.color, borderColor: cert.color }}>
                  {getCertIcon(cert.icon)}
                </div>
                <div className="cert-year-tag">
                  <span>{cert.year}</span>
                </div>
              </div>

              <div className="cert-content-body">
                <span className="cert-type-pill" style={{ borderColor: `${cert.color}44`, color: cert.color }}>
                  {cert.type}
                </span>

                <h3 className="cert-title-text">{cert.title}</h3>

                <div className="cert-issuer-row">
                  <span className="issuer-label">Issuing Authority:</span>
                  <span className="issuer-val">{cert.issuer}</span>
                </div>

                <p className="cert-description">{cert.description}</p>
              </div>

              <div className="cert-card-footer">
                <button
                  type="button"
                  className="cert-verify-btn"
                  onClick={() => handleVerifyCert(cert.title)}
                  title="Verify credential"
                >
                  <CheckCircle2 size={15} style={{ color: cert.color }} />
                  <span>Verified Credential</span>
                </button>
              </div>
            </div>
          ))}

          {/* Education Highlight Card */}
          <div className="cert-card-cyber education-highlight-card">
            <div className="cert-ambient-glow" />

            <div className="cert-card-top">
              <div className="cert-icon-wrapper text-cyan">
                <GraduationCap size={20} />
              </div>
              <div className="cert-year-tag">
                <span>{education[0].duration}</span>
              </div>
            </div>

            <div className="cert-content-body">
              <span className="cert-type-pill text-cyan">
                Graduating Class of 2026
              </span>

              <h3 className="cert-title-text">{education[0].degree}</h3>

              <div className="cert-issuer-row">
                <span className="issuer-label">Institution:</span>
                <span className="issuer-val">{education[0].institution}</span>
              </div>

              <div className="cgpa-highlight-row">
                <span className="cgpa-banner">Cumulative Score: {education[0].score}</span>
                <span className="location-pill">{education[0].location}</span>
              </div>
            </div>

            <div className="cert-card-footer">
              <div className="status-indicator-clean">
                <span className="live-dot pulse cyan sm" />
                <span>Final Year Engineering Rigor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
