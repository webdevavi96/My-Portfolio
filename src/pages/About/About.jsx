import React from "react";
import { motion } from "framer-motion";

function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-blue-900 text-white px-6 md:px-16 py-12">

      {/* HERO */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto mb-16"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I'm a <span className="text-pink-400 font-semibold">Full Stack Developer</span> who loves building scalable and user-friendly applications.
          I specialize in modern web technologies, REST APIs, and clean architecture.
        </motion.p>

        <motion.p
          variants={item}
          className="text-gray-400 mt-4"
        >
          I enjoy solving real-world problems, crafting smooth user experiences, and continuously learning new technologies.
        </motion.p>
      </motion.div>

      {/* GRID SECTION */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* SKILLS */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h2 variants={item} className="text-2xl font-semibold mb-6 text-pink-400">
            Skills
          </motion.h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={i} variants={item} className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="mb-3 font-medium text-white">{category}</h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 hover:bg-pink-500 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CERTIFICATES */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h2 variants={item} className="text-2xl font-semibold mb-6 text-pink-400">
            Certificates
          </motion.h2>

          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                variants={item}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500 transition"
              >
                <p className="font-medium">{cert.title}</p>
                <p className="text-sm text-gray-400">
                  {cert.org} • {cert.date}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;