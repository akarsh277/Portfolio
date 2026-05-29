/* =====================================================
   PORTFOLIO – ADVANCED SCRIPT
   ===================================================== */

// ---- DATA ----------------------------------------------------------------

const PROJECTS = [
  {
    title: "MediQueue",
    description:
      "An end-to-end healthcare queue management platform that streamlines patient registrations, doctor consultations, and pharmacy workflows through real-time, role-based dashboards.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI", "SQLite"],
    github: "https://github.com/akarsh277/MediQueue",
    live: "https://akarsh277.github.io/MediQueue/frontend/login.html",
    image: "assets/projects/mediqueue.jpg",
  },
  {
    title: "DisasterLink",
    description:
      "A real-time, centralized disaster response platform that coordinates emergency reporting, volunteer management, and live authority alerts to stream-line crisis operations.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
    github: "https://github.com/Disaster-Link/DisasterLink",
    live: "https://disaster-link.github.io/DisasterLink/",
    image: "assets/projects/DisasterLink.png",
  },
  {
    title: "CureBot",
    description:
      "AI-powered healthcare chatbot that analyzes user symptoms in real time and delivers preliminary medical guidance through a FastAPI-driven web interface.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
    github: "https://github.com/akarsh277/CureBot",
    live: "https://akarsh277.github.io/CureBot/",
    image: "assets/projects/chatbot1.jpeg",
  },
];

const SKILLS = [
  { name: "React", icon: "layout", category: "Frontend" },
  { name: "JavaScript", icon: "code-2", category: "Frontend" },
  { name: "HTML/CSS", icon: "layers", category: "Frontend" },
  { name: "FastAPI", icon: "server", category: "Backend" },
  { name: "Python OOP", icon: "terminal", category: "Backend" },
  { name: "PostgreSQL", icon: "database", category: "Backend" },
  { name: "Java DSA", icon: "cpu", category: "Core" },
  { name: "System Design", icon: "network", category: "Core" },
];

const EXPERIENCE = [
  {
    role: "Hackathon – Mind Sprint 2K25",
    company: "48-Hour National Level Hackathon - PSCMR College, Vijayawada.",
    period: "Dec 2025",
    desc: "Collaborated in a team to design and develop a functional prototype within 48 hours. Focused on backend logic and core feature implementation under strict time constraints.",
    certImage: "assets/certificates/Mindsprint Hackathon.jpg"
  },
  {
    role: "Hackathon – Srujana",
    company: "48-Hour State Level Hackathon - SVPEC College, Vizag.",
    period: "April 2026",
    desc: "Successfully worked in a team to design and develop a functional prototype within 48 hours, contributing to feature development, problem solving, and overall project execution under strict time constraints.",
    certImage: "assets/certificates/Srujana Hackathon.jpg"
  },
  {
    role: "Self-Driven Full Stack Projects",
    company: "Personal Development",
    period: "2024 – Present",
    desc: "Building and deploying projects using Java, Python, and modern web technologies. Actively strengthening Data Structures and backend development skills.",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering",
    school: "Pragati Engineering College",
    period: "2024 – 2028",
    desc: "Current CGPA: 8.86 / 10. Relevant Coursework: Data Structures, OOP, Database Management Systems.",
  },
];

const CERTIFICATIONS = [
  {
    title: "PROGRAMMING IN JAVA",
    provider: "NPTEL – IIT Kharagpur",
    description:
      "Elite certification with a consolidated score of 82%. Completed a 12-week proctored programme covering OOP, collections, exception handling, and core Java fundamentals.",
    year: "2025",
    logo: `<img src="assets/certificates/nptel.jpg" class="w-10 h-10 object-contain rounded-full" alt="NPTEL Logo">`,
    certImage: "assets/certificates/nptel java.jpeg"
  },
  {
    title: "WEB DEVELOPMENT WORKSHOP & HACKATHON",
    provider: "Brainovision",
    description:
      "Participated in a 2-day workshop and 24-hour hackathon on Web Application Development using Design Thinking and Innovation, collaborating on real-world problem solving and rapid project development.",
    year: "2025",
    logo: `<img src="assets/certificates/brainovision.jpg" class="w-full h-full object-cover rounded-full" alt="Brainovision Logo">`,
    certImage: "assets/certificates/Brain o vision workshop.jpg"
  },
  {
    title: "ESSENTIALS IN PYTHON",
    provider: "Scaler Academy",
    description:
      "Successfully completed a fundamentals course on Python programming, covering core syntax, control structures, and basic scripting applications.",
    year: "2025",
    logo: `<img src="assets/certificates/scaler.png" class="w-full h-full object-contain rounded-full" alt="Scaler Logo">`,
    certImage: "assets/certificates/Python scalar.jpg"
  },
  {
    title: "AI TOOLS WORKSHOP",
    provider: "Be10X",
    description:
      "Completed an AI Tools and ChatGPT workshop focused on practical AI-assisted workflows, productivity enhancement, data analysis, and debugging techniques.",
    year: "2026",
    logo: `<img src="assets/certificates/be10x.png" class="w-full h-full object-fill rounded-full" alt="Brainovision Logo">`,
    certImage: "assets/certificates/Be10x.jpg"
  },
];

// ---- HELPERS -------------------------------------------------------------

/** Clamp value between min and max */
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// ---- CUSTOM CURSOR -------------------------------------------------------

function initCursor() {
  const ring = document.getElementById("cursor-ring");
  if (!ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth trailing animation via requestAnimationFrame
  function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animate);
  }
  animate();

  // Enlarge cursor ring ONLY on explicitly defined small interactive elements
  function attachCursorHover() {
    const interactiveSelector = "#logo, .btn-hover-line, nav a, .resume-btn, .github-btn, #back-to-top, #submit-btn, .social-link, footer a";

    document.querySelectorAll(interactiveSelector).forEach(el => {
      // Avoid attaching multiple times
      if (el.dataset.cursorAttached) return;
      el.dataset.cursorAttached = "true";

      el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
    });
  }

  // Initial attach
  attachCursorHover();

  // Re-attach after dynamic content injection
  // Uses MutationObserver to catch elements added by JS
  const observer = new MutationObserver(() => attachCursorHover());
  observer.observe(document.body, { childList: true, subtree: true });
}

// ---- SCROLL PROGRESS BAR -------------------------------------------------

function initScrollProgress() {
  const progressCircle = document.getElementById("progress-circle");
  if (!progressCircle) return;
  const circumference = 100.53; // 2 * Math.PI * 16

  function updateProgress() {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) {
      progressCircle.style.strokeDashoffset = circumference;
      return;
    }
    const scrollPercent = scrolled / maxScroll;
    const offset = circumference - (scrollPercent * circumference);
    progressCircle.style.strokeDashoffset = clamp(offset, 0, circumference);
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

// ---- BACK TO TOP ---------------------------------------------------------

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// ---- SCROLL SPY (active nav) --------------------------------------------

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[data-section]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(a => {
            a.classList.toggle("active", a.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(s => observer.observe(s));
}

// ---- PARTICLE CANVAS (hero) ---------------------------------------------

// ---- PARTICLE CANVAS (hero) ---------------------------------------------

function initParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let particles = [];
  const maxParticles = 65;
  const connectionDist = 120;
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    heroSection.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fill();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDist) {
          const alpha = (1 - dist / connectionDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ---- TYPEWRITER EFFECT ---------------------------------------------------

function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const phrases = [
    "Full Stack Developer.",
    "FastAPI Engineer.",
    "React Enthusiast.",
    "Problem Solver.",
    "Java DSA Practitioner.",
  ];

  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (deleting) {
      charIndex--;
      el.textContent = current.substring(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 500);
      } else {
        setTimeout(tick, 40);
      }
    } else {
      charIndex++;
      el.textContent = current.substring(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
      } else {
        setTimeout(tick, 80);
      }
    }
  }
  tick();
}

// ---- ANIMATED COUNTERS ---------------------------------------------------

function initCounters() {
  const elements = document.querySelectorAll(".stat-value[data-target]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 30);
      });
    },
    { threshold: 0.5 }
  );
  elements.forEach(el => observer.observe(el));
}

// ---- SKILL CARD 3-D TILT -------------------------------------------------

function init3DTilt(card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = clamp(((y - cy) / cy) * 8, -8, 8);
    const rotY = clamp(((x - cx) / cx) * -8, -8, 8);
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
}

// ---- INJECT SKILLS -------------------------------------------------------

function injectSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  SKILLS.forEach((skill, i) => {
    const div = document.createElement("div");
    div.className = "glass p-6 rounded-2xl flex flex-col gap-4 group skill-card transition-all reveal";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-all">
        <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-900">${skill.name}</h3>
        <p class="text-[10px] text-zinc-500 uppercase tracking-wider">${skill.category}</p>
      </div>
    `;
    grid.appendChild(div);
    init3DTilt(div);
  });
}

// ---- INJECT PROJECTS -----------------------------------------------------

function injectProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  PROJECTS.forEach((project, i) => {
    const div = document.createElement("div");
    div.className = "project-card reveal transition-all duration-300";
    div.style.transitionDelay = `${i * 120}ms`;

    const techTags = project.tech.map(t =>
      `<span class="project-tag">${t}</span>`
    ).join(` <span class="project-tag"><span>,</span></span> `);

    const liveBtn = project.live ? `
      <a href="${project.live}" target="_blank" class="github-btn" style="background-color: rgba(255, 255, 255, 0.1); border-color: transparent; color: white;">
        Live Preview ↗
      </a>
    ` : '';

    div.innerHTML = `
      <div class="project-card-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-card-body">
        <div class="mb-1">${techTags}</div>
        <h3 class="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
          ${project.title}
        </h3>
        <div class="flex items-center gap-4 mt-4">
          <a href="${project.github}" target="_blank" class="github-btn">
            GitHub →
          </a>
          ${liveBtn}
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

// ---- INJECT CERTIFICATIONS -----------------------------------------------

function injectCertifications() {
  const grid = document.getElementById("certifications-grid");
  if (!grid) return;
  CERTIFICATIONS.forEach((cert, i) => {
    const div = document.createElement("div");
    div.className = "glass rounded-3xl p-8 flex flex-col justify-between group border border-black/5 hover:border-black/10 transition-all certification-card reveal relative overflow-hidden cursor-pointer";
    div.style.transitionDelay = `${i * 100}ms`;
    
    if (cert.certImage) {
      div.onclick = () => showModal(cert.certImage);
    }
    
    div.innerHTML = `
      <div class="relative z-10 transition-all duration-300 group-hover:blur-sm group-hover:opacity-40 flex flex-col justify-between h-full">
        <div>
          <div class="w-12 h-12 rounded-full overflow-hidden border border-zinc-100 bg-white flex items-center justify-center mb-6 shadow-sm">
            ${cert.logo}
          </div>
          <p class="text-zinc-600 text-base leading-relaxed mb-6">${cert.description}</p>
        </div>
        <div>
          <h3 class="text-2xl font-black tracking-tight text-black uppercase mb-1">${cert.title}</h3>
          <p class="text-zinc-500 text-xs font-semibold">${cert.provider}</p>
        </div>
      </div>
      
      <!-- Hover Overlay -->
      <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="bg-black text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          View Certificate <i data-lucide="external-link" class="w-4 h-4"></i>
        </span>
      </div>
    `;
    grid.appendChild(div);
  });
}

// ---- INJECT EXPERIENCE ---------------------------------------------------

function injectExperience() {
  const list = document.getElementById("experience-list");
  if (!list) return;
  EXPERIENCE.forEach((exp, i) => {
    const div = document.createElement("div");
    div.className = "p-8 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col gap-4 mb-6 reveal hover:border-white/20 transition-all duration-300";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="flex items-center relative pr-4">
          <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span class="w-6 h-[1px] bg-zinc-700"></span>
        </div>
        <span class="bg-white text-black text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase">${exp.period}</span>
      </div>
      <h4 class="text-3xl font-black tracking-tight text-white uppercase mt-2">${exp.role}</h4>
      <p class="text-zinc-500 text-sm font-medium">@ ${exp.company}</p>
      <p class="text-zinc-400 text-base leading-relaxed mt-2">${exp.desc}</p>
      ${exp.certImage ? `
      <div class="mt-4">
        <button onclick="showModal('${exp.certImage}')" class="github-btn cursor-pointer">
          VIEW →
        </button>
      </div>` : ""}
    `;
    list.appendChild(div);
  });
}

// ---- INJECT EDUCATION ----------------------------------------------------

function injectEducation() {
  const list = document.getElementById("education-list");
  if (!list) return;
  EDUCATION.forEach((edu, i) => {
    const div = document.createElement("div");
    div.className = "glass p-8 rounded-3xl border border-black/5 flex flex-col gap-4 mb-6 reveal shadow-sm hover:border-black/10 transition-all duration-300";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="flex items-center relative pr-4">
          <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
          <span class="w-6 h-[1px] bg-zinc-300"></span>
        </div>
        <span class="bg-black text-white text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase">${edu.period}</span>
      </div>
      <h4 class="text-3xl font-black tracking-tight text-zinc-950 uppercase mt-2">${edu.degree}</h4>
      <p class="text-zinc-500 text-sm font-medium">@ ${edu.school}</p>
      <p class="text-zinc-600 text-base leading-relaxed mt-2">${edu.desc}</p>
    `;
    list.appendChild(div);
  });
}

// ---- CERTIFICATE MODAL ---------------------------------------------------

function initModal() {
  const modal = document.getElementById("cert-modal");
  const closeBtn = document.getElementById("close-modal");
  
  if (!modal || !closeBtn) return;
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("opacity-100", "pointer-events-auto");
    modal.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      document.getElementById("modal-img").src = "";
    }, 300);
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest('.relative') === null) {
      closeBtn.click();
    }
  });
}

window.showModal = function(imageSrc) {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  
  if (!modal || !modalImg) return;
  
  modalImg.src = imageSrc;
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
};

// ---- SCROLL REVEAL -------------------------------------------------------

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ---- HERO INTRO SEQUENCE / SPLASH SCREEN ---------------------------------

async function initSplash() {
  const aboutSplash = document.getElementById("about-splash");
  if (aboutSplash) {
    const textEl = document.getElementById("loading-text");
    const cursorEl = document.getElementById("loading-cursor");

    if (textEl && cursorEl) {
      await new Promise(r => setTimeout(r, 400));

      // Reveal text: cursor stays left, text unmasks from left to right
      textEl.style.transition = "clip-path 1.2s cubic-bezier(0.76, 0, 0.24, 1)";
      textEl.style.clipPath = "inset(0 0 0 0)";

      await new Promise(r => setTimeout(r, 1600));

      // Swallow text: cursor moves right, text masks from left to right
      textEl.style.transition = "clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)";
      cursorEl.style.transition = "left 1s cubic-bezier(0.76, 0, 0.24, 1)";

      textEl.style.clipPath = "inset(0 0 0 100%)";
      cursorEl.style.left = "100%";

      await new Promise(r => setTimeout(r, 1000));
    }

    aboutSplash.style.opacity = "0";
    aboutSplash.style.transform = "translateY(-100%)";
    document.body.classList.remove("loading");
    setTimeout(() => { aboutSplash.remove(); }, 800);
    return;
  }

  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeBall = document.getElementById("welcome-ball");
  const welcomeText = document.getElementById("welcome-text");

  if (!welcomeScreen) {
    document.body.classList.remove("loading");
    initHeroIntro();
    return;
  }

  // 1. Wait for the ball bounce animation to complete (1.4 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1400));

  // 2. Morph the ball into a horizontal light line
  if (welcomeBall) {
    welcomeBall.classList.add("line");
  }

  // Wait for the line morph to complete (600ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 3. Fade in and stretch the word "WELCOME" while dissolving the line
  if (welcomeText) {
    welcomeText.classList.remove("opacity-0", "scale-95");
    welcomeText.classList.add("reveal-active");
  }

  if (welcomeBall) {
    welcomeBall.classList.add("dissolve");
  }

  // 4. Hold the "WELCOME" title on screen (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 5. Slide welcome curtain up and fade text out
  if (welcomeText) {
    welcomeText.style.opacity = "0";
    welcomeText.style.transform = "scale(1.05)";
    welcomeText.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
  }

  welcomeScreen.classList.add("fade-out");
  document.body.classList.remove("loading");

  // Start hero entrance sequence slightly after curtain starts sliding up
  setTimeout(() => {
    initHeroIntro();
  }, 200);

  // 6. Clean up element from DOM
  setTimeout(() => {
    welcomeScreen.remove();
  }, 1200);
}

function initHeroIntro() {
  document.body.classList.add("intro-done");
}

function initHeaderScroll() {
  const headerInner = document.getElementById("header-inner");
  if (!headerInner) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerInner.classList.remove("py-4");
      headerInner.classList.add("py-2.5");
    } else {
      headerInner.classList.remove("py-2.5");
      headerInner.classList.add("py-4");
    }
  }, { passive: true });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const targetId = href.startsWith('index.html') ? href.substring(10) : href;
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2600; // Extremely slow, smooth scroll (2.6s)
        let start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const t = progress / duration;
          const ease = 1 - Math.pow(1 - t, 5); // easeOutQuint for slow-motion end
          window.scrollTo(0, startPosition + distance * Math.min(ease, 1));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }
        window.requestAnimationFrame(step);
      }
    });
  });
}

// ---- CONTACT FORM --------------------------------------------------------

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  if (!form || !submitBtn) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending…";

    const formData = {
      name: this.querySelector('input[type="text"]').value.trim(),
      email: this.querySelector('input[type="email"]').value.trim(),
      message: this.querySelector("textarea").value.trim(),
    };

    emailjs.send("service_4nhyjzl", "template_nwrbvzj", formData)
      .then(() => {
        submitBtn.innerText = "Message Sent! ✓";
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS:", err);
        submitBtn.innerText = "Failed – Try Again";
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i data-lucide="send" class="w-4 h-4"></i>';
          lucide.createIcons();
        }, 2500);
      });
  });
}

// ---- LOGO CLICK RELOAD ---------------------------------------------------

function initLogoClickReload() {
  const logo = document.getElementById("logo");
  if (!logo) return;

  logo.addEventListener("click", (e) => {
    e.preventDefault();
    const href = logo.getAttribute("href");
    if (href === "#home" || window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
      window.location.href = "index.html";
      setTimeout(() => {
        window.location.reload();
      }, 50);
    } else {
      window.location.href = "index.html";
    }
  });
}


// ---- BOOT ----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // Icons (first pass – static HTML)
  lucide.createIcons();

  // Inject dynamic content
  injectSkills();
  injectProjects();
  injectCertifications();
  injectExperience();
  injectEducation();

  // Re-render icons for injected content
  lucide.createIcons();

  // Features
  initCursor();
  initScrollProgress();
  initBackToTop();
  initScrollSpy();
  initParticles();
  initTypewriter();
  initCounters();
  initModal();
  initReveal();
  initSplash();
  initContactForm();
  initHeaderScroll();
  initSmoothScroll();
  initLogoClickReload();

  // Initialize 3D tilts for static tech stack cards (e.g. in about.html)
  document.querySelectorAll(".tech-card").forEach((card) => {
    init3DTilt(card);
  });

  console.log("✨ Portfolio loaded – all systems go.");
});
