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
  openTo:
    "Open to Software Engineering, AI, Cloud Computing & Full Stack Development Opportunities",
  currentlyBuilding: [
    "AI-powered consumer intelligence products",
    "Cloud-native web applications",
    "Full Stack software solutions",
    "AI + Computer Vision projects",
    "Open-source learning",
  ],
};

export const orbitTech = ["Python", "AWS", "AI", "Git", "React", "Docker", "Linux", "Cloud"];

export const experiences = [
  {
    role: "VishwaM AI Intern",
    company: "Swecha — VishwaM AI",
    location: "Hyderabad, India",
    period: "2025 · Internship",
    description:
      "Worked on AI learning initiatives, explored machine learning fundamentals, and contributed to collaborative AI development using Python, data analysis, and prompt engineering.",
    impact: [
      "Prototyped LLM-powered workflows that reduced manual data prep time",
      "Contributed to open, community-driven AI research at Swecha",
      "Practiced prompt engineering, Python, and clean PR hygiene over GitHub",
      "Built small AI prototypes end-to-end",
    ],
    skills: ["Machine Learning", "Python", "Pandas", "NumPy", "Prompt Engineering", "Google Colab", "GitHub"],
  },
  {
    role: "STEM Engineer Intern",
    company: "STEMX Education",
    location: "Hyderabad, India",
    period: "6 Months",
    description:
      "Delivered hands-on STEM workshops across robotics, electronics, IoT, and coding. Designed practical learning experiences and mentored students through engineering projects.",
    impact: [
      "Delivered STEM workshops and led project-based learning sessions",
      "Guided 100+ students through robotics and programming activities",
      "Designed practical STEM learning experiences and lesson kits",
      "Mentored students during engineering projects and encouraged innovation",
      "Collaborated with educators to iterate on curriculum",
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
    features: ["Bulk image upload", "Auto-tag suggestions from OCR + rules", "Keyboard-first labeling UX", "CSV export"],
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
    solution: "A MERN app to track assets, vendors, and maintenance cycles with alerts and audit logs.",
    features: ["Asset lifecycle tracking", "Vendor + purchase order module", "Low-stock and maintenance alerts", "Role-based dashboards"],
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
    features: ["Wake-word activation", "Intent routing with fuzzy matching", "System automation (apps, search, media)", "TTS responses"],
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
    solution: "A booking + records platform with caregiver profiles, appointment slots, and secure notes.",
    features: ["Caregiver discovery", "Slot-based appointments", "Encrypted patient notes", "Chat-lite for scheduling"],
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
    features: ["Marker detection at 30fps", "3D asset overlays", "Mobile-first camera pipeline", "Zero install, pure web"],
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

// Categorized certifications
export const certificationGroups: { category: string; items: string[] }[] = [
  {
    category: "Cloud",
    items: [
      "AWS Cloud Practitioner Essentials",
      "Oracle Cloud Infrastructure Foundations",
      "Microsoft Learn — Azure Fundamentals",
    ],
  },
  {
    category: "Programming",
    items: ["Python — NSIC Industrial Training", "Java Programming", "C Programming"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning Fundamentals", "AI Workshops", "Prompt Engineering"],
  },
  {
    category: "Cybersecurity",
    items: ["Cybersecurity Fundamentals", "Network Security Workshops"],
  },
  {
    category: "Professional Development",
    items: ["Hackathon Participation", "Workshop Participation", "Technical Bootcamps", "Industry Seminars"],
  },
];

// Legacy flat list still used by CommandPalette; safe to keep
export const certifications = certificationGroups.flatMap((g) => g.items);

// Certificate gallery — visual proofs with short descriptions. Add up to ~20.
export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Cloud" | "Programming" | "AI" | "Cybersecurity" | "Workshop" | "Internship" | "Other";
  description: string; // short, <= ~140 chars
  image?: string; // optional certificate image URL
  credentialUrl?: string;
  gradient?: string;
};

export const certificateGallery: CertificateItem[] = [
  {
    id: "aws-ccp",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "Cloud",
    description: "Foundational AWS services, pricing, and security — the language of modern cloud infrastructure.",
    gradient: "from-orange-500/40 via-amber-500/30 to-yellow-500/30",
  },
  {
    id: "oci-foundations",
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    date: "2024",
    category: "Cloud",
    description: "Core OCI concepts: compute, storage, networking, identity, and cloud-native architecture basics.",
    gradient: "from-red-500/40 via-rose-500/30 to-pink-500/30",
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft Learn",
    date: "2024",
    category: "Cloud",
    description: "Azure services, workloads, and governance fundamentals across the Microsoft cloud ecosystem.",
    gradient: "from-sky-500/40 via-blue-500/30 to-indigo-500/30",
  },
  {
    id: "python-nsic",
    title: "Python — NSIC Industrial Training",
    issuer: "NSIC",
    date: "2024",
    category: "Programming",
    description: "Industrial Python training covering syntax, OOP, file I/O, and small end-to-end automation projects.",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/30",
  },
  {
    id: "java",
    title: "Java Programming",
    issuer: "Certification Program",
    date: "2024",
    category: "Programming",
    description: "OOP, collections, exception handling, and building console applications in Java.",
    gradient: "from-orange-600/40 via-red-500/30 to-rose-500/30",
  },
  {
    id: "c-programming",
    title: "C Programming",
    issuer: "Certification Program",
    date: "2023",
    category: "Programming",
    description: "Pointers, memory management, and structured programming — the foundations of systems thinking.",
    gradient: "from-slate-500/40 via-zinc-500/30 to-gray-500/30",
  },
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    issuer: "Online Program",
    date: "2025",
    category: "AI",
    description: "Supervised, unsupervised, and evaluation techniques — building intuition for real ML pipelines.",
    gradient: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/30",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    issuer: "Online Program",
    date: "2025",
    category: "AI",
    description: "Structured prompting, chain-of-thought, and evaluation patterns for reliable LLM applications.",
    gradient: "from-fuchsia-500/40 via-pink-500/30 to-rose-500/30",
  },
  {
    id: "ai-workshop",
    title: "AI Workshop",
    issuer: "Swecha / Community",
    date: "2025",
    category: "AI",
    description: "Hands-on AI development, Python tooling, and collaborative model experimentation.",
    gradient: "from-indigo-500/40 via-violet-500/30 to-purple-500/30",
  },
  {
    id: "cyber-fundamentals",
    title: "Cybersecurity Fundamentals",
    issuer: "Online Program",
    date: "2024",
    category: "Cybersecurity",
    description: "Threat models, authentication, and defensive engineering essentials for modern applications.",
    gradient: "from-emerald-600/40 via-green-500/30 to-lime-500/30",
  },
  {
    id: "network-security",
    title: "Network Security Workshop",
    issuer: "Workshop",
    date: "2024",
    category: "Cybersecurity",
    description: "TCP/IP internals, common attack surfaces, and hardening patterns for network services.",
    gradient: "from-teal-500/40 via-emerald-500/30 to-green-600/30",
  },
  {
    id: "stemx-internship",
    title: "STEMX Education — Internship",
    issuer: "STEMX Education",
    date: "2025",
    category: "Internship",
    description: "6-month STEM internship: robotics, IoT, and mentoring 100+ students through hands-on engineering.",
    gradient: "from-cyan-500/40 via-sky-500/30 to-blue-500/30",
  },
  {
    id: "swecha-internship",
    title: "Swecha VishwaM AI — Internship",
    issuer: "Swecha",
    date: "2025",
    category: "Internship",
    description: "Community-driven AI internship: Python, ML, prompt engineering, and open-source collaboration.",
    gradient: "from-purple-500/40 via-fuchsia-500/30 to-pink-500/30",
  },
  {
    id: "summer-of-ai",
    title: "Summer of AI",
    issuer: "AI Program",
    date: "2025",
    category: "AI",
    description: "Immersive summer program on modern AI, LLMs, and applied machine learning projects.",
    gradient: "from-amber-500/40 via-orange-500/30 to-red-500/30",
  },
  {
    id: "hackathon-cert",
    title: "Hackathon Participation",
    issuer: "Multiple Organizers",
    date: "2024 — 2025",
    category: "Workshop",
    description: "Multiple hackathons — rapid prototyping, teamwork, and shipping working demos under pressure.",
    gradient: "from-pink-500/40 via-rose-500/30 to-red-500/30",
  },
  {
    id: "tech-bootcamp",
    title: "Technical Bootcamp",
    issuer: "Industry Program",
    date: "2024",
    category: "Workshop",
    description: "Intensive bootcamp on modern development workflows, tooling, and collaborative engineering.",
    gradient: "from-blue-500/40 via-indigo-500/30 to-violet-500/30",
  },
  {
    id: "industry-seminar",
    title: "Industry Seminar",
    issuer: "Industry Speakers",
    date: "2024",
    category: "Workshop",
    description: "Industry seminar on emerging tech trends, career paths, and real-world engineering practices.",
    gradient: "from-slate-500/40 via-blue-500/30 to-cyan-500/30",
  },
  {
    id: "cloud-community",
    title: "Cloud Community Club — Leadership",
    issuer: "VNR VJIET",
    date: "2023 — Present",
    category: "Other",
    description: "Vice President role — organizing events, mentoring peers, and building a campus cloud community.",
    gradient: "from-sky-500/40 via-cyan-500/30 to-teal-500/30",
  },
];

// Awards & competitions — separate from certifications
export const awards = [
  {
    place: "1st",
    medal: "🥇",
    event: "Convergence Connectathon",
    description:
      "Won First Place by developing an innovative solution through teamwork, technical implementation, and effective presentation.",
  },
  {
    place: "2nd",
    medal: "🥈",
    event: "Ideathon",
    description:
      "Secured Second Place by proposing a creative technology-driven solution addressing a real-world problem.",
  },
  {
    place: "3rd",
    medal: "🥉",
    event: "Gameathon",
    description:
      "Won Third Place by collaborating with a team to design and develop a game under limited time.",
  },
];

export const hackathons = {
  count: 4,
  learnings: [
    "Worked in multidisciplinary teams",
    "Learned new technologies rapidly",
    "Improved collaboration and communication",
    "Built working prototypes under time pressure",
    "Expanded professional network",
    "Learned from mentors and industry experts",
  ],
};

export const leadership = [
  {
    role: "Vice President",
    org: "Cloud Community Club",
    period: "2023 — Present",
    responsibilities: [
      "Organized technical events and workshops",
      "Coordinated student teams and managed volunteers",
      "Promoted cloud computing and emerging technologies",
      "Encouraged peer learning and community building",
      "Helped build a strong technical community on campus",
    ],
  },
];

export const journey = [
  {
    year: "2022",
    milestones: ["Started Diploma in Cloud Computing & Big Data"],
  },
  {
    year: "2023",
    milestones: ["Joined Cloud Community Club", "Started exploring Cloud Computing"],
  },
  {
    year: "2024",
    milestones: ["Built Full Stack Projects", "Participated in technical events"],
  },
  {
    year: "2025",
    milestones: [
      "Completed Diploma",
      "STEMX Education Internship",
      "Summer of AI",
      "Hackathons & Competitions",
    ],
  },
  {
    year: "2026",
    milestones: [
      "Swecha AI Internship",
      "Started B.Tech at VNR VJIET",
      "Building AI-powered applications",
      "Competition achievements",
    ],
  },
];

// Data-driven gallery — add new items by editing this array
export type GalleryItem = {
  id: string;
  title: string;
  category:
    | "Hackathons"
    | "Competitions"
    | "Internships"
    | "Workshops"
    | "Leadership"
    | "Cloud Community Club"
    | "Projects"
    | "College Events"
    | "Certificates";
  date: string;
  location?: string;
  description: string;
  achievement?: string;
  image?: string; // optional URL; falls back to gradient cover
  gradient?: string; // tailwind gradient classes for the fallback cover
};

export const gallery: GalleryItem[] = [
  {
    id: "connectathon-1st",
    title: "Convergence Connectathon — 1st Place",
    category: "Competitions",
    date: "2025",
    location: "Hyderabad",
    description: "Winning moment with the team after presenting an innovative technical solution to the judges.",
    achievement: "🥇 First Place",
    gradient: "from-yellow-500/40 via-orange-500/30 to-red-500/30",
  },
  {
    id: "ideathon-2nd",
    title: "Ideathon — 2nd Place",
    category: "Competitions",
    date: "2025",
    location: "Hyderabad",
    description: "Pitching a technology-driven solution to a real-world problem alongside teammates.",
    achievement: "🥈 Second Place",
    gradient: "from-slate-400/40 via-slate-300/30 to-zinc-500/30",
  },
  {
    id: "gameathon-3rd",
    title: "Gameathon — 3rd Place",
    category: "Competitions",
    date: "2025",
    location: "Hyderabad",
    description: "Designed and shipped a game with the team under a tight time constraint.",
    achievement: "🥉 Third Place",
    gradient: "from-amber-700/40 via-orange-600/30 to-rose-500/30",
  },
  {
    id: "hack-1",
    title: "Hackathon — Team Sprint",
    category: "Hackathons",
    date: "2025",
    description: "Rapid prototyping session with a multidisciplinary team. Focused on learning and shipping.",
    gradient: "from-cyan-500/40 via-sky-500/30 to-blue-600/30",
  },
  {
    id: "hack-2",
    title: "Hackathon — Presentation Day",
    category: "Hackathons",
    date: "2025",
    description: "Presenting the prototype and demo to judges. Sharpened storytelling and technical narrative.",
    gradient: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/30",
  },
  {
    id: "hack-3",
    title: "Hackathon — Working Session",
    category: "Hackathons",
    date: "2024",
    description: "Late-night pair programming and rapid iteration on a working prototype.",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/30",
  },
  {
    id: "hack-4",
    title: "Hackathon — Networking",
    category: "Hackathons",
    date: "2024",
    description: "Meeting mentors, industry experts, and fellow builders.",
    gradient: "from-pink-500/40 via-rose-500/30 to-orange-400/30",
  },
  {
    id: "stemx-workshop",
    title: "STEMX — Robotics Workshop",
    category: "Internships",
    date: "2025",
    location: "Hyderabad",
    description: "Delivered a robotics workshop and mentored students through hands-on builds.",
    gradient: "from-indigo-500/40 via-blue-500/30 to-cyan-500/30",
  },
  {
    id: "stemx-teaching",
    title: "STEMX — Mentoring Students",
    category: "Internships",
    date: "2025",
    description: "Guided students through programming and electronics projects.",
    gradient: "from-teal-500/40 via-emerald-500/30 to-green-500/30",
  },
  {
    id: "swecha-ai",
    title: "Swecha — VishwaM AI Session",
    category: "Internships",
    date: "2026",
    description: "Collaborative AI development, prompt engineering, and ML experimentation.",
    gradient: "from-fuchsia-500/40 via-violet-500/30 to-indigo-500/30",
  },
  {
    id: "ccc-event",
    title: "Cloud Community Club — Tech Event",
    category: "Cloud Community Club",
    date: "2024",
    description: "Organized a cloud technology event with student volunteers and speakers.",
    gradient: "from-sky-500/40 via-cyan-500/30 to-teal-500/30",
  },
  {
    id: "ccc-workshop",
    title: "Cloud Community Club — Workshop",
    category: "Workshops",
    date: "2024",
    description: "Conducted a hands-on cloud fundamentals workshop for peers.",
    gradient: "from-blue-500/40 via-indigo-500/30 to-violet-500/30",
  },
];

export const achievements = [
  { label: "Projects Shipped", value: 12 },
  { label: "Competitions Won", value: 3 },
  { label: "Hackathons", value: 4 },
  { label: "Internships", value: 2 },
  { label: "Technologies", value: 25 },
  { label: "Certifications", value: 12 },
  { label: "Community Events", value: 8 },
  { label: "Workshops", value: 8 },
];
