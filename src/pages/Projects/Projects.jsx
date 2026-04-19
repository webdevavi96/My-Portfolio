import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-blue-900 text-white px-6 md:px-16 py-12">

      {/* HEADER */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto mb-14"
      >
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4">
          Projects
        </motion.h1>

        <motion.p variants={item} className="text-gray-300 text-lg">
          Here are some of the projects I’ve built during my{" "}
          <span className="text-pink-400 font-semibold">
            full-stack development journey
          </span>.
        </motion.p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className={`rounded-xl p-5 border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col justify-between ${project.featured ? "lg:col-span-2" : ""
              }`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-sm text-gray-400">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="flex gap-3 pt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                >
                  Live
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm border border-white/30 rounded hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;