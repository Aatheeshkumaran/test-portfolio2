import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerFireworks, triggerConfetti } from '../utils/confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Globe,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const { personal } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);

    // Simulate responsive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      sound.playSuccess();
      triggerFireworks();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            Initiate <span className="gradient-highlight">Collaboration</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an open full-time position, a freelance venture, or an ambitious project — my inbox is always open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Coordinates & Status */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="status-live-banner">
                <span className="live-dot pulse emerald" />
                <div className="status-banner-text">
                  <strong>Available for Engineering Roles</strong>
                  <span>Class of 2026 · Immediate / Post-Graduation</span>
                </div>
              </div>

              <h3 className="contact-info-heading">
                Direct Contact Channels
              </h3>
              <p className="contact-info-subtext">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within a few hours.
              </p>

              {/* Coordinates List */}
              <div className="coordinates-list">
                {/* Email Box */}
                <div className="coordinate-item">
                  <div className="coordinate-icon-wrapper text-cyan">
                    <Mail size={18} />
                  </div>
                  <div className="coordinate-text-group">
                    <span className="coord-label">Primary Email</span>
                    <a href={personal.links.mailTo} className="coord-value">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="coord-copy-btn"
                    onClick={() => handleCopy(personal.email, 'email')}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="coordinate-item">
                  <div className="coordinate-icon-wrapper text-emerald">
                    <Phone size={18} />
                  </div>
                  <div className="coordinate-text-group">
                    <span className="coord-label">Mobile Contact</span>
                    <a href={personal.links.telTo} className="coord-value">
                      {personal.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="coord-copy-btn"
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="coordinate-item">
                  <div className="coordinate-icon-wrapper text-purple">
                    <MapPin size={18} />
                  </div>
                  <div className="coordinate-text-group">
                    <span className="coord-label">Base Location</span>
                    <span className="coord-value">{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="contact-social-strip">
                <span className="social-strip-title">Connect on Professional Networks:</span>
                <div className="social-icon-links">
                  <a
                    href={personal.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle-link"
                    title="LinkedIn"
                    onMouseEnter={() => sound.playHover()}
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={personal.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle-link"
                    title="GitHub"
                    onMouseEnter={() => sound.playHover()}
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={personal.links.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle-link"
                    title="Dev Portfolio"
                    onMouseEnter={() => sound.playHover()}
                  >
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="card-top-glow" />

              <h3 className="form-title">Send a Direct Transmission</h3>
              <p className="form-subtitle">
                Fill in your details below and I'll receive your communication directly.
              </p>

              {formSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-bubble">
                    <CheckCircle2 size={42} className="text-emerald" />
                  </div>
                  <h4 className="success-heading">Message Dispatched Successfully!</h4>
                  <p className="success-desc">
                    Thank you for reaching out. I have received your notification and will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    className="reset-form-btn"
                    onClick={() => {
                      sound.playClick();
                      setFormSubmitted(false);
                    }}
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-element">
                  <div className="form-row-dual">
                    <div className="form-field-group">
                      <label className="field-label" htmlFor="name">
                        Your Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label" htmlFor="email">
                        Your Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="subject">
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Developer Opportunity / Project Inquiry"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="message">
                      Your Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or position requirements..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-submit-cta"
                    disabled={isSubmitting}
                    onMouseEnter={() => sound.playHover()}
                  >
                    {isSubmitting ? (
                      <span>Dispatching Transmission...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
