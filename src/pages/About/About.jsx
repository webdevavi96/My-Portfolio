import React from "react";
import { motion } from "framer-motion";
import {
  BlueCard, GreenCard, PurpleCard, RedCard,
  TealCard, YellowCard, OrangeCard,
} from "../../components/Components";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Skills data
  const skills = [
    "Python", "JavaScript", "HTML", "CSS", "Django", "Django REST", 
    "Express Js", "React Js", "Node Js", "Bootstrap", "Tailwind",
    "Git & GitHub", "MongoDB", "Figma", "MS Office", 
    "Hostinger", "FileZilla", "Netlify", "PythonAnywhere", "Postman API Testing"
  ];

  // Certificates data
  const certificates = [
    "Python Programming (Basics) – United Latino Students Association - Sept 2025",
    "Python with Django – Mechatredz Technologies - Sept 2024"
  ];

  // Array of card components for dynamic assignment
  const cardTypes = [BlueCard, GreenCard, PurpleCard, RedCard, TealCard, YellowCard, OrangeCard];

  const renderCard = (name, index) => {
    const Card = cardTypes[index % cardTypes.length]; // rotate through colors
    return <Card props={{ title: "", body: name }} />;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white p-6">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="head mb-12 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          About Me
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Welcome! I am a Full Stack Web Developer skilled in modern web technologies and backend frameworks.
          I create responsive and performant websites and web applications.
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="body mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-6 text-center md:text-left">
          Skills
        </motion.h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              {renderCard(skill, index)}
            </motion.div>
          ))}
        </section>
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="body"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-6 text-center md:text-left">
          Certificates
        </motion.h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              {renderCard(cert, index)}
            </motion.div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}

export default About;
