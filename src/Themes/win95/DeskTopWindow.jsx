import React, { useState, useEffect, useRef, useCallback } from 'react';
import WindowControlsButton from './WindowControlButton,';
import SkeletonLoader from './SkeletonLoader';
import { playSystemSound, themes, Calculator } from './utils';

const Window95 = ({ windowData, closeWindow, toggleMinimize, bringToFront, theme, soundEnabled, children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [pos, setPos] = useState(() => {
        const isMobile = window.innerWidth < 600;
        if (isMobile) return { x: window.innerWidth * 0.05, y: window.innerHeight * 0.05 };
        const offset = ((windowData.zIndex % 10) * 28) + 40;
        return { x: offset, y: offset };
    });
    const winRef = useRef(null);

    useEffect(() => {
        if (soundEnabled) playSystemSound('floppy');
        const timer = setTimeout(() => setIsLoaded(true), 1100);
        return () => clearTimeout(timer);
    }, [soundEnabled]);

    const handlePointerDown = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
        bringToFront(windowData.id);

        if (isMaximized) return;

        const startX = e.clientX;
        const startY = e.clientY;
        const rect = winRef.current.getBoundingClientRect();
        const offsetX = startX - rect.left;
        const offsetY = startY - rect.top;

        const handlePointerMove = (moveEvent) => {
            setPos({
                x: moveEvent.clientX - offsetX,
                y: moveEvent.clientY - offsetY
            });
        };

        const handlePointerUp = () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    };

    if (windowData.isMinimized) return null;

    const maximizedClasses = isMaximized
        ? "top-0 left-0 w-screen h-[calc(100vh-30px)]"
        : "w-[480px] max-w-[95vw]";

    return (
        <div
            ref={winRef}
            style={!isMaximized ? { top: pos.y, left: pos.x, zIndex: windowData.zIndex } : { zIndex: windowData.zIndex }}
            className={`absolute ${themes.windowBg} border-2 border-t-white border-l-white border-b-black border-r-black p-[2px] flex flex-col shadow-[1px_1px_0px_#000] ${maximizedClasses}`}
            onPointerDown={() => bringToFront(windowData.id)}
        >
            {/* Window Frame Title Header */}
            <div
                className={`bg-gradient-to-r ${theme.titleFrom} ${theme.titleTo} ${theme.titleText} p-[3px_2px_3px_4px] flex justify-between items-center font-bold text-xs select-none touch-none`}
                onPointerDown={handlePointerDown}
            >
                <div className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {windowData.icon} {windowData.title}
                </div>
                <div className="flex">
                    <WindowControlsButton onClick={(e) => { e.stopPropagation(); toggleMinimize(windowData.id); }}>_</WindowControlsButton>
                    <WindowControlsButton onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}>□</WindowControlsButton>
                    <WindowControlsButton onClick={(e) => { e.stopPropagation(); closeWindow(windowData.id); }}>X</WindowControlsButton>
                </div>
            </div>

            {/* Render Context View */}
            <div className="p-4 bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white mt-[2px] overflow-y-auto flex-grow max-h-[62vh] text-black select-text text-xs">
                {isLoaded ? children : <SkeletonLoader />}
            </div>
        </div>
    );
};


export default Window95