const homeData = {
  name: "Avinash Chaurasiya",

  role: "Full Stack Developer",

  description:
    "I build modern, scalable, and high-performance web applications with clean UI and efficient backend architecture.",

  specialization:
    "Specialized in Express Js, REST APIs, and modern JavaScript frameworks.",

  resume: {
    href: "/docs/AVINASH_RESUME.pdf",
    download: "Avinash-Resume.pdf",
    text: "Download Resume",
  },

  contact: {
    path: "/contact",
    text: "Contact Me",
  },

  profile: {
    src: "images/Avinash.png",
    alt: "Avinash Profile",
  },
};

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],
  Backend: ["Python", "Django", "Node.js", "Express"],
  Database: ["MongoDB", "SQLite"],
  Tools: ["Git", "GitHub", "Postman"],
  Deployment: ["Netlify"],
};

const certificates = [
  {
    title: "Python Programming (Basics)",
    org: "United Latino Students Association",
    date: "Sept 2025",
    link: "https://drive.google.com/file/d/1qZkYNbw_fxspPeu5pnQLWqWTmgI0IFZR/view",
  },
  {
    title: "Python with Django",
    org: "Mechatredz Technologies",
    date: "Sept 2024",
    link: "https://drive.google.com/file/d/1QG2adFwFm5uUWmYnsW2rzqs1og-Im9iq/view",
  },
];

const projects = [
  {
    title: "Chemistry Lab Simulator",
    description:
      "A Chemistry lab simulation app where users can perform chemical reactions with 118 Elements and 71 Compounds.",
    features: [
      "Chemistry Simulation",
      "Real Life experimental properties",
      "Elements Information",
      "Open Source and Free",
    ],
    tech: ["Kotlin", "JetPack Compose"],
    permissions: ["No Permission needed"],
    github: "https://github.com/webdevavi96/ChemLab",
    demo: "https://github.com/webdevavi96/ChemLab/releases/tag/v1.0.0",
    featured: true,
  },
  {
    title: "Travel Vista",
    description:
      "A full-stack Django travel planner with authentication, destination browsing, and dynamic rendering.",
    tech: ["Django", "Python", "HTML", "CSS", "JS"],
    github: "https://github.com/webdevavi96/Travel-Vista",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "Real-time weather app using API integration with responsive UI and async data handling.",
    tech: ["JavaScript", "API", "CSS"],
    demo: "https://my-weather-india.netlify.app/",
    github: "https://github.com/webdevavi96/Weather-App",
  },
  {
    title: "Jarvis Voice Assistant",
    description:
      "Python-based voice assistant capable of executing system tasks and web automation.",
    tech: ["Python", "Speech Recognition"],
    github: "https://github.com/webdevavi96/Jarvis-Voice-Assistant",
  },
  {
    title: "Alumni Meet",
    description:
      "MERN stack platform connecting students and alumni with blogs, events, and upcoming chat system.",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com/webdevavi96/Alumni_Meet",
  },
  {
    title: "Anima",
    description:
      "A modern Chrome Extension for anime lovers with browser shortcuts, live weather forcast and live time display.",
    tech: ["HTML", "Open Weather API", "JSON", "web workers"],
    github: "https://github.com/webdevavi96/Anima",
  },
  {
    title: "FX Tab",
    description:
      "A Chrome extension for enhanced tabbed browsing and workspace management.",
    features: [
      "Tab Organization",
      "Quick Navigation",
      "Tab Grouping",
      "Custom Shortcuts",
    ],
    permissions: ["activeTab", "tabs", "storage"],
    tech: ["HTML", "JSON", "web workers"],
    github: "https://github.com/webdevavi96/FXTab",
  },
];

export { homeData, skills, certificates, projects };
