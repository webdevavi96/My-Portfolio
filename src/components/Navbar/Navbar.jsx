import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    const linkClasses = ({ isActive }) =>
        `relative px-3 py-1.5 rounded-md text-sm md:text-base transition-all duration-300 ${isActive
            ? "text-cyan-400 font-semibold"
            : "text-gray-300 hover:text-white"
        }`;

    const hoverVariants = {
        hover: { y: -2 },
        tap: { scale: 0.95 },
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 border-b border-white/10"
        >
            <div className="container mx-auto flex md:flex-row flex-col items-center justify-between px-6 py-3 md:h-16">

                {/* LOGO */}
                <div className="text-xl md:text-2xl font-bold tracking-wide text-white">
                    <NavLink to="/" className="hover:text-cyan-400 transition">
                        Avinash.dev
                    </NavLink>
                </div>

                {/* NAV LINKS */}
                <div className="flex items-center gap-4 md:gap-6">

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/" className={linkClasses}>
                            Home
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/about" className={linkClasses}>
                            About
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/projects" className={linkClasses}>
                            Projects
                        </NavLink>
                    </motion.div>

                    <motion.div whileHover="hover" whileTap="tap" variants={hoverVariants}>
                        <NavLink to="/contact" className={linkClasses}>
                            Contact
                        </NavLink>
                    </motion.div>

                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;