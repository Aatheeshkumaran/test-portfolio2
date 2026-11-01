import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  ShieldCheck,
  Terminal
} from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = resumeData;
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-highlight">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software engineering and web development internships delivering scalable code and engaging user interfaces.
          </p>
        </div>

        {/* Dual Mode Timeline & Detailed View */}
        <div className="experience-layout-grid">
          {/* Left Column: Interactive Timeline List */}
          <div className="experience-selector-col">
            <div className="timeline-track">
              {experience.map((exp, idx) => {
                const isSelected = selectedExp === idx;
                return (
                  <div
                    key={exp.id}
                    className={`timeline-card-item ${isSelected ? 'active' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setSelectedExp(idx);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="timeline-node">
                      <div
                        className="node-dot"
                        style={{
                          backgroundColor: isSelected ? exp.color : 'rgba(255,255,255,0.2)',
                          boxShadow: isSelected ? `0 0 16px ${exp.color}` : 'none'
                        }}
                      />
                      <div className="node-line" />
                    </div>

                    <div className="timeline-info-box">
                      <div className="info-top-row">
                        <span className="info-company">{exp.company}</span>
                        <span className="info-badge" style={{ borderColor: exp.color, color: exp.color }}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="info-role">{exp.role}</h4>
                      <div className="info-meta">
                        <span className="info-period">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="info-loc">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      size={18}
                      className={`timeline-arrow ${isSelected ? 'visible' : ''}`}
                      style={{ color: exp.color }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Quick Experience Summary Box */}
            <div className="experience-summary-box">
              <div className="summary-icon-row">
                <Sparkles size={16} className="text-cyan" />
                <span className="summary-title">Demonstrated Engineering Rigor</span>
              </div>
              <p className="summary-text">
                Demonstrated end-to-end delivery from database schema creation and RESTful API endpoints in Django to responsive, user-friendly frontend architectures built with modern JavaScript.
              </p>
            </div>
          </div>

          {/* Right Column: Active Experience Expanded Showcase */}
          <div className="experience-detail-col">
            {experience[selectedExp] && (
              <div
                className="experience-detail-card"
                style={{
                  '--accent-color': experience[selectedExp].color
                }}
              >
                <div className="detail-glow-accent" />

                {/* Card Header */}
                <div className="detail-header">
                  <div className="detail-title-block">
                    <span className="detail-badge-pill">
                      {experience[selectedExp].badge}
                    </span>
                    <h3 className="detail-role-title">
                      {experience[selectedExp].role}
                    </h3>
                    <div className="detail-company-row">
                      <span className="detail-company-name">
                        {experience[selectedExp].company}
                      </span>
                      <span className="detail-divider">•</span>
                      <span className="detail-period-tag">
                        <Calendar size={14} />
                        {experience[selectedExp].period}
                      </span>
                      <span className="detail-divider">•</span>
                      <span className="detail-location-tag">
                        <MapPin size={14} />
                        {experience[selectedExp].location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Responsibilities & Impact */}
                <div className="detail-body">
                  <h4 className="detail-section-heading">Key Accomplishments & Deliverables:</h4>
                  <ul className="detail-bullet-list">
                    {experience[selectedExp].highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="detail-bullet-item">
                        <CheckCircle2
                          size={18}
                          className="bullet-icon"
                          style={{ color: experience[selectedExp].color }}
                        />
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Stack Tags */}
                  <div className="detail-tech-stack">
                    <h5 className="tech-stack-title">Tech Stack & Environments:</h5>
                    <div className="tech-tags-grid">
                      {experience[selectedExp].technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="experience-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
