// --- Data ---
console.log("Script running");
const PROJECTS = [
  {
    title: "CureBot🩺",
    description:
      "CureBot is an AI-powered healthcare chatbot that analyzes user symptoms in real time and delivers preliminary medical guidance through a FastAPI-driven web interface.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
    github: "https://akarsh277.github.io/CureBot/",
    live: "https://akarsh277.github.io/CureBot/",
    image: "images/chatbot1.jpeg",
  },
  {
    title: "Portifolio Website",
    description:
      "Personal portfolio website built using HTML, CSS, and Vanilla JavaScript. Features responsive design, dynamic content rendering, smooth animations, and modern glassmorphism UI styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: " https://akarsh277.github.io/Portfolio/",
    live: " https://akarsh277.github.io/Portfolio/",
    image: "images/portifolio.jpg",
  },
  {
    title: "Algoverse",
    description:
      "An interactive platform for visualizing Data Structures and Algorithms. Built to help students understand complex Java DSA concepts through animation.",
    tech: ["Java", "Spring Boot", "React", "Framer Motion"],
    github: "#",
    image: "https://picsum.photos/seed/algo/800/600",
  },
];

const SKILLS = [
  { name: "React", icon: "layout", category: "Frontend" },
  { name: "JavaScript", icon: "code-2", category: "Frontend" },
  { name: "HTML/CSS", icon: "layout", category: "Frontend" },
  { name: "FastAPI", icon: "server", category: "Backend" },
  { name: "Python OOP", icon: "terminal", category: "Backend" },
  { name: "PostgreSQL", icon: "database", category: "Backend" },
  { name: "Java DSA", icon: "cpu", category: "Core" },
  { name: "System Design", icon: "server", category: "Core" },
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
    degree: "B.Tech - Computer Science Engineering",
    school: "Pragati Engineering College",
    period: "2024 - 2028",
    desc: "Current CGPA: 8.86/10. Relevant Coursework: Data Structures, Object-Oriented Programming, Database Management Systems.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Programming in Java",
    provider: "NPTEL - IIT Kharagpur",
    description:
      "Elite certification with a consolidated score of 82%. Completed a 12-week proctored program covering OOP, collections, exception handling, and core Java fundamentals.",
    year: "Jul - Oct 2025",
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Inject Skills
  const skillsGrid = document.getElementById("skills-grid");
  SKILLS.forEach((skill, index) => {
    const div = document.createElement("div");
    div.className =
      "glass p-6 rounded-2xl flex flex-col gap-4 group skill-card transition-all reveal";
    div.style.transitionDelay = `${index * 150}ms`;
    div.innerHTML = `
            <div class="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
                <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
            </div>
            <div>
                <h3 class="font-semibold text-lg">${skill.name}</h3>
                <p class="text-[10px] text-slate-500 uppercase tracking-wider">${skill.category}</p>
            </div>
        `;
    skillsGrid.appendChild(div);
  });

  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * -6;

      card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
    });
  });
  // Inject Projects
  const projectsGrid = document.getElementById("projects-grid");
  PROJECTS.forEach((project, index) => {
    const div = document.createElement("div");
    div.className =
      "glass rounded-3xl overflow-hidden group border-white/5 hover:border-white/20 transition-all project-card reveal";
    div.style.transitionDelay = `${index * 150}ms`;
    div.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
                <p class="text-slate-400 text-sm mb-6 leading-relaxed">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-8">
                    ${project.tech.map((t) => `<span class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-slate-300">${t}</span>`).join("")}
                </div>
                <div class="flex items-center justify-between">
                    <a href="${project.github}" target="_blank" class="flex items-center gap-2 text-sm font-semibold hover:text-[#3b82f6] transition-colors">
                        <i data-lucide="github" class="w-4.5 h-4.5"></i>
                        Source Code
                    </a>
                    <a href="${project.live}" target="_blank" class="p-2 rounded-full glass hover:bg-white/10 transition-all">
                        <i data-lucide="external-link" class="w-4.5 h-4.5"></i>
                    </a>
                </div>
            </div>
        `;
    projectsGrid.appendChild(div);
  });

  // Inject Certifications
  const certGrid = document.getElementById("certifications-grid");

  CERTIFICATIONS.forEach((cert, index) => {
    const div = document.createElement("div");
    div.className =
      "glass rounded-3xl overflow-hidden group border-white/5 hover:border-white/20 transition-all certification-card reveal";

    div.style.transitionDelay = `${index * 150}ms`;

    div.innerHTML = `
        <div class="relative h-56 overflow-hidden">
            <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        </div>
        <div class="p-8">
            <h3 class="text-2xl font-bold mb-3">${cert.title}</h3>
            <p class="text-[#3b82f6] text-sm font-semibold mb-4">${cert.provider}</p>
            <p class="text-slate-400 text-sm mb-6 leading-relaxed">${cert.description}</p>
            <span class="text-[12px] font-bold px-4 py-2 rounded-full bg-white/5 text-slate-300">
                Completed: ${cert.year}
            </span>
        </div>
    `;

    certGrid.appendChild(div);
  });

  // Certificate Modal Logic (Advanced)

  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.getElementById("close-modal");
  const prevBtn = document.getElementById("prev-cert");
  const nextBtn = document.getElementById("next-cert");
  const downloadBtn = document.getElementById("download-cert");

  let currentIndex = 0;

  // Get certificate images dynamically
  const certImages = CERTIFICATIONS.map((cert) => cert.image);

  // Open modal
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-cert-btn")) {
      const imgSrc = e.target.getAttribute("data-img");
      currentIndex = certImages.indexOf(imgSrc);
      openModal();
    }
  });

  function openModal() {
    modalImg.src = certImages[currentIndex];
    downloadBtn.href = certImages[currentIndex];

    modal.classList.remove("opacity-0", "pointer-events-none");
  }

  function closeModalFunc() {
    modal.classList.add("opacity-0", "pointer-events-none");
  }

  // Close button
  closeModal.addEventListener("click", closeModalFunc);

  // Click outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalFunc();
  });

  // Next
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % certImages.length;
    openModal();
  });

  // Previous
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + certImages.length) % certImages.length;
    openModal();
  });

  // ESC + Arrow keys
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("opacity-0")) return;

    if (e.key === "Escape") closeModalFunc();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });
  // Inject Experience
  const expList = document.getElementById("experience-list");
  EXPERIENCE.forEach((exp, i) => {
    const div = document.createElement("div");
    div.className = "relative pl-8 border-l border-white/10 reveal";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
            <div class="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span class="text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest mb-1 block">${exp.period}</span>
            <h4 class="text-xl font-bold mb-1">${exp.role}</h4>
            <p class="text-slate-400 text-sm mb-3">${exp.company}</p>
            <p class="text-slate-500 text-sm leading-relaxed">${exp.desc}</p>
        `;
    expList.appendChild(div);
  });

  // Inject Education
  const eduList = document.getElementById("education-list");
  EDUCATION.forEach((edu, i) => {
    const div = document.createElement("div");
    div.className = "relative pl-8 border-l border-white/10 reveal";
    div.style.transitionDelay = `${i * 100}ms`;
    div.innerHTML = `
            <div class="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
            <span class="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-widest mb-1 block">${edu.period}</span>
            <h4 class="text-xl font-bold mb-1">${edu.degree}</h4>
            <p class="text-slate-400 text-sm mb-3">${edu.school}</p>
            <p class="text-slate-500 text-sm leading-relaxed">${edu.desc}</p>
        `;
    eduList.appendChild(div);
  });

  // Re-run Lucide for dynamic content
  lucide.createIcons();

  // --- Animations ---

  // Hero Intro Sequence
  document.body.classList.add("intro-active");

  // Scroll Reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  console.log("Form element:", contactForm); // Debug line

  if (contactForm && submitBtn) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      console.log("Form submit intercepted"); // Debug line

      submitBtn.disabled = true;
      submitBtn.innerText = "Sending...";

      const formData = {
        name: this.querySelector('input[type="text"]').value.trim(),
        email: this.querySelector('input[type="email"]').value.trim(),
        message: this.querySelector("textarea").value.trim(),
      };

      emailjs
        .send("service_4nhyjzl", "template_nwrbvzj", formData)
        .then(() => {
          submitBtn.innerText = "Message Sent!";
          contactForm.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          submitBtn.innerText = "Failed!";
        })
        .finally(() => {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML =
              'Send Message <i data-lucide="send" class="w-4.5 h-4.5"></i>';
            lucide.createIcons();
          }, 2000);
        });
    });
  }
});
