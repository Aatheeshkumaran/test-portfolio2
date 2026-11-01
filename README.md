# ⚡ Aatheesh Kumaran SP — 3D Cybernetic Portfolio & Resume Experience

> **Senior Frontend Designer & Developer Portfolio** featuring **React 19**, **Three.js (WebGL)**, **Procedural Audio (Web Audio API)**, **Interactive Jarvis AI Terminal**, **Dynamic Productivity Tracker**, and **Comprehensive Cross-Device Media Queries**.

---

## 🚀 Live Demo & Development

- **Local Server**: `http://localhost:5173/`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

---

## 🌟 Key Engineering & Design Highlights

### 1. 🪐 Interactive Three.js (WebGL) 3D Visualizer
- **Morphable Real-Time Geometries**:
  1. **Quantum Core**: Central multifaceted physical crystal encased in a neon cyan wireframe shell, glowing energetic core, and 3 independent gimbal orbit rings with orbiting satellite data nodes.
  2. **Cyber Torus Matrix**: Glowing Torus Knot geometry with wireframe overlay that reacts to pointer speed.
  3. **Neural Constellation**: 600+ connected particle nodes undergoing dynamic sine-wave surface deformation.
- **Background Galaxy Starfield**: 1,200+ multi-hued stars floating smoothly with depth parallax.
- **Interactive Controls**: Drag to orbit on desktop, intuitive touch-swipe orbit on mobile devices, and HUD shape switcher pill.

### 2. 🤖 Interactive Jarvis AI Terminal Simulator (`JarvisTerminalModal.jsx`)
- Built to highlight Aatheesh's signature project: **Jarvis AI Personal Assistant (Python · Hugging Face Transformers · NLP · Automation)**.
- Full interactive shell simulator with command history (`Up`/`Down` arrows), auto-scroll, prompt sounds, and built-in commands:
  - `help` / `?`: Command catalog
  - `status`: Diagnostic report on model health, Python version, and job availability
  - `skills`: Tech matrix output
  - `projects`: Technical specifications of featured projects
  - `experience`: Internship breakdown for Career Ladder & Frazon
  - `education`: Academic scores (BE CSE, CGPA 7.4)
  - `certs`: NPTEL IIT & Coursera credentials
  - `joke`: Humorous AI assistant jokes
  - `clear`: Screen cleanup

### 3. 📄 Executive Resume Modal & Print Engine (`ResumeModal.jsx`)
- Complete data extracted from Aatheesh Kumaran SP's official curriculum vitae:
  - **Education**: BE Computer Science and Engineering (2022–2026), Nehru Institute of Engineering and Technology, CGPA 7.4.
  - **Internships**: 
    - *Python Full Stack Developer Intern* @ Career Ladder (Jan 2026 – Jul 2026)
    - *Web Developer Intern* @ Frazon Digital Marketing (Feb 2025 – Aug 2025)
  - **Signature Projects**: Jarvis AI Assistant, Personal Productivity Tracker, 3D Spatial Web, Cryptographic Credential Verifier.
  - **Technical Skills**: Python, JavaScript ES6+, Django, DRF, React.js, Three.js, SQL, MongoDB, Git, Figma, OOP/MVC.
  - **Certifications**: Blockchain Basics (Coursera), Blockchain and Its Applications (NPTEL IIT Kharagpur), Python for Data Science (NPTEL IIT Madras).
- **Dual View Modes**: Switch between clean **Executive Paper Layout** and futuristic **Cyber Matrix Mode**.
- **One-Click "Print / Save PDF"**: Dedicated `@media print` CSS engine allowing clean, professional A4 paper PDF export!

### 4. 🎛️ Interactive Project Micro-Apps
- **Productivity Tracker Card**: Features a live interactive task board and velocity meter where visitors can toggle tasks, add new tasks, and watch the completion progress bar update dynamically in real time.
- **Blockchain Verifier Card**: Features an interactive SHA-256 validation trigger with cryptographic verification states and celebration confetti.
- **Live IST Clock**: Displays the current time in Coimbatore, Tamil Nadu, India (`Asia/Kolkata`) with real-time seconds.

### 5. 🔊 Procedural Web Audio API Sound Synthesizer (`audio.js`)
- Cybernetic micro-interaction feedback (sine and sawtooth waveforms) generated directly through the browser Web Audio API — **zero external MP3 assets, zero load latency**.
- Global audio toggle in navigation with status preservation in `localStorage`.

### 6. 📱 Responsive Media Query Matrix
- Fluid typography powered by CSS `clamp()`.
- Responsive breakpoints tested across:
  - **Small Mobile (320px – 480px)**: Compact single-column flow, touch-friendly touch targets, full-screen mobile glass drawer.
  - **Large Mobile & Small Tablets (480px – 768px)**: Balanced 1-column bento cards, responsive terminal window.
  - **Tablets & Laptops (768px – 1024px)**: Dual-column grid layouts, scaled 3D canvas viewport.
  - **Desktop (1024px – 1440px)**: Multi-column bento grids, custom cybernetic trailing cursor.
  - **Ultra-Wide (>1440px)**: Centered container boundaries (1320px) preventing line stretching.
  - **Print Engine (`@media print`)**: Formats the resume into clean black-and-white A4 paper format without UI clutter.

---

## 🛠️ Project Structure

```
aatheesh-portfolio/
├── index.html                  # SEO, Meta tags, Google Fonts (Syne, Outfit, JetBrains Mono)
├── package.json                # React 19, Three.js, Lucide, Canvas-Confetti, Vite
├── vite.config.js              # Vite React configuration
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # App shell, state management & modal coordinators
│   ├── index.css               # Design tokens, variables, resets & custom cursor styles
│   ├── App.css                 # Comprehensive styling & responsive media queries
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header, scroll progress, audio toggle, mobile drawer
│   │   ├── Hero3D.jsx          # Three.js 3D WebGL scene with morphing geometries & controls
│   │   ├── HeroSection.jsx     # Typography, dynamic typewriter, CTA buttons, stats deck
│   │   ├── AboutSection.jsx    # Bento grid, live clock, education credentials, copy actions
│   │   ├── ExperienceSection.jsx # Internship track record, checkpoint timeline, detailed deliverables
│   │   ├── ProjectsSection.jsx # Category filters, cards, interactive widgets, architecture modal
│   │   ├── SkillsSection.jsx   # Categorized skill matrix, 3D Galaxy sphere, progress meters
│   │   ├── TechGalaxy3D.jsx    # Three.js interactive skill particle sphere
│   │   ├── CertificationsSection.jsx # IIT Kharagpur, IIT Madras & Coursera credential cards
│   │   ├── ContactSection.jsx  # Direct coordinates, copy toasts, interactive transmission form
│   │   ├── Footer.jsx          # Links, copyright, back-to-top button
│   │   ├── ResumeModal.jsx     # Official printable & downloadable curriculum vitae modal
│   │   ├── JarvisTerminalModal.jsx # Simulated interactive AI assistant console
│   │   ├── CustomCursor.jsx    # Smooth trailing glowing cyber cursor for non-touch screens
│   │   └── SocialIcons.jsx     # Clean SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── resumeData.js       # Complete structured data parsed from uploaded resume
│   └── utils/
│       ├── audio.js            # Procedural Web Audio API synthesizer
│       └── confetti.js         # Particle celebration triggers
```

---

## 📦 Deployment Instructions

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages:
Add `"base": "/dev_portfolio/"` or repository name in `vite.config.js`, then run:
```bash
npm run build
npx gh-pages -d dist
```

---

© 2026 **Aatheesh Kumaran SP**. Crafted with React, Three.js, and Modern CSS.
