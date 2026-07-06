import projectFood from "@/assets/project-food.jpg";
import projectInventory from "@/assets/project-inventory.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import projectStaySync from "@/assets/project-staysync.jpg";
import projectLabel from "@/assets/project-label.jpg";
import projectCare from "@/assets/project-carebridge.jpg";
import projectAR from "@/assets/project-ar.jpg";

export const profile = {
  name: "Goutami Nuchu",
  shortName: "Goutami",
  location: "Hyderabad, India",
  email: "gouthaminurchu@gmail.com",
  phone: "+91 93914 90703",
  resumeUrl: "#",
  roll: "25075A3203",
  socials: {
    github: "https://github.com/gautami1407",
    linkedin: "https://in.linkedin.com/in/goutami-nuchu-b780a9285",
    leetcode: "https://leetcode.com/u/gautami1407/",
    hackerrank: "https://www.hackerrank.com/profile/gouthaminurchu",
  },
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Cloud Computing Enthusiast",
    "Product Builder",
    "Python Developer",
    "Prompt Engineer",
  ],
  summary:
    "I build at the intersection of AI, cloud, and product — turning hard problems into elegant software. From training models to shipping full-stack interfaces, I care about craft, performance, and the human on the other side of the screen.",
};

export const orbitTech = ["Python", "AWS", "AI", "Git", "React", "Docker", "Linux", "Cloud"];

export const experiences = [
  {
    role: "VishwaM AI Intern",
    company: "Swecha — VishwaM AI",
    location: "Hyderabad, India",
    period: "2025 · Internship",
    description:
      "Worked on applied ML, prompt engineering, and collaborative AI tooling. Built data pipelines, ran model experiments, and shipped features alongside a small team.",
    impact: [
      "Prototyped LLM-powered workflows that cut manual data prep time",
      "Contributed to open, community-driven AI research at Swecha",
      "Collaborated over GitHub with async reviews and clean PR hygiene",
    ],
    skills: ["Machine Learning", "Python", "Pandas", "NumPy", "Prompt Engineering", "Google Colab", "GitHub"],
  },
  {
    role: "STEM Engineer Intern",
    company: "STEMX Education",
    location: "Hyderabad, India",
    period: "6 Months",
    description:
      "Designed hands-on STEM curriculum across robotics, electronics, IoT, and coding. Mentored students and led workshops centered on project-based learning.",
    impact: [
      "Mentored 100+ students through robotics & coding project builds",
      "Ran innovation workshops that turned classroom theory into working prototypes",
      "Authored lesson kits reused across cohorts",
    ],
    skills: ["Python", "Arduino", "IoT", "Robotics", "Electronics", "Mentorship"],
  },
];

export const projects = [
  {
    title: "AI Food Label Analyzer",
    tagline: "Computer vision + LLM that decodes nutrition labels in seconds.",
    image: projectFood,
    tags: ["Python", "Computer Vision", "LLM", "OCR"],
    challenge: "Food labels are dense, inconsistent, and hard to compare across brands.",
    solution:
      "OCR the label, structure the fields with an LLM, and rank the product against user-defined health goals — all from a single photo.",
    features: [
      "Camera → OCR → structured nutrition JSON",
      "LLM-powered dietary suggestions",
      "Allergen and additive warnings",
      "Comparison view across scanned products",
    ],
    stack: ["Python", "OpenCV", "Tesseract", "OpenAI API", "Streamlit"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "StaySync — Hostel Management",
    tagline: "Modern hostel ops — rooms, payments, residents, analytics.",
    image: projectStaySync,
    tags: ["Next.js", "Tailwind", "MySQL"],
    challenge: "Hostel admins juggle spreadsheets, WhatsApp updates, and paper receipts.",
    solution:
      "A single dashboard for room allocation, payments, notices, and resident lifecycle — with role-based access for admins and students.",
    features: [
      "Real-time room availability grid",
      "Payments + receipt generation",
      "Resident CRUD with document uploads",
      "Admin analytics dashboard",
    ],
    stack: ["Next.js", "Tailwind", "MySQL", "Prisma"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "Label Padega Sabh",
    tagline: "Smart labeling utility for fast, consistent product tagging.",
    image: projectLabel,
    tags: ["Python", "Flask", "OCR"],
    challenge: "Manual product labeling is slow and error-prone at scale.",
    solution:
      "A Flask-based labeling tool that ingests images, auto-suggests tags, and lets operators confirm in one click.",
    features: [
      "Bulk image upload",
      "Auto-tag suggestions from OCR + rules",
      "Keyboard-first labeling UX",
      "CSV export",
    ],
    stack: ["Python", "Flask", "Tesseract", "SQLite"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "Residential Inventory Management",
    tagline: "End-to-end inventory platform for residential operations.",
    image: projectInventory,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    challenge: "Residential managers lose track of assets across floors and vendors.",
    solution:
      "A MERN app to track assets, vendors, and maintenance cycles with alerts and audit logs.",
    features: [
      "Asset lifecycle tracking",
      "Vendor + purchase order module",
      "Low-stock and maintenance alerts",
      "Role-based dashboards",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "Python Voice Assistant",
    tagline: "Voice-first assistant with speech-to-text, intent routing & TTS.",
    image: projectVoice,
    tags: ["Python", "Speech", "NLP", "Automation"],
    challenge: "Repetitive desktop tasks need a hands-free interface.",
    solution:
      "A local voice assistant that transcribes, resolves intent, and executes system actions like search, launch, and calendar.",
    features: [
      "Wake-word activation",
      "Intent routing with fuzzy matching",
      "System automation (apps, search, media)",
      "TTS responses",
    ],
    stack: ["Python", "SpeechRecognition", "pyttsx3", "spaCy"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "CareBridge",
    tagline: "Connecting patients with caregivers through intuitive workflows.",
    image: projectCare,
    tags: ["React", "Node.js", "Healthcare"],
    challenge: "Patients and independent caregivers struggle to coordinate visits and records.",
    solution:
      "A booking + records platform with caregiver profiles, appointment slots, and secure notes.",
    features: [
      "Caregiver discovery",
      "Slot-based appointments",
      "Encrypted patient notes",
      "Chat-lite for scheduling",
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
  {
    title: "AR Image Tracking",
    tagline: "Marker-based augmented reality experiences on the web.",
    image: projectAR,
    tags: ["AR", "Three.js", "Computer Vision"],
    challenge: "AR on the web usually means heavy native apps.",
    solution:
      "A lightweight Three.js + MindAR pipeline that anchors 3D content to printed markers directly in the browser.",
    features: [
      "Marker detection at 30fps",
      "3D asset overlays",
      "Mobile-first camera pipeline",
      "Zero install, pure web",
    ],
    stack: ["Three.js", "MindAR", "WebXR", "JavaScript"],
    github: "https://github.com/gautami1407",
    demo: "#",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Business Systems",
    school: "VNR VJIET",
    period: "2024 — 2028",
    detail:
      "Coursework in Data Structures, OOP, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
  },
  {
    degree: "Diploma in Cloud Computing & Big Data",
    school: "Government Institute of Electronics",
    period: "2022 — 2025",
    detail:
      "Focus on cloud infrastructure, distributed systems, and large-scale data processing fundamentals.",
  },
];

export const skillGroups: { title: string; items: { name: string; level: number; years: number }[] }[] = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 90, years: 3 },
      { name: "Java", level: 75, years: 2 },
      { name: "JavaScript", level: 85, years: 2 },
      { name: "TypeScript", level: 78, years: 1 },
      { name: "C", level: 70, years: 2 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", level: 88, years: 2 },
      { name: "Next.js", level: 78, years: 1 },
      { name: "Tailwind", level: 90, years: 2 },
      { name: "HTML / CSS", level: 92, years: 3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 80, years: 2 },
      { name: "Express", level: 78, years: 2 },
      { name: "Flask", level: 82, years: 2 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 78, years: 2 },
      { name: "Docker", level: 72, years: 1 },
      { name: "Linux", level: 85, years: 3 },
      { name: "GitHub Actions", level: 70, years: 1 },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Machine Learning", level: 80, years: 2 },
      { name: "Prompt Engineering", level: 88, years: 1 },
      { name: "Computer Vision", level: 75, years: 1 },
      { name: "NLP", level: 74, years: 1 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", level: 82, years: 2 },
      { name: "MongoDB", level: 78, years: 2 },
      { name: "PostgreSQL", level: 70, years: 1 },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", level: 90, years: 3 },
      { name: "VS Code", level: 95, years: 3 },
      { name: "Postman", level: 82, years: 2 },
      { name: "Figma", level: 70, years: 2 },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Leadership", level: 88, years: 3 },
      { name: "Communication", level: 90, years: 4 },
      { name: "Public Speaking", level: 85, years: 3 },
      { name: "Project Management", level: 80, years: 2 },
    ],
  },
];

export const certifications = [
  "Linux, Python & Java — NSIC Industrial Training",
  "AI & Machine Learning Fundamentals",
  "AWS Cloud Practitioner Essentials",
  "Oracle Cloud Foundations",
  "Microsoft Learn — Azure Fundamentals",
];

export const achievements = [
  { label: "Projects Shipped", value: 12 },
  { label: "Internships", value: 2 },
  { label: "Technologies", value: 25 },
  { label: "Certifications", value: 6 },
  { label: "Workshops", value: 8 },
  { label: "Community Events", value: 5 },
];
