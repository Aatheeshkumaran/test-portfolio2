import React, { useState, useRef, useEffect } from 'react';
import { resumeData } from '../data/resumeData';
import { sound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Trash2,
  Sparkles,
  Cpu
} from 'lucide-react';

export default function JarvisTerminalModal({ isOpen, onClose }) {
  const { personal, experience, projects, skills, education, certifications } = resumeData;
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '🤖 JARVIS AI Personal Assistant v3.8 [Python / Hugging Face Transformers / NLP / Automation]'
    },
    {
      type: 'system',
      text: 'Type "help" to view executable commands or try "status", "skills", "projects", "joke".'
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    sound.playClick();
    const cmd = rawCmd.toLowerCase();

    // Add to history
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);

    const newEntries = [{ type: 'user', text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
      case '?':
        newEntries.push({
          type: 'response',
          text: `Available Jarvis commands:
  • status     : System health, NLP pipeline & runtime info
  • skills     : Display full-stack & 3D technical matrix
  • projects   : Overview of featured engineering systems
  • experience : Internship track record (Career Ladder & Frazon)
  • education  : Degree, CGPA & academic background
  • certs      : NPTEL IIT & Coursera verified credentials
  • contact    : Direct phone, email, and social coordinates
  • resume     : Open official printable curriculum vitae
  • joke       : Generate an AI developer joke
  • clear      : Clean the terminal buffer
  • exit       : Close this Jarvis console session`
        });
        break;

      case 'status':
        newEntries.push({
          type: 'response',
          text: `[JARVIS SYSTEM DIAGNOSTICS]
  Candidate      : ${personal.name}
  Degree Target  : BE Computer Science (2026) | CGPA: 7.4
  Status         : ${personal.currentStatus}
  NLP Engine     : Hugging Face Transformers v4.x
  Runtime        : Python 3.12 / React 19 / Three.js
  API Layer      : Django REST Framework (DRF)
  Availability   : Full-Time / Internships / Relocation ✓`
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'response',
          text: `[TECHNICAL SKILLS MATRIX]
  • Languages : Python, JavaScript (ES6+), HTML5, CSS3, SQL
  • Frontend  : React.js, Three.js, Bootstrap 5, Modern CSS3
  • Backend   : Django, Django REST Framework, Python
  • Databases : MySQL, MongoDB
  • UI/UX     : Figma, Wireframing, Prototyping, Micro-interactions
  • Paradigms : OOP, MVC, RESTful APIs, CRUD Architectures`
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'response',
          text: `[FEATURED PROJECTS]
  1. Jarvis AI Personal Assistant
     Tech: Python, Hugging Face Transformers, NLP, Automation
     Capabilities: Natural language query answering, OS app automation, voice/text triggers.
  
  2. Personal Productivity Tracker
     Tech: Python, Django, JavaScript, HTML5/CSS3
     Capabilities: Task scheduling, CRUD management, analytics velocity dashboard.

  3. Spatial 3D Cyber Portfolio
     Tech: React 19, Three.js, WebGL, Web Audio API
     Capabilities: Real-time 3D geometries, particle fields, sound synthesis.

  4. Cryptographic Credential Verifier
     Tech: Python, Cryptography, REST APIs, Web3 concepts`
        });
        break;

      case 'experience':
        newEntries.push({
          type: 'response',
          text: `[WORK EXPERIENCE]
  1. Career Ladder | Python Full Stack Developer Intern (Jan 2026 – Jul 2026)
     - Full-stack applications with Python, Django, SQL & modern JS.
     - Built secure RESTful APIs, managed relational schemas, delivered responsive UI.

  2. Frazon Digital Marketing | Web Developer Intern (Feb 2025 – Aug 2025)
     - Responsive business websites with HTML, CSS, JavaScript.
     - Performance optimization, cross-browser compatibility, structured Git workflows.`
        });
        break;

      case 'education':
        newEntries.push({
          type: 'response',
          text: `[EDUCATION]
  ${education[0].degree}
  ${education[0].institution}, ${education[0].location}
  Duration : ${education[0].duration}
  Score    : ${education[0].score}`
        });
        break;

      case 'certs':
      case 'certifications':
        newEntries.push({
          type: 'response',
          text: `[VERIFIED CREDENTIALS]
  • Blockchain and Its Applications — NPTEL (IIT Kharagpur), 2025
  • Python for Data Science — NPTEL (IIT Madras), 2025
  • Blockchain Basics — Coursera, 2025`
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'response',
          text: `[DIRECT COMMUNICATION COORDINATES]
  • Email    : ${personal.email}
  • Mobile   : ${personal.phone}
  • GitHub   : ${personal.links.github}
  • LinkedIn : ${personal.links.linkedin}
  • Web      : ${personal.links.portfolio}`
        });
        break;

      case 'joke': {
        const jokes = [
          "Why do Python programmers prefer dark mode? Because light attracts bugs!",
          "There are 10 types of people in the world: those who understand binary, and those who don't.",
          "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
          "Jarvis: I asked the neural net to write a joke, and it just output my first Python code from 2022."
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        newEntries.push({ type: 'response', text: `🤖 Jarvis: ${randomJoke}` });
        break;
      }

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" to see valid commands.`
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="terminal-modal-backdrop" onClick={onClose}>
      <div
        className="terminal-window-glass"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="window-dot red" onClick={onClose} title="Close" />
            <span className="window-dot yellow" title="Minimize" />
            <span className="window-dot green" title="Maximize" />
          </div>

          <div className="terminal-title">
            <TerminalIcon size={14} className="text-cyan" />
            <span>jarvis@aatheesh-system: ~/nlp-core</span>
          </div>

          <div className="terminal-actions">
            <button
              type="button"
              className="term-icon-btn"
              onClick={() => setHistory([])}
              title="Clear screen"
            >
              <Trash2 size={13} />
            </button>
            <button
              type="button"
              className="term-icon-btn"
              onClick={onClose}
              title="Close terminal"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div className="terminal-body" ref={scrollRef}>
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line ${item.type}`}>
              {item.type === 'response' ? (
                <pre className="line-pre">{item.text}</pre>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}

          {/* Active Command Prompt Form */}
          <form onSubmit={handleCommand} className="terminal-input-row">
            <span className="terminal-prompt-user">jarvis:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-active-input"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>

        {/* Terminal Quick Command Chips */}
        <div className="terminal-quick-chips">
          <span className="chip-label">Quick Run:</span>
          {['help', 'status', 'skills', 'projects', 'joke', 'contact'].map((c) => (
            <button
              key={c}
              type="button"
              className="term-cmd-chip"
              onClick={() => {
                sound.playClick();
                setInputVal(c);
                setTimeout(() => {
                  const fakeEvent = { preventDefault: () => {} };
                  inputVal; // trigger
                }, 50);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
