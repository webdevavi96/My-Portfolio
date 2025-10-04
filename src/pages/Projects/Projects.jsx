import React from "react"
import { motion } from "framer-motion"
import {
  BlueCard,
  GreenCard,
  PurpleCard,
  RedCard,
  TealCard,
  YellowCard,
} from "../../components/Components"

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="head mb-4" variants={cardVariants}>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Projects</h2>
        <p className="text-xl">
          I have created these projects during my{" "}
          <span className="text-pink-600 font-semibold">Full stack web dev</span>{" "}
          journey:
        </p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="section flex flex-wrap gap-4"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants} whileHover="hover">
          <BlueCard
            props={{
              title: "Travel Vista - A Travel Planner",
              body: "Travel-Vista is a Django-based project crafted by me as a training and portfolio web application. The repository includes Python and Django code, static front- end assets (HTML/CSS/JS), and configuration files that tie together user authentication, content management, and dynamic page rendering. With Travel-Vista, visitors can explore travel destinations, view details, and engage with a responsive UI built on modern web principles. The project showcases full-stack capabilities — integrating back-end logic, database modeling, and front-end UX — and serves as a demonstration of the developer’s learning curve in Django and web development in general.",
              img: "images/projects/travel-vista.jpg",
              link: {
                githubLink: "https://github.com/webdevavi96/Travel-Vista",
              },
            }}
          />
        </motion.div>

        <motion.div variants={cardVariants} whileHover="hover">
          <TealCard
            props={{
              title: "My Weather",
              body: "My Weather is a sleek web application that provides real-time weather information based on user input or current location. The app fetches weather data from a reliable API and displays it in an intuitive interface, including details like temperature, humidity, wind speed, and conditions. Built with modern web technologies (HTML, CSS, JavaScript—or whichever stack you used), it is fully responsive and offers a seamless experience across devices. The project reflects my ability to integrate external APIs, manage asynchronous data, and present information cleanly in the UI.",
              img: "images/projects/weather-app.png",
              link: {
                demoLink: "https://my-weather-india.netlify.app/",
                githubLink: "https://github.com/webdevavi96/Weather-App",
              },
            }}
          />
        </motion.div>

        <motion.div variants={cardVariants} whileHover="hover">
          <PurpleCard
            props={{
              title: "Jarvice Voice Assitant",
              body: "This is a voice assitant developed by me to do basic tasks eg:— Launch Browser, Launch You Tube, Play music on you tube, etc. This voice assistnat is developed using Python and google speech recogniton module.",
              link: {
                githubLink: "https://github.com/webdevavi96/Jarvis-Voice-Assistant",
              },
            }}
          />
        </motion.div>

        <motion.div variants={cardVariants} whileHover="hover">
          <RedCard
            props={{
              title: "Alumni Meet",
              body: "I am developing an Alumni Meet portal using MERN Stack for my college to connect students with alumni for future guidence and opportuniteis. This Web App containes fetures like: Blogs Posting by Alumni and Teacher, Event Management by Alumni and Teacher and User Management. In Future updates I will add Live Chat and Friend system.",
              link: {
                githubLink: "https://github.com/webdevavi96/Alumni_Meet",
              },
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
