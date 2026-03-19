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
    "Backend Development": ["Python", "Django", "Django REST", "Node Js", "Express Js", "MongoDB"],
    "Tools & Technologies": ["Git & GitHub", "Postman", "Figma", "MS Office"],
    "Deployment & Hosting": ["Netlify", "Hostinger", "PythonAnywhere", "FileZilla"]
  };

  const certificates = {
    "Programming": [
      "Python Programming (Basics) – United Latino Students Association (Sept 2025)"
    ],
    "Web Development": [
      "Python with Django – Mechatredz Technologies (Sept 2024)"
    ]
  };

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
          <p>
            I’m a FUll Stack Web Developer focused on building responsive, user-friendly applications using modern frontend technologies.
          </p>
          <p>
            I work with REST APIs, Git, and clean coding practices, and enjoy solving real-world problems with efficient and scalable solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills */}
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
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20"
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

      {/* Certificates */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {Object.entries(certificates).map(([category, certs], i) => (
          <Dropdown key={i} title={category}>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 text-gray-200 hover:bg-white/20 transition"
                >
                  {cert}
                </span>
              ))}
            </div>
          </Dropdown>
        ))}
      </motion.div>

    </div>
  );
}

export default About;