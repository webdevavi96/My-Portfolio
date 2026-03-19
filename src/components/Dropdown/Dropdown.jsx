import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ title = "Click to expand", children }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg shadow-lg hover:border-pink-400 hover:text-white">

            {/* Header (like summary) */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-3 text-left 
                   text-white font-medium hover:bg-white/10 rounded-2xl transition"
            >
                {title}

                {/* Arrow */}
                <span
                    className={`transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                >
                    ▼
                </span>
            </button>

            {/* Content */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className=" mt-2 px-5 pb-4 text-gray-200">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Dropdown;