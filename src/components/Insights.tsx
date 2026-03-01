import React from 'react';

const insights = [
    {
        id: 1,
        tag: '[NEWS & CULTURE] - 10 MIN READ',
        title: 'IT industry Outlook for 2026',
        date: '2025 - 09 - 24',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 2,
        tag: '[NEWS & CULTURE] - 10 MIN READ',
        title: 'How AI is Reshaping Corporate Strategy',
        date: '2025 - 09 - 18',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 3,
        tag: '[INNOVATION] - 8 MIN READ',
        title: 'The Future of Spatial Computing',
        date: '2025 - 09 - 12',
        image: 'https://images.unsplash.com/photo-1655720406055-9ea07063f4ee?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 4,
        tag: '[TECHNOLOGY] - 12 MIN READ',
        title: 'Building Resilient Infrastructure',
        date: '2025 - 09 - 05',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    },
];

export default function Insights() {
    return (
        <section id="insights" className="bg-white py-24 w-full overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
                <div className="mb-12">
                    <p className="text-gray-600 text-[11px] font-medium tracking-wide mb-3">[INSIGHTS]</p>
                    <h2 className="text-[2.75rem] leading-tight md:text-5xl font-medium tracking-tight text-black">
                        <span className="text-[#3b1d5c]">Insights</span> for Smarter Decisions
                    </h2>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto pl-6 max-md:pl-5 pr-6 md:pr-0">
                <div
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {insights.map((item) => (
                        <div key={item.id} className="min-w-[280px] w-[320px] md:min-w-[340px] md:w-[360px] shrink-0 snap-start flex flex-col group cursor-pointer relative">
                            <div className="relative w-full aspect-[16/10] overflow-visible mb-6">
                                <div className="w-full h-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>

                            </div>
                            <p className="text-gray-500 text-[10px] font-semibold tracking-wider mb-2 uppercase">
                                {item.tag}
                            </p>
                            <h3 className="text-lg md:text-[22px] font-medium text-black mb-1.5 leading-snug group-hover:text-[#3b1d5c] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-[13px] font-normal">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
