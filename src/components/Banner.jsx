const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="bg-gray-100 py-6 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* In-Progress card */}
                <div className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[140px]"
                    style={{ background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 40%, #4c1d95 100%)" }}>
                    {/* Wave pattern overlay */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 19px),
                repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 19px)`
                        }}
                    />
                    <p className="relative z-10 text-white/90 text-sm font-medium mb-2">In-Progress</p>
                    <p className="relative z-10 text-white text-6xl font-bold">{inProgressCount}</p>
                </div>

                {/* Resolved card */}
                <div className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[140px]"
                    style={{ background: "linear-gradient(135deg, #059669 0%, #10b981 40%, #065f46 100%)" }}>
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 19px),
                repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 19px)`
                        }}
                    />
                    <p className="relative z-10 text-white/90 text-sm font-medium mb-2">Resolved</p>
                    <p className="relative z-10 text-white text-6xl font-bold">{resolvedCount}</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
