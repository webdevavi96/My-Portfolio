import React from "react";
import { motion } from "framer-motion";
import Dropdown from "../../components/Dropdown/Dropdown";

function About() {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = {
    "Frontend Development": ["HTML", "CSS", "JavaScript", "React Js", "Tailwind", "Bootstrap"],
    "Backend Development": ["Python", "Django", "Node Js", "Express Js"],
    "Database": ["MongoDB", "SQLite"],
    "Tools & Technologies": ["Git & GitHub", "Postman"],
    "Deployment & Hosting": ["Netlify"]
  };

  const certificates = [
    {
      title: "Python Programming (Basics)",
      org: "United Latino Students Association",
      date: "Sept 2025",
      link: "https://drive.google.com/file/d/1qZkYNbw_fxspPeu5pnQLWqWTmgI0IFZR/view?usp=drive_link"
    },
    {
      title: "Python with Django",
      org: "Mechatredz Technologies",
      date: "Sept 2024",
      link: "https://drive.google.com/file/d/1QG2adFwFm5uUWmYnsW2rzqs1og-Im9iq/view?usp=drive_link"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white px-4 md:px-8 py-10">

      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 text-center max-w-4xl mx-auto"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
          About Me
        </motion.h1>

        <motion.div variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-2">
          <p className="text-start">
            I’m a FUll Stack Web Developer focused on building responsive, user-friendly applications using modern frontend technologies.
          </p>
          <p className="text-start" >
            I work with REST APIs, Git, and clean coding practices, and enjoy solving real-world problems with efficient and scalable solutions.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 space-y-4"
      >
        <Dropdown title="My Skills">
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i}>
                <h3 className="text-pink-400 font-semibold mb-2">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 hover:bg-pink-500 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Dropdown>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <Dropdown title="Certificates">
            <div className="flex flex-col gap-3">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-gray-200 hover:bg-pink-500 hover:text-white transition duration-300"
                >
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-gray-400">
                    {cert.org} • {cert.date}
                  </p>
                </a>
              ))}
            </div>
          </Dropdown>
        </motion.div>
      </motion.div>

    </div>
  );
}

export default About;