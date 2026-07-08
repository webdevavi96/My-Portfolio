
const WindowControlsButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black font-bold text-xs ml-[2px] w-5 h-5 cursor-pointer p-0 flex items-center justify-center shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080] active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] text-black"
    >
        {children}
    </button>
);

export default WindowControlsButton