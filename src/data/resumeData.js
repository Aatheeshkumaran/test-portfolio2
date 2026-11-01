export const resumeData = {
  personal: {
    name: "AATHEESH KUMARAN SP",
    shortName: "Aatheesh Kumaran",
    titles: [
      "Python Full-Stack Developer",
      "Front-end Engineer",
      "UX/UI Designer",
      "Three.js Creative Coder"
    ],
    tagline: "Engineering immersive web experiences and resilient full-stack systems with Python, React, and Three.js.",
    phone: "+91 89251 74341",
    email: "aatheesh1e@gmail.com",
    location: "Coimbatore, Tamil Nadu, India",
    currentStatus: "Open to High-Impact Opportunities & Full-Time Roles (Class of 2026)",
    availabilityBadge: "Available for Hire 🟢",
    links: {
      github: "https://github.com/Aatheeshkumaran",
      linkedin: "https://www.linkedin.com/in/aatheesh-kumaran/",
      portfolio: "https://aatheeshkumaran.github.io/dev_portfolio/",
      mailTo: "mailto:aatheesh1e@gmail.com",
      telTo: "tel:+918925174341"
    },
    summary:
      "Motivated BE Computer Science student (2026) with a strong foundation in web development, Python, and modern frontend technologies. Skilled in designing and developing responsive, user-friendly web applications with knowledge of UI/UX principles and backend development. Passionate about learning emerging technologies, solving real-world problems, and building innovative software solutions through continuous learning and practical experience."
  },

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Nehru Institute of Engineering and Technology",
      location: "Coimbatore, India",
      duration: "2022 – 2026",
      score: "CGPA: 7.4",
      highlights: [
        "Specialization in Full Stack Web Architectures & Advanced Python",
        "Active contributor to technical workshops and UI/UX design sprints",
        "Rigorous coursework in Data Structures, OOP, Software Engineering, and Computer Networks"
      ]
    }
  ],

  experience: [
    {
      id: "career-ladder",
      role: "Python Full Stack Developer Intern",
      company: "Career Ladder",
      period: "Jan 2026 – Jul 2026",
      type: "Internship",
      location: "On-site / Hybrid",
      featured: true,
      color: "#00f0ff",
      badge: "Full-Stack & Django",
      highlights: [
        "Developed full-stack web applications using Python, Django, HTML, CSS, JavaScript, and SQL.",
        "Built and integrated RESTful APIs to enable seamless communication between frontend and backend components.",
        "Designed and managed relational databases, implementing CRUD operations and authentication modules.",
        "Developed responsive user interfaces while ensuring application performance, security, and scalability.",
        "Participated in debugging, testing, and deployment activities, contributing to the successful delivery of web applications."
      ],
      technologies: ["Python", "Django", "Django REST Framework", "SQL", "JavaScript", "HTML5/CSS3", "REST APIs"]
    },
    {
      id: "frazon-digital",
      role: "Web Developer Intern",
      company: "Frazon Digital Marketing",
      period: "Feb 2025 – Aug 2025",
      type: "Internship",
      location: "Remote / Hybrid",
      featured: true,
      color: "#a855f7",
      badge: "Modern Frontend & UI/UX",
      highlights: [
        "Designed and developed responsive business websites using HTML, CSS, JavaScript, and modern web development practices.",
        "Collaborated with the design and marketing teams to implement user-friendly, visually appealing interfaces aligned with client requirements.",
        "Optimized website performance, responsiveness, and cross-browser compatibility to improve user experience.",
        "Maintained and updated existing websites by fixing bugs, enhancing functionality, and implementing new features.",
        "Worked with Git and followed structured development workflows to deliver projects within deadlines."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "UI/UX", "Git", "Performance Optimization"]
    }
  ],

  projects: [
    {
      id: "jarvis-ai",
      title: "Jarvis AI Personal Assistant",
      subtitle: "AI Desktop Assistant with NLP & System Automation",
      tag: "AI & Automation",
      status: "Featured Production",
      accentColor: "#00f0ff",
      gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(168, 85, 247, 0.05))",
      description:
        "An AI-powered desktop personal assistant engineered using Python and Hugging Face language models for natural language interaction, OS-level automated task execution, and smart conversational assistance.",
      bulletPoints: [
        "Developed an AI-powered desktop personal assistant using Python and Hugging Face language models for natural language interactions.",
        "Implemented system automation features to launch desktop applications, execute user commands, and perform productivity tasks through text-based prompts.",
        "Integrated conversational capabilities including question answering, joke generation, and general assistance to enhance user experience.",
        "Designed a modular architecture to enable future integration of additional automation features and third-party APIs."
      ],
      stack: ["Python", "Hugging Face Transformers", "NLP", "PyAutoGUI", "Automation", "Speech/Text Engine"],
      github: "https://github.com/Aatheeshkumaran",
      livePreview: "interactive-terminal",
      metrics: {
        latency: "< 250ms response",
        accuracy: "96% intent match",
        automationActions: "20+ OS triggers"
      }
    },
    {
      id: "productivity-tracker",
      title: "Personal Productivity Tracker",
      subtitle: "Full-Stack Task & Analytics Management Platform",
      tag: "Full-Stack Web",
      status: "Production Ready",
      accentColor: "#10b981",
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(0, 240, 255, 0.05))",
      description:
        "A full-stack productivity ecosystem featuring interactive task scheduling, real-time status tracking, and a dynamic analytics dashboard providing actionable productivity metrics.",
      bulletPoints: [
        "Developed a personal productivity tracker for scheduling daily tasks, monitoring progress, and managing activities through an intuitive interface.",
        "Implemented task creation, status tracking, and progress monitoring features to improve productivity and organization.",
        "Built an analytics dashboard that summarizes completed, pending, and overdue tasks, providing users with actionable productivity insights.",
        "Designed a responsive and user-friendly interface with secure data management and CRUD functionality."
      ],
      stack: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "SQLite / MySQL", "Chart.js"],
      github: "https://github.com/Aatheeshkumaran",
      livePreview: "interactive-tasks",
      metrics: {
        efficiency: "+40% task focus",
        analytics: "Real-time burn-down",
        crudSpeed: "< 80ms execution"
      }
    },
    {
      id: "spatial-3d-portfolio",
      title: "Next-Gen 3D Interactive Portfolio",
      subtitle: "Creative Three.js WebGL & Cybernetic Design System",
      tag: "Creative Frontend & Three.js",
      status: "Live Experience",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.05))",
      description:
        "A trending futuristic portfolio featuring real-time Three.js geometry rendering, procedural particle fields, dynamic audio synthesizer, glassmorphism UI, and ultra-responsive media queries.",
      bulletPoints: [
        "Engineered real-time 3D geometries with Three.js supporting interactive rotation, morphing shapes, and particle fields.",
        "Built dynamic audio feedback using the Web Audio API with custom synthesizer waveforms and responsive volume toggling.",
        "Implemented adaptive fluid layouts catering seamlessly from mobile (320px) to 4K ultra-wide screens.",
        "Integrated interactive simulated Jarvis AI console and live task productivity widgets."
      ],
      stack: ["React 19", "Three.js", "WebGL", "CSS Modern Grid/Flex", "Web Audio API", "Lucide"],
      github: "https://github.com/Aatheeshkumaran",
      livePreview: "#hero",
      metrics: {
        fps: "60 FPS locked",
        responsiveness: "100% mobile-fluid",
        bundle: "Zero lag architecture"
      }
    },
    {
      id: "blockchain-verifier",
      title: "Cryptographic Credential Verifier",
      subtitle: "Tamper-Proof Verification & Smart Hash Engine",
      tag: "Blockchain & Web3",
      status: "Research & Prototype",
      accentColor: "#8b5cf6",
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.05))",
      description:
        "Decentralized credential validation engine exploring SHA-256 state hashing, distributed ledgers, and secure verification certificates based on advanced academic coursework.",
      bulletPoints: [
        "Constructed cryptographic hash chain validation for academic and professional certificate authenticity.",
        "Built REST endpoints using Django & Python to generate and verify verifiable digital signatures.",
        "Designed intuitive user UI to verify certificate hashes in seconds with instant cryptographic audit trails.",
        "Applied insights directly from IIT Kharagpur NPTEL and Coursera Blockchain certifications."
      ],
      stack: ["Python", "Cryptography", "REST APIs", "React", "Distributed Ledger Concepts"],
      github: "https://github.com/Aatheeshkumaran",
      livePreview: "#certifications",
      metrics: {
        hashAlgorithm: "SHA-256 verifiable",
        auditSpeed: "Instant < 100ms",
        security: "Immutable record"
      }
    }
  ],

  certifications: [
    {
      id: "nptel-blockchain",
      title: "Blockchain and Its Applications",
      issuer: "NPTEL — IIT Kharagpur",
      year: "2025",
      type: "Elite Engineering Credential",
      color: "#00f0ff",
      icon: "ShieldCheck",
      description:
        "Comprehensive certification covering decentralized ledger architectures, smart contract logic, consensus mechanisms, cryptographic hashing, and enterprise applications."
    },
    {
      id: "nptel-python",
      title: "Python for Data Science",
      issuer: "NPTEL — IIT Madras",
      year: "2025",
      type: "Advanced Technical Credential",
      color: "#10b981",
      icon: "Cpu",
      description:
        "Advanced course covering Python algorithmic structures, NumPy, Pandas data manipulation, statistical analysis, and machine learning pipelines."
    },
    {
      id: "coursera-blockchain",
      title: "Blockchain Basics",
      issuer: "Coursera",
      year: "2025",
      type: "Foundational Credential",
      color: "#a855f7",
      icon: "Award",
      description:
        "Fundamental principles of public/private blockchains, cryptography, transaction workflows, peer-to-peer networks, and decentralized application models."
    }
  ],

  skills: {
    categories: [
      {
        name: "Frontend & Creative 3D",
        icon: "Layout",
        color: "#00f0ff",
        items: [
          { name: "React.js", level: 92, tag: "Primary Framework" },
          { name: "Three.js & WebGL", level: 86, tag: "3D Graphics" },
          { name: "JavaScript (ES6+)", level: 94, tag: "Core Language" },
          { name: "HTML5 & Modern CSS3", level: 96, tag: "Semantic & Animations" },
          { name: "Responsive Web Design", level: 95, tag: "All Devices" },
          { name: "Bootstrap 5", level: 90, tag: "UI Framework" },
          { name: "REST API Integration", level: 92, tag: "Data Binding" }
        ]
      },
      {
        name: "Backend & Systems",
        icon: "Server",
        color: "#10b981",
        items: [
          { name: "Python", level: 95, tag: "Core Language" },
          { name: "Django", level: 90, tag: "Full-Stack Web" },
          { name: "Django REST Framework (DRF)", level: 88, tag: "API Architectures" },
          { name: "SQL (MySQL)", level: 88, tag: "Relational DB" },
          { name: "MongoDB", level: 82, tag: "NoSQL DB" },
          { name: "CRUD Architectures", level: 94, tag: "System Design" },
          { name: "Auth & Authorization", level: 90, tag: "Security & Sessions" }
        ]
      },
      {
        name: "UI/UX & Creative Design",
        icon: "Palette",
        color: "#ec4899",
        items: [
          { name: "Figma", level: 90, tag: "Interface Design" },
          { name: "Wireframing & Prototyping", level: 92, tag: "UX Architecture" },
          { name: "User-Centered Design", level: 90, tag: "Empathy & Flow" },
          { name: "Design Systems", level: 88, tag: "Component Scalability" },
          { name: "Micro-interactions", level: 92, tag: "Dynamic Motion" }
        ]
      },
      {
        name: "Developer Tools & Core Concepts",
        icon: "Terminal",
        color: "#f59e0b",
        items: [
          { name: "Git & GitHub", level: 94, tag: "Version Control" },
          { name: "Postman", level: 90, tag: "API Testing" },
          { name: "OOP (Object-Oriented)", level: 92, tag: "Architecture" },
          { name: "MVC Architecture", level: 92, tag: "Pattern" },
          { name: "NLP & Transformers", level: 84, tag: "AI Integration" }
        ]
      }
    ]
  },

  stats: [
    { label: "Internships Completed", value: "2", subtext: "Career Ladder & Frazon" },
    { label: "Core Tech Proficiency", value: "15+", subtext: "React, Three.js, Python, Django" },
    { label: "Engineering CGPA", value: "7.4", subtext: "BE CSE (Graduating 2026)" },
    { label: "Certifications", value: "3", subtext: "IIT Kharagpur, IIT Madras & Coursera" }
  ]
};
