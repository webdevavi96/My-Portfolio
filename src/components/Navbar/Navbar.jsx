import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FcBusinessman, FcFolder, FcFeedback } from "react-icons/fc";
import { motion } from "framer-motion";

function Navbar() {
    const linkClasses = ({ isActive }) =>
        `flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md transition-all duration-300 ${
            isActive
                ? "bg-cyan-900 text-cyan-400 font-semibold"
                : "text-white hover:bg-cyan-700 hover:text-cyan-200"
        }`;

    const hoverVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.95 },
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 shadow-lg"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-auto px-6 py-2 md:h-16">

                {/* Logo */}
                <div className="logo text-2xl font-extrabold font-serif cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 md:mb-0">
                    Web Dev Avinash
                </div>

                {/* Navigation */}
                <div className="flex justify-center md:justify-end w-full md:w-auto gap-1 md:gap-2">
                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/" className={linkClasses}>
                            <MdHome size={20} /> Home
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/about" className={linkClasses}>
                            <FcBusinessman size={20} /> About
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/projects" className={linkClasses}>
                            <FcFolder size={20} /> Projects
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/contact" className={linkClasses}>
                            <FcFeedback size={20} /> Contact
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
