import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-black text-white grid md:grid-cols-2 gap-6 p-6 overflow-hidden">

            {/* Left Section */}
            <div className="flex flex-col justify-center space-y-6">

                {/* Heading */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Avinash Chaurasiya</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-400">Full Stack Web Developer</h2>
                </motion.div>

                {/* Paragraphs */}
                <motion.p
                    className="text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    I specialize in building modern, responsive websites and applications that not only look great
                    but also function seamlessly across all devices.
                </motion.p>

                <motion.p
                    className="text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    My expertise in Django allows me to craft powerful backends, while
                    my proficiency in JavaScript ensures interactive and intuitive frontends.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
                >
                    <a
                        className="bg-pink-600 px-6 py-3 rounded-full hover:bg-pink-700 font-serif transition-all duration-200 text-center"
                        href="/docs/AVINASH_RESUME.pdf"
                        download="Avinash-Resume.pdf"
                    >
                        Download Resume
                    </a>

                    <Link
                        className="border-2 border-pink-700 px-6 py-3 rounded-full hover:bg-pink-700 font-serif transition-all duration-200 text-center"
                        to="/contact"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Right Section */}
            <motion.div
                className="flex justify-center items-center p-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <img
                    src="images/Avinash.png"
                    alt="Avinash Profile"
                    className="rounded-2xl shadow-lg h-72 md:h-96 object-cover"
                />
            </motion.div>
        </div>
    )
}

export default Home
