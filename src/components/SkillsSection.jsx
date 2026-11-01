import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import TechGalaxy3D from './TechGalaxy3D';
import { sound } from '../utils/audio';
import {
  Cpu,
  Layers,
  Server,
  Palette,
  Terminal,
  Sparkles,
  Zap
} from 'lucide-react';

export default function SkillsSection() {
  const { skills } = resumeData;
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);

  const currentCat = skills.categories[selectedCategoryIdx];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layers size={17} />;
      case 'Server':
        return <Server size={17} />;
      case 'Palette':
        return <Palette size={17} />;
      case 'Terminal':
        return <Terminal size={17} />;
      default:
        return <Cpu size={17} />;
    }
  };

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Zap size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Engineering & <span className="gradient-highlight">Design Matrix</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of full-stack programming, creative 3D rendering, and UX frameworks in my toolkit.
          </p>
        </div>

        {/* Skills Main Layout */}
        <div className="skills-layout-grid">
          {/* Left Column: Interactive Category Navigator + 3D Galaxy */}
          <div className="skills-nav-column">
            <div className="category-tabs-list">
              {skills.categories.map((cat, idx) => {
                const isActive = selectedCategoryIdx === idx;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    className={`cat-tab-btn ${isActive ? 'active' : ''}`}
                    style={{
                      '--cat-color': cat.color
                    }}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCategoryIdx(idx);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="tab-icon-wrapper" style={{ color: cat.color }}>
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div className="tab-text-wrapper">
                      <span className="tab-title">{cat.name}</span>
                      <span className="tab-count">{cat.items.length} Technologies</span>
                    </div>
                    {isActive && <div className="active-pill-bar" style={{ backgroundColor: cat.color }} />}
                  </button>
                );
              })}
            </div>

            {/* Interactive 3D Skill Galaxy Display */}
            <div className="skills-3d-card">
              <TechGalaxy3D activeCategoryColor={currentCat.color} />
            </div>
          </div>

          {/* Right Column: Skill Meters & Deep Matrix */}
          <div className="skills-display-column">
            <div
              className="skills-matrix-card"
              style={{
                '--cat-color': currentCat.color
              }}
            >
              {/* Category Header */}
              <div className="matrix-card-header">
                <div className="cat-title-row">
                  <div className="cat-icon-badge" style={{ backgroundColor: `${currentCat.color}22`, color: currentCat.color }}>
                    {getCategoryIcon(currentCat.icon)}
                  </div>
                  <div>
                    <h3 className="cat-heading">{currentCat.name}</h3>
                    <span className="cat-subtext">Proficiency Level & System Experience</span>
                  </div>
                </div>
                <span className="cat-tag-pill" style={{ borderColor: currentCat.color, color: currentCat.color }}>
                  Verified Stack
                </span>
              </div>

              {/* Skill Bars List */}
              <div className="skills-meter-grid">
                {currentCat.items.map((skill, sIdx) => (
                  <div
                    key={skill.name}
                    className="skill-meter-item"
                    onMouseEnter={() => sound.playHover()}
                  >
                    <div className="meter-info-row">
                      <div className="skill-name-group">
                        <span className="skill-name-text">{skill.name}</span>
                        <span className="skill-role-tag">{skill.tag}</span>
                      </div>
                      <span className="skill-percent-text" style={{ color: currentCat.color }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: currentCat.color,
                          boxShadow: `0 0 12px ${currentCat.color}88`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Architectural Pillars */}
              <div className="matrix-footer-strip">
                <div className="pillar-item">
                  <span className="pillar-num">01</span>
                  <div className="pillar-text">
                    <strong>OOP & MVC</strong>
                    <span>Modular, maintainable code architectures</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">02</span>
                  <div className="pillar-text">
                    <strong>REST APIs</strong>
                    <span>Clean endpoints, serialization, & security</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">03</span>
                  <div className="pillar-text">
                    <strong>Responsive 3D</strong>
                    <span>Three.js WebGL with mobile optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
