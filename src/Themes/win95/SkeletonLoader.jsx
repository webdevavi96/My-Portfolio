const SkeletonLoader = () => (
    <div className="flex flex-col gap-3 select-none animate-pulse">
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-6 w-[55%]"></div>
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-4 w-full"></div>
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-4 w-[85%]"></div>
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-4 w-[90%]"></div>
        <br />
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-6 w-[40%]"></div>
        <div className="bg-[#808080] border border-[#404040] shadow-[inset_1px_1px_#000,inset_-1px_-1px_#dfdfdf] h-10 w-[80%]"></div>
    </div>
);

export default SkeletonLoader