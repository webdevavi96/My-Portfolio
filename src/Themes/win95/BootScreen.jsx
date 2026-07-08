import React, { useState, useEffect, useRef, useCallback } from 'react';
import { homeData, skills, certificates, projects } from "../../shared/data"
import { playSystemSound } from './utils';

const BootScreen = ({ onComplete }) => {
    useEffect(() => {
        playSystemSound('boot');
        const timer = setTimeout(onComplete, 2400);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="absolute inset-0 bg-black text-[#d3d3d3] z-[999999] p-6 font-mono text-xs md:text-sm flex flex-col items-start cursor-wait select-none">
            <p className="text-green-500 font-bold mb-2">PORTFOLIO-OS 95 KERNEL v4.51.01</p>
            <p>Copyright (C) 1984-95, Personal Computer Core Inc.</p>
            <p className="mt-2">HIMEM is testing extended memory... done.</p>
            <p>Directing driver interfaces to local workspace...</p>
            <p>Mounting dynamic data partition from: ./shared/data.js ... SUCCESS</p>
            <p className="text-yellow-500 mt-2">Checking portfolio assets:</p>
            <p className="pl-4">- Found profile directories for: {homeData.name}</p>
            <p className="pl-4">- Found {projects.length} repository definitions</p>
            <p className="pl-4">- Found {certificates.length} verifiable credentials</p>
            <br />
            <p className="text-[#00FF00]">C:\&gt; RUN PORTFOLIO.EXE</p>
            <p className="animate-pulse mt-4 text-white">Loading Retro Graphics Engine...</p>
        </div>
    );
};


export default BootScreen