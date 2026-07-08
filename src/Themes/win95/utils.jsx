import React, { useState, useEffect, useRef, useCallback } from 'react';
import { homeData, skills, certificates, projects } from "../../shared/data"


export const playSystemSound = (type) => {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        if (type === 'boot') {
            // Nostalgic multi-harmonic synthesizer startup chord
            const now = ctx.currentTime;
            const freqs = [261.63, 329.63, 392.00, 523.25]; // C Major chord structure
            freqs.forEach((f, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(f, now);
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.08, now + 0.1 + i * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + i * 0.1);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 1.5);
            });
        } else if (type === 'click') {
            // Mechanical, satisfying keypress click
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(950, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } else if (type === 'floppy') {
            // Retro stepper motor noise when dynamic folders load
            const now = ctx.currentTime;
            for (let i = 0; i < 4; i++) {
                const timeOffset = i * 0.11;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(75, now + timeOffset);
                osc.frequency.setValueAtTime(115, now + timeOffset + 0.03);
                gain.gain.setValueAtTime(0, now + timeOffset);
                gain.gain.linearRampToValueAtTime(0.025, now + timeOffset + 0.01);
                gain.gain.setValueAtTime(0, now + timeOffset + 0.07);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + timeOffset);
                osc.stop(now + timeOffset + 0.09);
            }
        } else if (type === 'chord') {
            // Classic error / informational chime
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.035, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        }
    } catch (e) {
        console.warn('Audio synthesis blocked by user-interaction policy');
    }
};

export const themes = {
    standard: { bg: 'bg-[#008080]', windowBg: 'bg-[#c0c0c0]', titleFrom: 'from-[#000080]', titleTo: 'to-[#1084d0]', titleText: 'text-white' },
    hotdog: { bg: 'bg-[#ff0000]', windowBg: 'bg-[#ffff00]', titleFrom: 'from-[#000000]', titleTo: 'to-[#000000]', titleText: 'text-[#ffff00]' },
    matrix: { bg: 'bg-[#030303]', windowBg: 'bg-[#121212]', titleFrom: 'from-[#00FF00]', titleTo: 'to-[#005500]', titleText: 'text-[#00FF00]' },
    navy: { bg: 'bg-[#001e3d]', windowBg: 'bg-[#b8cbdc]', titleFrom: 'from-[#112d4e]', titleTo: 'to-[#3f72af]', titleText: 'text-white' },
    rose: { bg: 'bg-[#7a007a]', windowBg: 'bg-[#ffebee]', titleFrom: 'from-[#c2185b]', titleTo: 'to-[#f06292]', titleText: 'text-black' }
};

export const defaultProfilePic = (
    <svg viewBox="0 0 100 100" className="w-24 h-24 border-2 border-black bg-gray-200 shadow-[inset_1px_1px_0px_#000]">
        <rect width="100" height="100" fill="#c0c0c0" />
        <circle cx="50" cy="40" r="18" fill="#808080" stroke="#000" strokeWidth="2" />
        <path d="M22 88 C22 68, 78 68, 78 88" fill="#808080" stroke="#000" strokeWidth="2" />
        <rect x="43" y="36" width="3" height="3" fill="#000" />
        <rect x="54" y="36" width="3" height="3" fill="#000" />
        <path d="M46 48 Q50 51, 54 48" fill="none" stroke="#000" strokeWidth="2" />
    </svg>
);

export const ProfilePic = () => {
    return (
        <img
            src={homeData.profile.src}
            alt={homeData.profile.alt}
            className="w-full h-full object-cover"
        />
    );
};


export const Minesweeper = () => {
    const [grid, setGrid] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [mineCount, setMineCount] = useState(10);
    const size = 9;

    const initBoard = useCallback(() => {
        let board = Array(size).fill(null).map(() => Array(size).fill(null).map(() => ({
            isMine: false,
            isOpen: false,
            isFlagged: false,
            count: 0
        })));

        let minesPlaced = 0;
        while (minesPlaced < 10) {
            const r = Math.floor(Math.random() * size);
            const c = Math.floor(Math.random() * size);
            if (!board[r][c].isMine) {
                board[r][c].isMine = true;
                minesPlaced++;
            }
        }

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (board[r][c].isMine) continue;
                let count = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (r + i >= 0 && r + i < size && c + j >= 0 && c + j < size) {
                            if (board[r + i][c + j].isMine) count++;
                        }
                    }
                }
                board[r][c].count = count;
            }
        }

        setGrid(board);
        setGameOver(false);
        setWin(false);
        setMineCount(10);
    }, []);

    useEffect(() => {
        initBoard();
    }, [initBoard]);

    const revealCell = (r, c) => {
        if (gameOver || win || grid[r][c].isFlagged || grid[r][c].isOpen) return;

        let newGrid = [...grid.map(row => [...row])];

        if (newGrid[r][c].isMine) {
            setGameOver(true);
            playSystemSound('chord');
            newGrid.forEach(row => row.forEach(cell => {
                if (cell.isMine) cell.isOpen = true;
            }));
            setGrid(newGrid);
            return;
        }

        const revealQueue = [[r, c]];
        while (revealQueue.length > 0) {
            const [currR, currC] = revealQueue.shift();
            if (newGrid[currR][currC].isOpen) continue;
            newGrid[currR][currC].isOpen = true;

            if (newGrid[currR][currC].count === 0) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const targetR = currR + i;
                        const targetC = currC + j;
                        if (targetR >= 0 && targetR < size && targetC >= 0 && targetC < size) {
                            if (!newGrid[targetR][targetC].isOpen && !newGrid[targetR][targetC].isMine) {
                                revealQueue.push([targetR, targetC]);
                            }
                        }
                    }
                }
            }
        }

        let unrevealedSafeCells = 0;
        newGrid.forEach(row => row.forEach(cell => {
            if (!cell.isMine && !cell.isOpen) unrevealedSafeCells++;
        }));

        if (unrevealedSafeCells === 0) {
            setWin(true);
        }

        setGrid(newGrid);
    };

    const flagCell = (e, r, c) => {
        e.preventDefault();
        if (gameOver || win || grid[r][c].isOpen) return;

        let newGrid = [...grid.map(row => [...row])];
        const isCurrentlyFlagged = newGrid[r][c].isFlagged;
        newGrid[r][c].isFlagged = !isCurrentlyFlagged;
        setMineCount(prev => isCurrentlyFlagged ? prev + 1 : prev - 1);
        setGrid(newGrid);
    };

    return (
        <div className="flex flex-col items-center bg-[#c0c0c0] p-2 text-black select-none">
            <div className="flex justify-between items-center w-full bg-[#808080] border-2 border-t-black border-l-black border-b-white border-r-white p-1.5 mb-2 font-mono text-lg font-bold">
                <span className="text-red-500 bg-black px-1.5 py-0.5">{String(mineCount).padStart(3, '0')}</span>
                <button
                    onClick={initBoard}
                    className="border-2 border-t-white border-l-white border-b-black border-r-black bg-[#c0c0c0] px-2 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-lg"
                >
                    {gameOver ? '😵' : win ? '😎' : '🙂'}
                </button>
                <span className="text-red-500 bg-black px-1.5 py-0.5">000</span>
            </div>

            <div className="grid grid-cols-9 gap-[1px] bg-[#808080] border-2 border-t-black border-l-black border-b-white border-r-white p-[1px]">
                {grid.map((row, r) => row.map((cell, c) => {
                    let content = '';
                    let colorClass = 'text-transparent';

                    if (cell.isOpen) {
                        if (cell.isMine) {
                            content = '💣';
                        } else if (cell.count > 0) {
                            content = cell.count;
                            const colors = ['', 'text-blue-800', 'text-green-800', 'text-red-800', 'text-purple-900', 'text-red-950', 'text-cyan-800', 'text-black', 'text-gray-600'];
                            colorClass = colors[cell.count] || 'text-black';
                        }
                    } else if (cell.isFlagged) {
                        content = '🚩';
                        colorClass = 'text-red-600';
                    }

                    return (
                        <div
                            key={`${r}-${c}`}
                            onClick={() => revealCell(r, c)}
                            onContextMenu={(e) => flagCell(e, r, c)}
                            className={`w-6 h-6 flex items-center justify-center font-bold text-sm select-none cursor-pointer border-[2px] ${cell.isOpen
                                    ? 'bg-[#c0c0c0] border-gray-400'
                                    : 'bg-[#c0c0c0] border-t-white border-l-white border-b-gray-600 border-r-gray-600 active:border-gray-400'
                                }`}
                        >
                            <span className={colorClass}>{content}</span>
                        </div>
                    );
                }))}
            </div>
        </div>
    );
};

export const RunDialog = ({ openWindow, closeWindow }) => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState([
        'Avinash-OS [Version 1.0.95]',
        'Type "help" for a list of system executables.',
        ''
    ]);

    const executeCommand = (e) => {
        e.preventDefault();
        const trimmed = command.trim().toLowerCase();
        if (!trimmed) return;

        let nextOutput = [...output, `C:\\WINDOWS\\SYSTEM95\\>${command}`];

        switch (trimmed) {
            case 'help':
                nextOutput.push(
                    'Available programs & diagnostics:',
                    '  about        - View portfolio owner bio-file',
                    '  tech         - Review loaded system stacks',
                    '  projects     - Query mounted git directories',
                    '  certificates - View verifiable educational credentials',
                    '  calc         - Load logic calculator unit',
                    '  mines        - Initialize Minesweeper module',
                    '  clear        - Clear console stream',
                    '  format c:    - DANGEROUS: System memory initialization'
                );
                break;
            case 'about':
                openWindow('about');
                nextOutput.push('Accessing "About Avinash" file...');
                break;
            case 'tech':
                openWindow('tech');
                nextOutput.push('Opening "Technical Stack Properties" dialog...');
                break;
            case 'projects':
                openWindow('projects');
                nextOutput.push('Listing all mounted files in PROJECTS.DIR...');
                break;
            case 'certificates':
                openWindow('certificates');
                nextOutput.push('Querying academic key certificates database...');
                break;
            case 'calc':
                openWindow('calc');
                nextOutput.push('Initializing calculator process...');
                break;
            case 'mines':
                openWindow('mines');
                nextOutput.push('Spawning dynamic array grids for Minesweeper...');
                break;
            case 'clear':
                nextOutput = [];
                break;
            case 'format c:':
                nextOutput.push(
                    '------------------------------------------------',
                    'ACCESS VIOLATION: Write lock active on C: drive.',
                    'Action aborted. Protecting developer profile data.',
                    '------------------------------------------------'
                );
                playSystemSound('chord');
                break;
            default:
                nextOutput.push(`Syntax Error or bad file reference: "${command}". Try "help".`);
                playSystemSound('chord');
        }

        setOutput(nextOutput);
        setCommand('');
    };

    return (
        <div className="flex flex-col bg-black text-green-500 font-mono p-3 w-full h-[280px] text-xs">
            <div className="flex-grow overflow-y-auto mb-2 pr-1 select-text">
                {output.map((line, idx) => (
                    <div key={idx} className="whitespace-pre-wrap">{line}</div>
                ))}
            </div>
            <form onSubmit={executeCommand} className="flex border-t border-green-800 pt-2 items-center">
                <span className="mr-1">C:\&gt;</span>
                <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="flex-grow bg-transparent text-green-500 outline-none font-mono"
                    autoFocus
                />
            </form>
        </div>
    );
};

export const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [clearNext, setClearNext] = useState(false);

    const handleNum = (num) => {
        if (display === '0' || clearNext) {
            setDisplay(num);
            setClearNext(false);
        } else {
            setDisplay(display + num);
        }
    };

    const handleOp = (op) => {
        setEquation(display + ' ' + op + ' ');
        setClearNext(true);
    };

    const handleCalc = () => {
        if (!equation) return;
        try {
            const parts = equation.split(' ');
            const num1 = parseFloat(parts[0]);
            const op = parts[1];
            const num2 = parseFloat(display);
            let result = 0;

            switch (op) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num1 / num2; break;
                default: return;
            }

            setDisplay(String(result));
            setEquation('');
            setClearNext(true);
        } catch (e) {
            setDisplay('Error');
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

    return (
        <div className="flex flex-col bg-[#c0c0c0] p-2 max-w-[190px] text-black">
            <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-right px-2 py-1 text-base font-mono mb-2 h-8 select-all">
                {display}
            </div>
            <div className="grid grid-cols-4 gap-1 font-mono">
                <button onClick={handleClear} className="col-span-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">C</button>
                <button onClick={() => handleOp('/')} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">/</button>
                <button onClick={() => handleOp('*')} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">*</button>

                {[7, 8, 9].map(n => <button key={n} onClick={() => handleNum(String(n))} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">{n}</button>)}
                <button onClick={() => handleOp('-')} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">-</button>

                {[4, 5, 6].map(n => <button key={n} onClick={() => handleNum(String(n))} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">{n}</button>)}
                <button onClick={() => handleOp('+')} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">+</button>

                {[1, 2, 3].map(n => <button key={n} onClick={() => handleNum(String(n))} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">{n}</button>)}
                <button onClick={handleCalc} className="row-span-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:brightness-110 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">=</button>

                <button onClick={() => handleNum('0')} className="col-span-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">0</button>
                <button onClick={() => handleNum('.')} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1.5 font-bold hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs">.</button>
            </div>
        </div>
    );
};

export const ContactDialog = ({ closeWindow, soundEnabled }) => {
    const [sender, setSender] = useState('');
    const [msg, setMsg] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!sender || !msg || !subject || !name) return;

        setSubmitting(true);

        if (soundEnabled) {
            playSystemSound("floppy");
        }

        try {
            const res = await fetch("/.netlify/functions/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email: sender,
                    subject,
                    message: msg,
                }),
            });

            if (res.ok) {
                setShowSuccess(true);

                // Optional: clear form
                setSender("");
                setMsg("");
                setSubject("");
                setName("");
            } else {
                setShowFailed(true);

                if (soundEnabled) {
                    playSystemSound("chord");
                }
            }
        } catch (err) {
            console.error(err);

            setShowFailed(true);

            if (soundEnabled) {
                playSystemSound("chord");
            }
        } finally {
            setSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-3 text-black text-center min-w-[260px]">
                <div className="text-3xl mb-2">📬</div>
                <h4 className="text-sm font-bold mb-1">Packet Transmitted!</h4>
                <p className="text-xs mb-4 text-gray-700">Your message data packet was submitted and queued for review.</p>
                <button
                    onClick={() => {
                        setShowSuccess(false);
                        closeWindow('contact');
                    }}
                    className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-1 font-bold text-xs hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
                >
                    OK
                </button>
            </div>
        );
    };
    if(showFailed){
        return (
            <div className="flex flex-col items-center justify-center p-3 text-black text-center min-w-[260px]">
                <div className="text-3xl mb-2">📬</div>
                <h4 className="text-sm font-bold mb-1">Packet Transmition failed!</h4>
                <p className="text-xs mb-4 text-gray-700">Your message data packet wasen't submitted, Please try again later.</p>
                <button
                    onClick={() => {
                        setShowFailed(false);
                        closeWindow('contact');
                    }}
                    className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-1 font-bold text-xs hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
                >
                    OK
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-black min-w-[260px]">
            <p className="m-0 text-[11px]">Direct socket-link to <strong>{homeData.name}</strong>:</p>
            <div className="flex flex-col">
                <label className="text-[11px] font-bold mb-1">Sender Name / Node Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-1 text-xs outline-none"
                    placeholder="Jhone Doe"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[11px] font-bold mb-1">Sender Email / Node ID:</label>
                <input
                    type="email"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    required
                    className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-1 text-xs outline-none"
                    placeholder="user@network.com"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[11px] font-bold mb-1">Subject / Payload Content Header:</label>
                <textarea
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    rows="3"
                    className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-1 text-xs outline-none resize-none"
                    placeholder="Type transmission notes..."
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[11px] font-bold mb-1">Message / Payload Content Description:</label>
                <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                    rows="3"
                    className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-1 text-xs outline-none resize-none"
                    placeholder="Type transmission notes..."
                />
            </div>
            <div className="flex justify-end gap-1.5 mt-1">
                <button
                    type="button"
                    onClick={() => closeWindow('contact')}
                    className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-3 py-1 font-bold text-xs hover:bg-gray-100 active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white border-2 border-t-white border-l-white border-b-black border-r-black px-3 py-1 font-bold text-xs disabled:opacity-50 active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
                >
                    {submitting ? 'Sending...' : 'Send Packet'}
                </button>
            </div>
        </form>
    );
};


