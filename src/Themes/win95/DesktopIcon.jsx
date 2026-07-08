import { playSystemSound } from "./utils";

const DesktopIcon = ({ title, iconSvg, onOpen, soundEnabled }) => {
    const handleTrigger = () => {
        if (soundEnabled) playSystemSound('click');
        onOpen();
    };

    return (
        <div
            className="flex flex-col items-center text-white text-center cursor-pointer group w-20 select-none"
            onDoubleClick={handleTrigger}
            onTouchEnd={handleTrigger}
        >
            <div className="w-9 h-9 mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.65)]">
                {iconSvg}
            </div>
            <span className="px-1 py-0.5 break-words group-active:bg-[#000080] group-active:border group-active:border-dotted group-active:border-white leading-tight font-sans text-[11px]">
                {title}
            </span>
        </div>
    );
};


export default DesktopIcon