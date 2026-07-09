import React, { useState, useEffect, useRef, useCallback } from 'react';
import BootScreen from './BootScreen';
import DesktopIcon from './DesktopIcon';
import Window95 from './DeskTopWindow';
import SkeletonLoader from './SkeletonLoader';
import ThemeSelector from '../ThemeSelecter';
import { themes, defaultProfilePic, Minesweeper, ContactDialog, Calculator, RunDialog, ProfilePic } from './utils';
import { homeData, skills, certificates, projects } from "../../shared/data"




export default function Win95App() {
    const [isBooting, setIsBooting] = useState(true);
    const [isShutDown, setIsShutDown] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [windows, setWindows] = useState({});
    const [zIndexCounter, setZIndexCounter] = useState(100);
    const [timeStr, setTimeStr] = useState('');
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [selectedTheme, setSelectedTheme] = useState('standard');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setTimeStr(`${hours}:${minutes} ${ampm}`);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('#start-menu') && !e.target.closest('#start-button')) {
                setStartMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const bringToFront = useCallback((id) => {
        setZIndexCounter(prev => {
            const newZ = prev + 1;
            setWindows(curr => {
                if (!curr[id]) return curr;
                return { ...curr, [id]: { ...curr[id], zIndex: newZ } };
            });
            return newZ;
        });
    }, []);

    const openWindow = (id, options = {}) => {
        setWindows(curr => {
            if (curr[id]) {
                setTimeout(() => bringToFront(id), 0);
                return { ...curr, [id]: { ...curr[id], isMinimized: false } };
            }
            const newZ = zIndexCounter + 1;
            setZIndexCounter(newZ);
            return {
                ...curr,
                [id]: {
                    id,
                    isMinimized: false,
                    zIndex: newZ,
                    title: options.title || `${id.toUpperCase()}.EXE`,
                    icon: options.icon || '📁'
                }
            };
        });
        setStartMenuOpen(false);
    };

    const closeWindow = (id) => {
        setWindows(curr => {
            const newWins = { ...curr };
            delete newWins[id];
            return newWins;
        });
    };

    const toggleMinimize = (id) => {
        setWindows(curr => {
            if (!curr[id]) return curr;
            const updated = !curr[id].isMinimized;
            return {
                ...curr,
                [id]: { ...curr[id], isMinimized: updated }
            };
        });
        if (windows[id]?.isMinimized) bringToFront(id);
    };

    const topActiveWindowId = Object.values(windows)
        .filter(w => !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;

    if (isShutDown) {
        return (
            <div className="flex justify-center items-center h-screen bg-black text-[#FF8C00] font-sans text-2xl text-center p-5 select-none">
                It is now safe to turn off your computer.
            </div>
        );
    }

    const activeTheme = themes[selectedTheme] || themes.standard;

    return (
        <div className={`h-screen w-screen overflow-hidden ${activeTheme.bg} text-xs font-['MS_Sans_Serif',Tahoma,Arial,sans-serif] select-none text-black relative`}>

            {isBooting && <BootScreen onComplete={() => { setIsBooting(false); openWindow('about', { title: 'About_Avinash.txt', icon: '👨‍💻' }); }} />}

            {/* Desktop Icons Panel */}
            <div className="absolute top-0 left-0 right-0 bottom-[30px] p-5 grid grid-cols-[80px] auto-rows-[90px] gap-4 z-10">
                <DesktopIcon
                    title="About Me"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('about', { title: 'About_Avinash.txt', icon: '👨‍💻' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="28" height="20" fill="#c0c0c0" stroke="#000" strokeWidth="2" />
                            <rect x="4" y="6" width="24" height="14" fill="#008080" stroke="#000" strokeWidth="2" />
                            <rect x="10" y="24" width="12" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="2" />
                            <rect x="6" y="26" width="20" height="4" fill="#c0c0c0" stroke="#000" strokeWidth="2" />
                        </svg>
                    }
                />
                <DesktopIcon
                    title="Tech Stack"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('tech', { title: 'Tech_Stack.exe', icon: '⚙️' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="10" fill="#808080" stroke="#000" strokeWidth="2" />
                            <circle cx="16" cy="16" r="4" fill="#c0c0c0" stroke="#000" strokeWidth="2" />
                            <path d="M14 2 L18 2 L18 6 L14 6 Z M14 26 L18 26 L18 30 L14 30 Z M2 14 L6 14 L6 18 L2 18 Z M26 14 L30 14 L30 18 L26 18 Z" fill="#808080" stroke="#000" strokeWidth="2" />
                        </svg>
                    }
                />
                <DesktopIcon
                    title="Projects"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('projects', { title: 'Projects.dir', icon: '📁' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8 L10 8 L14 12 L30 12 L30 26 L2 26 Z" fill="#ffca28" stroke="#000" strokeWidth="2" />
                        </svg>
                    }
                />
                <DesktopIcon
                    title="Certificates"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('certificates', { title: 'Certificates.grp', icon: '📜' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="6" width="24" height="20" fill="#f5f5dc" stroke="#000" strokeWidth="2" />
                            <path d="M8 12 L24 12 M8 16 L24 16 M8 20 L18 20" stroke="#8b4513" strokeWidth="2" />
                            <circle cx="22" cy="22" r="3" fill="#d4af37" stroke="#000" strokeWidth="1" />
                        </svg>
                    }
                />
                <DesktopIcon
                    title="Control Panel"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('control', { title: 'Control_Panel.exe', icon: '🛠️' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="6" width="28" height="20" fill="#808080" stroke="#000" strokeWidth="2" />
                            <rect x="6" y="10" width="8" height="6" fill="#c0c0c0" stroke="#000" strokeWidth="2" />
                            <circle cx="22" cy="14" r="3" fill="#ff0000" />
                            <path d="M6 20 L26 20" stroke="#000" strokeWidth="2" />
                        </svg>
                    }
                />
                <DesktopIcon
                    title="Minesweeper"
                    soundEnabled={soundEnabled}
                    onOpen={() => openWindow('mines', { title: 'Minesweeper.exe', icon: '💣' })}
                    iconSvg={
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="10" fill="#000" />
                            <path d="M16 2 L16 30 M2 16 L30 16 M6 6 L26 26 M6 26 L26 6" stroke="#000" strokeWidth="2" />
                            <rect x="13" y="13" width="6" height="6" fill="#ff0000" />
                        </svg>
                    }
                />
            </div>

            { }
            {Object.values(windows).map(win => (
                <Window95
                    key={win.id}
                    windowData={win}
                    closeWindow={closeWindow}
                    toggleMinimize={toggleMinimize}
                    bringToFront={bringToFront}
                    theme={activeTheme}
                    soundEnabled={soundEnabled}
                >
                    {win.id === 'about' && (
                        <div className="flex flex-col md:flex-row gap-4 items-start select-text">
                            <div className="flex flex-col items-center gap-2 border-2 border-dashed border-gray-400 p-3 bg-gray-50 shrink-0 w-full md:w-60">
                                <div className="w-48 h-60 overflow-hidden border border-gray-400 bg-white">
                                    <ProfilePic />
                                </div>

                                <span className="font-bold text-[#000080]">
                                    {homeData.name}
                                </span>

                                <span className="text-[10px] text-gray-600 bg-gray-200 px-1 py-0.5">
                                    {homeData.role}
                                </span>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-sm font-bold border-b border-[#c0c0c0] pb-1 mb-2 mt-0">🧙‍♂️ Profile Directory</h2>
                                <p className="mb-2 text-justify"><strong>{homeData.specialization}</strong></p>
                                <p className="mb-3 leading-relaxed text-gray-800">{homeData.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4 select-none">
                                    <a
                                        href={homeData.resume.href}
                                        download={homeData.resume.download}
                                        className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-2 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white inline-flex items-center gap-1.5 text-black no-underline shadow-[1px_1px_0px_#000]"
                                    >
                                        💾 {homeData.resume.text}
                                    </a>
                                    <button
                                        onClick={() => openWindow('contact', { title: 'Contact_Me.lnk', icon: '📬' })}
                                        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-2 font-bold active:border-t-black active:border-l-black active:border-b-white active:border-r-white inline-flex items-center gap-1.5 shadow-[1px_1px_0px_#000]"
                                    >
                                        📬 {homeData.contact.text}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {win.id === 'tech' && (
                        <div className="flex flex-col gap-3 select-text">
                            <h3 className="text-sm font-bold border-b border-[#c0c0c0] pb-1 mb-1 mt-0">🛠️ Technical Stack Execution</h3>
                            {Object.entries(skills).map(([category, items]) => (
                                <fieldset key={category} className="border-2 border-[#dfdfdf] [border-style:groove] p-2.5">
                                    <legend className="px-1.5 font-bold text-[#000080]">{category}</legend>
                                    <div className="flex flex-wrap gap-1.5">
                                        {items.map(skill => (
                                            <span key={skill} className="bg-gray-200 border border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-2 py-0.5 text-[10px] font-mono font-bold shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </fieldset>
                            ))}
                        </div>
                    )}

                    {win.id === 'projects' && (
                        <div className="flex flex-col gap-3 select-text">
                            <h3 className="text-sm font-bold border-b border-[#c0c0c0] pb-1 mb-1 mt-0">📁 Mounted File Directories</h3>
                            <div className="flex flex-col gap-3">
                                {projects.map((project, idx) => (
                                    <fieldset key={idx} className="border-2 border-[#dfdfdf] [border-style:groove] p-3 hover:bg-gray-50/50">
                                        <legend className="px-1.5 font-bold text-blue-900 flex items-center gap-1">
                                            {project.featured ? '⭐️ ' : '📁 '} {project.title}
                                        </legend>
                                        <p className="mt-1 leading-relaxed text-gray-800 text-xs">{project.description}</p>

                                        {project.features && (
                                            <div className="mt-2 mb-2">
                                                <strong className="text-[10px] text-gray-700">Features list:</strong>
                                                <ul className="list-disc pl-5 mt-0.5 space-y-0.5 text-xs">
                                                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-1 mt-2.5 select-none">
                                            {project.tech.map(t => (
                                                <span key={t} className="bg-[#000080] text-white font-mono px-1.5 py-0.25 text-[9px] rounded-[1px]">{t}</span>
                                            ))}
                                        </div>

                                        <div className="flex justify-end gap-2 mt-3 pt-2 border-t border-dotted border-gray-300 text-xs select-none">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-blue-700 font-bold hover:underline"
                                                >
                                                    🔗 GitHub Source
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-green-700 font-bold hover:underline"
                                                >
                                                    ⚡ Launch Demo
                                                </a>
                                            )}
                                        </div>
                                    </fieldset>
                                ))}
                            </div>
                        </div>
                    )}

                    {win.id === 'certificates' && (
                        <div className="flex flex-col gap-3 select-text">
                            <h3 className="text-sm font-bold border-b border-[#c0c0c0] pb-1 mb-1 mt-0">📜 Academic Verification Keys</h3>
                            <div className="flex flex-col gap-3">
                                {certificates.map((cert, idx) => (
                                    <fieldset key={idx} className="border-2 border-[#dfdfdf] [border-style:groove] p-3 bg-yellow-50/20">
                                        <legend className="px-1.5 font-bold text-yellow-800">Credential Key #{idx + 1}</legend>
                                        <h4 className="font-bold text-xs m-0 text-black">{cert.title}</h4>
                                        <p className="text-[10px] text-gray-600 my-1">Issuer Node: <strong>{cert.org}</strong> • Date: {cert.date}</p>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-700 font-bold hover:underline inline-block mt-1 text-xs select-none"
                                        >
                                            🔗 Verification Document
                                        </a>
                                    </fieldset>
                                ))}
                            </div>
                        </div>
                    )}

                    {win.id === 'control' && (
                        <div className="flex flex-col gap-4 text-black">
                            <h3 className="text-sm font-bold border-b border-[#c0c0c0] pb-1 mb-1 mt-0">🛠️ Operating System Customizer</h3>

                            {/* Theme Customizer Panel */}
                            <fieldset className="border-2 border-[#dfdfdf] [border-style:groove] p-3">
                                <legend className="px-1.5 font-bold">Palette Theme</legend>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.keys(themes).map(tName => (
                                        <button
                                            key={tName}
                                            onClick={() => setSelectedTheme(tName)}
                                            className={`border-2 px-3 py-1.5 font-bold capitalize shadow-[1px_1px_0px_#000] text-xs ${selectedTheme === tName
                                                ? 'bg-gray-100 border-t-black border-l-black border-b-white border-r-white'
                                                : 'bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black hover:bg-gray-100'
                                                }`}
                                        >
                                            {tName}
                                        </button>
                                    ))}
                                </div>
                            </fieldset>

                            {/* Switch theme type */}
                            <fieldset className="border-2 border-[#dfdfdf] [border-style:groove] p-3">
                                <legend className="px-1.5 font-bold">Switch Theme</legend>
                                <ThemeSelector />
                            </fieldset>

                            {/* Custom Retro Sound Setting */}
                            <fieldset className="border-2 border-[#dfdfdf] [border-style:groove] p-3">
                                <legend className="px-1.5 font-bold">Audio Synthesizer</legend>
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={soundEnabled}
                                        onChange={(e) => setSoundEnabled(e.target.checked)}
                                        className="accent-[#000080]"
                                    />
                                    <span className="text-xs font-bold">Enable retro physical stepper / chime synthesis</span>
                                </label>
                            </fieldset>
                        </div>
                    )}

                    {/* App logic rendering inside frame */}
                    {win.id === 'mines' && <Minesweeper />}
                    {win.id === 'calc' && <Calculator />}
                    {win.id === 'run' && <RunDialog openWindow={openWindow} closeWindow={closeWindow} />}
                    {win.id === 'contact' && <ContactDialog closeWindow={closeWindow} soundEnabled={soundEnabled} />}
                </Window95>
            ))}

            { }
            {startMenuOpen && (
                <div id="start-menu" className="absolute bottom-[30px] left-[2px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black flex z-[10000] shadow-[2px_2px_0px_#000]">
                    <div className="bg-gradient-to-t from-[#000080] to-[#1084d0] text-white p-1 font-bold text-sm flex items-end [writing-mode:vertical-rl] rotate-180 select-none">
                        <span>Portfolio 95</span>
                    </div>
                    <div className="flex flex-col p-0.5 min-w-[155px] text-black">
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('about', { title: 'About_Avinash.txt', icon: '👨‍💻' })}>👨‍💻 About Avinash</div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('tech', { title: 'Tech_Stack.exe', icon: '⚙️' })}>⚙️ Tech Stack</div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('projects', { title: 'Projects.dir', icon: '📁' })}>📁 Featured Projects</div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('certificates', { title: 'Certificates.grp', icon: '📜' })}>📜 Certificates</div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('control', { title: 'Control_Panel.exe', icon: '🛠️' })}>🛠️ Control Panel</div>
                        <div className="h-[2px] bg-[#808080] border-b border-white my-1 mx-0"></div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => openWindow('run', { title: 'Run_Diagnostics.com', icon: '🖥️' })}>🖥️ Run Command...</div>
                        <div className="px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-[#000080] hover:text-white" onClick={() => setIsShutDown(true)}>🛑 Shut Down...</div>
                    </div>
                </div>
            )}

            { }
            <div id="taskbar" className="absolute bottom-0 left-0 right-0 h-[30px] bg-[#c0c0c0] border-t-2 border-t-white flex items-center p-[2px] z-[9999]">

                {/* Start Button */}
                <button
                    id="start-button"
                    className={`h-full font-bold px-1.5 flex items-center justify-center gap-1 cursor-pointer bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080] text-black ${startMenuOpen ? 'border-t-black border-l-black border-b-white border-r-white shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] pt-[2px] bg-[repeating-linear-gradient(45deg,#c0c0c0,#c0c0c0_2px,#dfdfdf_2px,#dfdfdf_4px)]' : 'active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] active:pt-[2px]'}`}
                    onClick={() => setStartMenuOpen(!startMenuOpen)}
                >
                    <svg viewBox="0 0 16 16" width="16" height="16">
                        <path fill="#f00" d="M0 2l7-1v6H0z" /><path fill="#0f0" d="M8 1l8-1v7H8z" /><path fill="#00f" d="M0 8h7v6l-7-1z" /><path fill="#fd0" d="M8 8h8v7l-8-1z" />
                    </svg>
                    Start
                </button>

                {/* Taskbar Window Instances */}
                <div id="taskbar-windows" className="flex-grow flex ml-1 gap-1 overflow-x-auto h-full">
                    {Object.values(windows).map(win => {
                        const isActive = topActiveWindowId === win.id && !win.isMinimized;
                        return (
                            <button
                                key={`tb-${win.id}`}
                                className={`min-w-[85px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis h-full px-2 font-bold cursor-pointer bg-[#c0c0c0] border-2 flex items-center justify-start gap-1 text-black ${isActive ? 'border-t-black border-l-black border-b-white border-r-white shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] bg-[repeating-linear-gradient(45deg,#c0c0c0,#c0c0c0_2px,#dfdfdf_2px,#dfdfdf_4px)] pt-[2px]' : 'border-t-white border-l-white border-b-black border-r-black shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080] active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] active:pt-[2px]'}`}
                                onClick={() => {
                                    if (isActive) toggleMinimize(win.id);
                                    else {
                                        if (win.isMinimized) toggleMinimize(win.id);
                                        bringToFront(win.id);
                                    }
                                }}
                            >
                                <span className="text-[11px]">{win.icon}</span> {win.title}
                            </button>
                        );
                    })}
                </div>

                {/* Clock Tray */}
                <div id="taskbar-clock" className="border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white px-2.5 ml-1 h-full flex items-center bg-[#c0c0c0] text-black">
                    {timeStr}
                </div>
            </div>
        </div>
    );
}