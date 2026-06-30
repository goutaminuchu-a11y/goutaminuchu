import projectFood from "@/assets/project-food.jpg";
import projectInventory from "@/assets/project-inventory.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import projectStaySync from "@/assets/project-staysync.jpg";
import projectLabel from "@/assets/project-label.jpg";
import projectCare from "@/assets/project-carebridge.jpg";
import projectAR from "@/assets/project-ar.jpg";

export const profile = {
  name: "Gouthami Nurchu",
  shortName: "Gouthami",
  location: "Hyderabad, India",
  email: "gouthami@example.com",
  phone: "+91 90000 00000",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    leetcode: "https://leetcode.com/",
    hackerrank: "https://hackerrank.com/",
  },
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Computing Enthusiast",
    "AI Engineer",
    "Python Developer",
    "Product Builder",
  ],
  summary:
    "I build at the intersection of AI, cloud, and product — turning hard problems into elegant software. From training models to shipping full-stack interfaces, I care about craft, performance, and the human on the other side of the screen.",
};

export const orbitTech = [
  "Python", "AWS", "AI", "React", "Node", "Linux", "Git", "Cloud",
];

export const experiences = [
  {
    role: "AI Intern",
    company: "Swecha — VishwaM AI",
    period: "2025 · Internship",
    description:
      "Explored applied machine learning, collaborative AI tooling, and prompt engineering across real-world projects. Worked on data pipelines, model experimentation, and team-based software development.",
    skills: ["Machine Learning", "Python", "Pandas", "NumPy", "Google Colab", "Prompt Engineering", "GitHub"],
  },
  {
    role: "STEM Engineer Intern",
    company: "STEMX Education",
    period: "6 Months",
    description:
      "Designed hands-on STEM curriculum across robotics, electronics, and coding. Mentored students, built educational prototypes, and led workshops focused on project-based learning.",
    skills: ["Python", "Arduino", "IoT", "Robotics", "Electronics", "Mentorship"],
  },
];

export const projects = [
  {
    title: "AI Food Label Analyzer",
    tagline: "Computer vision + LLM that decodes nutrition labels in seconds.",
    image: projectFood,
    tags: ["Python", "Computer Vision", "LLM", "OCR"],
    github: "#",
    demo: "#",
  },
  {
    title: "Residential Inventory Management",
    tagline: "End-to-end inventory platform for residential operations.",
    image: projectInventory,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "Python Voice Assistant",
    tagline: "Voice-first assistant with speech-to-text, intent routing & TTS.",
    image: projectVoice,
    tags: ["Python", "Speech", "NLP", "Automation"],
    github: "#",
    demo: "#",
  },
  {
    title: "StaySync Hostel Management",
    tagline: "Modern hostel ops — rooms, payments, residents, analytics.",
    image: projectStaySync,
    tags: ["Next.js", "Tailwind", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Label Padega Sabh",
    tagline: "Smart labeling utility for fast, consistent product tagging.",
    image: projectLabel,
    tags: ["Python", "Flask", "OCR"],
    github: "#",
    demo: "#",
  },
  {
    title: "CareBridge",
    tagline: "Connecting patients with caregivers through intuitive workflows.",
    image: projectCare,
    tags: ["React", "Node.js", "Healthcare"],
    github: "#",
    demo: "#",
  },
  {
    title: "AR Image Tracking",
    tagline: "Marker-based augmented reality experiences on the web.",
    image: projectAR,
    tags: ["AR", "Three.js", "Computer Vision"],
    github: "#",
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

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java", "C", "JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind", "HTML", "CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Flask"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Linux", "GitHub Actions"] },
  { title: "AI / ML", items: ["Machine Learning", "Prompt Engineering", "Computer Vision", "NLP"] },
  { title: "Soft Skills", items: ["Leadership", "Communication", "Public Speaking", "Project Management"] },
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
  { label: "Hackathons", value: 4 },
  { label: "Community Talks", value: 3 },
];
