const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Minimalist Geometric Symbol */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 border-[3px] border-blue-600/20 rounded-full"></div>
                <div className="absolute inset-1 border-[2px] border-slate-900 rounded-full"></div>
                {/* Copper Terminal Abstraction */}
                <div className="relative z-10 w-4 h-6 bg-gradient-to-br from-[#b87333] to-[#8b4513] rounded-t-sm flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-2.5 w-7 h-2 bg-gradient-to-br from-[#b87333] to-[#8b4513] rounded-full"></div>
            </div>

            {/* Wordmark Section */}
            <div className="flex flex-col justify-center">
                <span className="text-slate-900 text-2xl font-black tracking-tighter leading-none mb-0.5">GOBIND</span>
                <div className="flex items-center gap-1.5">
                    <div className="h-[1px] w-2 bg-slate-500/40"></div>
                    <span className="text-slate-600 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Cable Terminals</span>
                    <div className="h-[1px] w-2 bg-slate-500/40"></div>
                </div>
            </div>
        </div>
    );
};

export default Logo;
