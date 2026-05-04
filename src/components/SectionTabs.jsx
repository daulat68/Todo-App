function SectionTabs({ sections, active, setActive }) {
    return (
        <div className="w-full max-w-md mx-auto mt-4">
        
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {sections.map((sec) => (
            <button
                key={sec.id}
                onClick={() => setActive(sec.id)}
                className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl font-semibold text-sm transition shadow-sm
                
                ${
                    active === sec.id
                    ? "bg-[#B11226] text-white"   // active = red (like your buttons)
                    : "bg-white text-gray-700"
                }

                hover:scale-105 active:scale-95
                `}
            >
                {sec.title}
            </button>
            ))}
        </div>

        </div>
    );
}

export default SectionTabs;