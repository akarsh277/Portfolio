/* =====================================================
   PORTFOLIO – ADVANCED SCRIPT
   ===================================================== */

// ---- DATA ----------------------------------------------------------------

const PROJECTS = [
  {
    title: "CureBot 🩺",
    description:
      "AI-powered healthcare chatbot that analyzes user symptoms in real time and delivers preliminary medical guidance through a FastAPI-driven web interface.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
    github: "https://akarsh277.github.io/CureBot/",
    live: "https://akarsh277.github.io/CureBot/",
    image: "images/chatbot1.jpeg",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with HTML, CSS & Vanilla JavaScript. Features responsive design, dynamic content rendering, smooth animations, and modern glassmorphism UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://akarsh277.github.io/Portfolio/",
    live: "https://akarsh277.github.io/Portfolio/",
    image: "images/portifolio.jpg",
  },
  {
    title: "Algoverse",
    description:
      "Interactive platform for visualizing Data Structures and Algorithms. Helps students understand complex Java DSA concepts through animation and step-by-step execution.",
    tech: ["Java", "Spring Boot", "React", "Framer Motion"],
    github: "#",
    image: "https://picsum.photos/seed/algo/800/600",
  },
];

const SKILLS = [
  { name: "React",         icon: "layout",   category: "Frontend" },
  { name: "JavaScript",   icon: "code-2",   category: "Frontend" },
  { name: "HTML/CSS",     icon: "layers",   category: "Frontend" },
  { name: "FastAPI",      icon: "server",   category: "Backend"  },
  { name: "Python OOP",   icon: "terminal", category: "Backend"  },
  { name: "PostgreSQL",   icon: "database", category: "Backend"  },
  { name: "Java DSA",     icon: "cpu",      category: "Core"     },
  { name: "System Design",icon: "network",  category: "Core"     },
];

const EXPERIENCE = [
  {
    role: "Hackathon Participant – Mind Sprint 2K25",
    company: "36-Hour National Level Hackathon",
    period: "Dec 2025",
    desc: "Collaborated in a team to design and develop a functional prototype within 36 hours. Focused on backend logic and core feature implementation under strict time constraints.",
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
    school:  "Pragati Engineering College",
    period:  "2024 – 2028",
    desc:    "Current CGPA: 8.86 / 10. Relevant Coursework: Data Structures, OOP, Database Management Systems.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Programming in Java",
    provider: "NPTEL – IIT Kharagpur",
    description:
      "Elite certification with a consolidated score of 82%. Completed a 12-week proctored programme covering OOP, collections, exception handling, and core Java fundamentals.",
    year: "Jul – Oct 2025",
    image: "images/java certificate.jpg",
  },
  {
    title: "Python Course for Beginners",
    provider: "Scaler Topics",
    description:
      "Completed 121 video tutorials, 16 modules, and 10 coding challenges. Covered Python fundamentals, OOP principles, and practical programming concepts.",
    year: "August 2025",
    image: "images/python certificate.jpg",
  },
];

// ---- HELPERS -------------------------------------------------------------

/** Clamp value between min and max */
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// ---- CUSTOM CURSOR -------------------------------------------------------

function initCursor() {
  const dot  = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    dot.style.left  = e.clientX + "px";
    dot.style.top   = e.clientY + "px";

    // Smooth ring lag
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
  });

  // Optional: smoother ring animation via rAF
  function animateRing() {
    const style = getComputedStyle(ring);
    const curX  = parseFloat(style.left)  || 0;
    const curY  = parseFloat(style.top)   || 0;
    ring.style.left = curX + "px";
    ring.style.top  = curY + "px";
    requestAnimationFrame(animateRing);
  }

  // Make ring bigger over interactive elements
  document.querySelectorAll("a, button, input, textarea, .skill-card, .project-card, .certification-card")
    .forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
    });
}

// ---- SCROLL PROGRESS BAR -------------------------------------------------

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = ((scrolled / maxScroll) * 100) + "%";
  }, { passive: true });
}

// ---- BACK TO TOP ---------------------------------------------------------

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
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

function initParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx   = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COUNT = 60;

  function createParticle() {
    const angle = Math.random() * Math.PI * 2;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: Math.cos(angle) * (0.2 + Math.random() * 0.4),
      vy: Math.sin(angle) * (0.2 + Math.random() * 0.4),
      r: 1 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.5,
      color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
    };
  }

  for (let i = 0; i < COUNT; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = "#3b82f6";
          ctx.globalAlpha = (1 - dist / 120) * 0.15;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
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
      el.textContent = current.slice(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 40);
    } else {
      el.textContent = current.slice(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 80);
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
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        let current  = 0;
        const step   = Math.ceil(target / 40);
        const timer  = setInterval(() => {
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
    const x  = e.clientX - rect.left;
    const y  = e.clientY - rect.top;
    const cx = rect.width  / 2;
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
      <div class="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
        <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
      </div>
      <div>
        <h3 class="font-semibold text-lg">${skill.name}</h3>
        <p class="text-[10px] text-slate-500 uppercase tracking-wider">${skill.category}</p>
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
    div.className = "glass rounded-3xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all project-card reveal";
    div.style.transitionDelay = `${i * 150}ms`;

    const liveBtn = project.live
      ? `<a href="${project.live}" target="_blank" class="p-2 rounded-full glass hover:bg-white/10 transition-all" title="Live Demo">
           <i data-lucide="external-link" class="w-4 h-4"></i>
         </a>`
      : "";

    div.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-8">
          ${project.tech.map(t => `<span class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-slate-300">${t}</span>`).join("")}
        </div>
        <div class="flex items-center justify-between">
          <a href="${project.github}" target="_blank" class="flex items-center gap-2 text-sm font-semibold hover:text-[#3b82f6] transition-colors">
            <i data-lucide="github" class="w-4 h-4"></i> Source Code
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
    div.className = "glass rounded-3xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all certification-card reveal";
    div.style.transitionDelay = `${i * 150}ms`;
    div.innerHTML = `
      <div class="relative h-56 overflow-hidden cursor-pointer view-cert-btn" data-img="${cert.image}">
        <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover transition-transform duration-700 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span class="text-white text-sm font-semibold glass px-4 py-2 rounded-full">View Certificate</span>
        </div>
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${cert.title}</h3>
        <p class="text-[#3b82f6] text-sm font-semibold mb-4">${cert.provider}</p>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">${cert.description}</p>
        <span class="text-[12px] font-bold px-4 py-2 rounded-full bg-white/5 text-slate-300">Completed: ${cert.year}</span>
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
    div.className = "relative pl-8 border-l border-white/10 reveal";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
      <div class="timeline-dot bg-[#3b82f6]"></div>
      <span class="text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest mb-1 block">${exp.period}</span>
      <h4 class="text-xl font-bold mb-1">${exp.role}</h4>
      <p class="text-slate-400 text-sm mb-3">${exp.company}</p>
      <p class="text-slate-500 text-sm leading-relaxed">${exp.desc}</p>
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
    div.className = "relative pl-8 border-l border-white/10 reveal";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
      <div class="timeline-dot bg-[#8b5cf6]" style="box-shadow:0 0 14px rgba(139,92,246,0.7)"></div>
      <span class="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-widest mb-1 block">${edu.period}</span>
      <h4 class="text-xl font-bold mb-1">${edu.degree}</h4>
      <p class="text-slate-400 text-sm mb-3">${edu.school}</p>
      <p class="text-slate-500 text-sm leading-relaxed">${edu.desc}</p>
    `;
    list.appendChild(div);
  });
}

// ---- CERTIFICATE MODAL ---------------------------------------------------

function initModal() {
  const modal       = document.getElementById("cert-modal");
  const modalImg    = document.getElementById("modal-img");
  const closeModal  = document.getElementById("close-modal");
  const prevBtn     = document.getElementById("prev-cert");
  const nextBtn     = document.getElementById("next-cert");
  const downloadBtn = document.getElementById("download-cert");
  if (!modal) return;

  const certImages = CERTIFICATIONS.map(c => c.image);
  let currentIndex = 0;

  function openModal() {
    modalImg.src = certImages[currentIndex];
    downloadBtn.href = certImages[currentIndex];
    modal.classList.remove("opacity-0", "pointer-events-none");
  }
  function closeModalFn() {
    modal.classList.add("opacity-0", "pointer-events-none");
  }

  document.addEventListener("click", (e) => {
    const target = e.target.closest(".view-cert-btn");
    if (target) {
      const img = target.dataset.img;
      currentIndex = certImages.indexOf(img);
      if (currentIndex === -1) currentIndex = 0;
      openModal();
    }
  });

  closeModal.addEventListener("click", closeModalFn);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModalFn(); });
  nextBtn.addEventListener("click", () => { currentIndex = (currentIndex + 1) % certImages.length; openModal(); });
  prevBtn.addEventListener("click", () => { currentIndex = (currentIndex - 1 + certImages.length) % certImages.length; openModal(); });

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("opacity-0")) return;
    if (e.key === "Escape")      closeModalFn();
    if (e.key === "ArrowRight")  nextBtn.click();
    if (e.key === "ArrowLeft")   prevBtn.click();
  });
}

// ---- SCROLL REVEAL -------------------------------------------------------

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ---- HERO INTRO SEQUENCE -------------------------------------------------

function initHeroIntro() {
  // Small delay so transitions are visible
  setTimeout(() => document.body.classList.add("intro-done"), 100);
}

// ---- CONTACT FORM --------------------------------------------------------

function initContactForm() {
  const form      = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  if (!form || !submitBtn) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBtn.disabled   = true;
    submitBtn.innerText  = "Sending…";

    const formData = {
      name:    this.querySelector('input[type="text"]').value.trim(),
      email:   this.querySelector('input[type="email"]').value.trim(),
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
  initHeroIntro();
  initContactForm();

  console.log("✨ Portfolio loaded – all systems go.");
});
