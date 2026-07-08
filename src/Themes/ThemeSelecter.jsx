import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const themes = [
    { id: "normal", name: "Modern", icon: "✨" },
    { id: "win95", name: "Windows 95", icon: "🖥️" },
];

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const currentTheme = themes.find((t) => t.id === theme);

    return (
        <div className="relative">
            <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
                <span>{currentTheme.icon}</span>
                <span>{currentTheme.name}</span>
                <ChevronDown
                    size={16}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl
                                   border border-white/10
                                   bg-slate-900/95 backdrop-blur-xl
                                   shadow-2xl"
                    >
                        {themes.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setTheme(item.id);
                                    setOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition
                                    ${theme === item.id
                                        ? "bg-cyan-500/20 text-cyan-400"
                                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>

                                {theme === item.id && (
                                    <span className="ml-auto text-cyan-400">✓</span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}