import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import {
  Code,
  Sparkles,
  Terminal,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
  Check,
  Plus
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsSection({ openTerminalModal }) {
  const { projects } = resumeData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Interactive Task Tracker State for Project 2 Demo
  const [demoTasks, setDemoTasks] = useState([
    { id: 1, text: 'Train NLP intent classifier for Jarvis', done: true },
    { id: 2, text: 'Deploy Django REST authentication endpoint', done: true },
    { id: 3, text: 'Optimize Three.js WebGL rendering loop', done: false },
    { id: 4, text: 'Audit responsive CSS media queries', done: true }
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Interactive Hash Verification State for Project 4 Demo
  const [hashStatus, setHashStatus] = useState('idle'); // 'idle' | 'verifying' | 'verified'

  const categories = ['All', 'AI & Automation', 'Full-Stack Web', 'Creative Frontend & Three.js', 'Blockchain & Web3'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tag === activeFilter);

  const toggleTask = (id) => {
    sound.playClick();
    setDemoTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    sound.playClick();
    setDemoTasks((prev) => [
      ...prev,
      { id: Date.now(), text: newTaskInput.trim(), done: false }
    ]);
    setNewTaskInput('');
  };

  const runHashVerify = () => {
    sound.playClick();
    setHashStatus('verifying');
    setTimeout(() => {
      setHashStatus('verified');
      sound.playSuccess();
      triggerConfetti();
      setTimeout(() => setHashStatus('idle'), 4000);
    }, 900);
  };

  const completedCount = demoTasks.filter((t) => t.done).length;
  const progressPercent = Math.round((completedCount / (demoTasks.length || 1)) * 100);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Code size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-highlight">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            Engineered with deep focus on algorithmic efficiency, clean architecture, and responsive user interaction.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveFilter(cat);
              }}
              onMouseEnter={() => sound.playHover()}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="project-cyber-card"
                style={{
                  '--card-accent': project.accentColor
                }}
              >
                {/* Glow Border Gradient */}
                <div className="card-ambient-glow" />

                {/* Top Header */}
                <div className="card-header-row">
                  <div className="tag-group">
                    <span className="project-category-tag">{project.tag}</span>
                    <span className="project-status-tag">{project.status}</span>
                  </div>

                  <div className="card-header-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="card-action-icon-link"
                      title="View GitHub Repository"
                      onClick={() => sound.playClick()}
                    >
                      <GithubIcon size={17} />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="project-main-info">
                  <h3 className="project-title-text">{project.title}</h3>
                  <div className="project-subtitle-text">{project.subtitle}</div>
                  <p className="project-desc-paragraph">{project.description}</p>
                </div>

                {/* Interactive Dynamic Component for Each Project */}
                {project.id === 'jarvis-ai' && (
                  <div className="project-interactive-widget jarvis-widget">
                    <div className="widget-header">
                      <Terminal size={14} className="text-cyan" />
                      <span>Live Jarvis AI Simulator</span>
                      <span className="live-dot pulse cyan sm" />
                    </div>
                    <div className="widget-content">
                      <p className="widget-prompt">
                        &gt; Natural Language Model ready. NLP intent parser active.
                      </p>
                      <button
                        type="button"
                        className="widget-cta-button"
                        onClick={() => {
                          sound.playClick();
                          openTerminalModal();
                        }}
                      >
                        <Terminal size={15} />
                        <span>Launch Jarvis Console Demo</span>
                      </button>
                    </div>
                  </div>
                )}

                {project.id === 'productivity-tracker' && (
                  <div className="project-interactive-widget tracker-widget">
                    <div className="widget-header">
                      <BarChart3 size={14} className="text-emerald" />
                      <span>Live Task Board & Velocity</span>
                      <span className="progress-badge">{progressPercent}% Completed</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mini-progress-track">
                      <div
                        className="mini-progress-fill"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    {/* Task checklist */}
                    <div className="mini-task-list">
                      {demoTasks.map((t) => (
                        <div
                          key={t.id}
                          className={`mini-task-row ${t.done ? 'done' : ''}`}
                          onClick={() => toggleTask(t.id)}
                        >
                          <div className={`check-box-circle ${t.done ? 'checked' : ''}`}>
                            {t.done && <Check size={11} />}
                          </div>
                          <span className="task-row-text">{t.text}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={addTask} className="mini-task-input-row">
                      <input
                        type="text"
                        placeholder="Add quick task..."
                        value={newTaskInput}
                        onChange={(e) => setNewTaskInput(e.target.value)}
                        className="task-quick-input"
                      />
                      <button type="submit" className="task-add-btn" title="Add Task">
                        <Plus size={14} />
                      </button>
                    </form>
                  </div>
                )}

                {project.id === 'spatial-3d-portfolio' && (
                  <div className="project-interactive-widget 3d-widget">
                    <div className="widget-header">
                      <Sparkles size={14} className="text-amber" />
                      <span>Real-time Three.js Visualizer</span>
                      <span className="live-dot pulse amber sm" />
                    </div>
                    <div className="widget-3d-metrics">
                      <div className="metric-chip">
                        <span className="m-label">FPS:</span>
                        <span className="m-val text-amber">60.0 locked</span>
                      </div>
                      <div className="metric-chip">
                        <span className="m-label">Particles:</span>
                        <span className="m-val">1,200 nodes</span>
                      </div>
                      <div className="metric-chip">
                        <span className="m-label">Audio:</span>
                        <span className="m-val">Procedural Synth</span>
                      </div>
                    </div>
                    <a href="#hero" className="widget-jump-link">
                      <span>Interact With Hero 3D Model ↑</span>
                    </a>
                  </div>
                )}

                {project.id === 'blockchain-verifier' && (
                  <div className="project-interactive-widget blockchain-widget">
                    <div className="widget-header">
                      <ShieldCheck size={14} className="text-purple" />
                      <span>Tamper-Proof Audit Node</span>
                      <span className="hash-sample">SHA-256: 0x8f4c...91e3</span>
                    </div>

                    <div className="hash-verify-action">
                      <button
                        type="button"
                        className={`hash-btn ${hashStatus}`}
                        onClick={runHashVerify}
                        disabled={hashStatus === 'verifying'}
                      >
                        {hashStatus === 'idle' && (
                          <>
                            <ShieldCheck size={15} />
                            <span>Validate Cryptographic Hash</span>
                          </>
                        )}
                        {hashStatus === 'verifying' && <span>Verifying Proof of Credential...</span>}
                        {hashStatus === 'verified' && (
                          <>
                            <CheckCircle2 size={15} />
                            <span>Verified Immutable Proof ✓</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Key Bullet Highlights */}
                <div className="project-bullets-container">
                  {project.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="bullet-row">
                      <span className="bullet-indicator" style={{ backgroundColor: project.accentColor }} />
                      <span className="bullet-content">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Pills */}
                <div className="project-tech-pills">
                  {project.stack.map((s, sIdx) => (
                    <span key={sIdx} className="tech-chip">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="card-footer-strip">
                  <button
                    type="button"
                    className="view-details-btn"
                    onClick={() => {
                      sound.playClick();
                      setActiveModalProject(project);
                    }}
                  >
                    <span>System Architecture</span>
                    <ExternalLink size={14} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="view-source-btn"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div className="modal-backdrop-overlay" onClick={() => setActiveModalProject(null)}>
            <div
              className="modal-content-glass project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top-bar">
                <div className="modal-title-col">
                  <span className="modal-eyebrow">{activeModalProject.tag}</span>
                  <h3 className="modal-title">{activeModalProject.title}</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => {
                    sound.playClick();
                    setActiveModalProject(null);
                  }}
                >
                  ✕
                </button>
              </div>

              <div className="modal-body-scrollable">
                <p className="modal-long-desc">{activeModalProject.description}</p>

                <div className="architecture-box">
                  <h4 className="arch-heading">Architecture & Engineering Specifications:</h4>
                  <ul className="arch-list">
                    {activeModalProject.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="arch-item">
                        <CheckCircle2 size={16} className="text-cyan" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-metrics-deck">
                  {Object.entries(activeModalProject.metrics).map(([key, val]) => (
                    <div key={key} className="metric-box">
                      <span className="m-title">{key.toUpperCase()}</span>
                      <span className="m-highlight">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="modal-tags-section">
                  <span className="tags-label">Stack Components:</span>
                  <div className="tech-tags-grid">
                    {activeModalProject.stack.map((t, idx) => (
                      <span key={idx} className="experience-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions-footer">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-primary-btn"
                  onClick={() => sound.playClick()}
                >
                  <GithubIcon size={16} />
                  <span>View Repository on GitHub</span>
                </a>
                <button
                  type="button"
                  className="modal-secondary-btn"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
