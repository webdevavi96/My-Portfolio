import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeData } from "../../shared/data";

function Home() {
    return (
        <div className="w-full min-h-screen grid md:grid-cols-2 gap-10 px-6 md:px-16 py-12 items-center text-white">

            {/* LEFT */}
            <div className="space-y-6">

                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        {homeData.name}
                    </h1>

                    <h2 className="text-xl md:text-2xl text-pink-400 mt-2">
                        {homeData.role}
                    </h2>
                </motion.div>

                <motion.p
                    className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {homeData.description}
                </motion.p>

                <motion.p
                    className="text-gray-400 text-sm md:text-base max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {homeData.specialization}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                >
                    <a
                        href={homeData.resume.href}
                        download={homeData.resume.download}
                        className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition font-medium text-center shadow-lg shadow-pink-500/20"
                    >
                        {homeData.resume.text}
                    </a>

                    <Link
                        to={homeData.contact.path}
                        className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition text-center"
                    >
                        {homeData.contact.text}
                    </Link>
                </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
                className="flex justify-center items-center relative"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-pink-500/20 blur-3xl rounded-full"></div>

                <img
                    src={homeData.profile.src}
                    alt={homeData.profile.alt}
                    className="relative rounded-2xl h-72 md:h-96 object-cover border border-white/10 shadow-2xl"
                />
            </motion.div>
        </div>
    );
}

export default Home;