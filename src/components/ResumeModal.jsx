import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import {
  FileText,
  Printer,
  Download,
  X,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('executive'); // 'executive' | 'cyber'
  const { personal, education, experience, projects, certifications, skills } = resumeData;

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playSuccess();
    triggerConfetti();
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="resume-modal-header no-print">
          <div className="modal-header-left">
            <div className="header-icon-pill">
              <FileText size={16} />
              <span>OFFICIAL RESUME VIEW</span>
            </div>
            <span className="file-badge">Aatheesh_Kumaran_SP_Resume.pdf</span>
          </div>

          <div className="modal-header-controls">
            {/* View Mode Toggle */}
            <div className="resume-view-switcher">
              <button
                type="button"
                className={`switcher-btn ${activeTab === 'executive' ? 'active' : ''}`}
                onClick={() => {
                  sound.playClick();
                  setActiveTab('executive');
                }}
              >
                Executive Layout
              </button>
              <button
                type="button"
                className={`switcher-btn ${activeTab === 'cyber' ? 'active' : ''}`}
                onClick={() => {
                  sound.playClick();
                  setActiveTab('cyber');
                }}
              >
                Cyber Matrix
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              type="button"
              className="resume-action-btn print-btn"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              className="resume-close-btn"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              title="Close Resume View"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="resume-paper-scroll">
          <div className={`resume-paper-sheet ${activeTab === 'cyber' ? 'cyber-mode' : ''}`} id="printable-resume">
            {/* Resume Header */}
            <header className="resume-doc-header">
              <div className="header-main-title">
                <h1 className="candidate-name">{personal.name}</h1>
                <div className="candidate-roles-row">
                  <span>Python Full-stack Developer</span>
                  <span className="bullet-sep">|</span>
                  <span>UX/UI Developer</span>
                  <span className="bullet-sep">|</span>
                  <span>Front-end Developer</span>
                </div>
              </div>

              {/* Contact Information Bar */}
              <div className="candidate-contact-bar">
                <a href={personal.links.telTo} className="contact-link">
                  <Phone size={13} />
                  <span>{personal.phone}</span>
                </a>
                <span className="bullet-sep">|</span>
                <a href={personal.links.mailTo} className="contact-link">
                  <Mail size={13} />
                  <span>{personal.email}</span>
                </a>
                <span className="bullet-sep">|</span>
                <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <LinkedinIcon size={13} />
                  <span>linkedin.com/in/aatheesh-kumaran</span>
                </a>
                <span className="bullet-sep">|</span>
                <a href={personal.links.github} target="_blank" rel="noreferrer" className="contact-link">
                  <GithubIcon size={13} />
                  <span>github.com/Aatheeshkumaran</span>
                </a>
              </div>

              <div className="portfolio-link-bar">
                <span className="bold-label">Portfolio:</span>
                <a href={personal.links.portfolio} target="_blank" rel="noreferrer" className="contact-link link-highlight">
                  {personal.links.portfolio}
                </a>
              </div>
            </header>

            <div className="resume-divider-line" />

            {/* Professional Summary */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">PROFESSIONAL SUMMARY</h2>
              <p className="resume-summary-text">
                {personal.summary}
              </p>
            </section>

            <div className="resume-divider-line" />

            {/* Work Experience */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">WORK EXPERIENCE</h2>

              {experience.map((exp) => (
                <div key={exp.id} className="resume-job-entry">
                  <div className="job-top-row">
                    <div className="job-title-company">
                      <strong className="job-role">{exp.role.toUpperCase()}</strong>
                      <span className="job-company"> | {exp.company.toUpperCase()}</span>
                    </div>
                    <span className="job-period">{exp.period}</span>
                  </div>

                  <ul className="job-bullets-list">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="job-bullet-item">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <div className="resume-divider-line" />

            {/* Featured Projects */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">PROJECTS</h2>

              {projects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="resume-project-entry">
                  <div className="project-title-row">
                    <strong className="proj-title">{proj.title}</strong>
                    <span className="proj-tech-line">
                      — {proj.stack.slice(0, 4).join(' · ')}
                    </span>
                  </div>

                  <ul className="project-bullets-list">
                    {proj.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="project-bullet-item">
                        {bp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <div className="resume-divider-line" />

            {/* Technical Skills */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">TECHNICAL SKILLS</h2>

              <div className="skills-line-list">
                <div className="skills-line-row">
                  <strong className="skills-category-label">Languages:</strong>
                  <span className="skills-category-values">
                    Python, JavaScript (ES6+), HTML5, CSS3, SQL
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">Frontend:</strong>
                  <span className="skills-category-values">
                    React.js, Three.js, Bootstrap 5, Responsive Web Design, REST API Integration
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">Backend:</strong>
                  <span className="skills-category-values">
                    Django, Django REST Framework (DRF), Python
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">Databases:</strong>
                  <span className="skills-category-values">
                    MySQL, MongoDB
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">Tools & Platforms:</strong>
                  <span className="skills-category-values">
                    Git, GitHub, Postman, Figma
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">UI/UX:</strong>
                  <span className="skills-category-values">
                    Wireframing, Prototyping, User-Centered Design, Responsive Design
                  </span>
                </div>
                <div className="skills-line-row">
                  <strong className="skills-category-label">Concepts:</strong>
                  <span className="skills-category-values">
                    Object-Oriented Programming (OOP), MVC Architecture, CRUD Operations, Authentication & Authorization, RESTful APIs
                  </span>
                </div>
              </div>
            </section>

            <div className="resume-divider-line" />

            {/* Education */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">EDUCATION</h2>
              <div className="resume-edu-entry">
                <div className="edu-top-row">
                  <strong className="edu-degree-text">{education[0].degree.toUpperCase()}</strong>
                  <span className="edu-period-text">{education[0].duration}</span>
                </div>
                <div className="edu-sub-row">
                  <span>{education[0].institution}, {education[0].location}</span>
                  <span className="edu-cgpa-score"> | {education[0].score}</span>
                </div>
              </div>
            </section>

            <div className="resume-divider-line" />

            {/* Certifications */}
            <section className="resume-doc-section">
              <h2 className="resume-section-heading">CERTIFICATIONS</h2>
              <ul className="resume-cert-list">
                {certifications.map((c) => (
                  <li key={c.id} className="cert-doc-item">
                    • <strong>{c.title}</strong> — {c.issuer}, {c.year}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Modal Bottom Footer Strip */}
        <div className="resume-modal-footer no-print">
          <div className="footer-meta-text">
            <span>Verified from uploaded curriculum vitae</span>
            <span className="bullet-sep">•</span>
            <span>Optimized for standard A4 and PDF output</span>
          </div>

          <div className="footer-buttons">
            <button
              type="button"
              className="footer-btn print-direct"
              onClick={handlePrint}
            >
              <Download size={15} />
              <span>Download / Print Resume</span>
            </button>
            <button
              type="button"
              className="footer-btn close-modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
