"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";

// Mock Data for Projects (Evidence)
const evidenceItems = [
    {
        id: "EV-001",
        title: "Syntax Software",
        type: "Corporate",
        tech: ["React", "Node.js", "PostgreSQL"],
        description: "Full stack product development and maintenance.",
        status: "DEPLOYED",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Syntax+Software"
    },
    {
        id: "EV-002",
        title: "Freelance Portfolio",
        type: "Client Work",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        description: "High-performance websites for international clients.",
        status: "VERIFIED",
        image: "https://placehold.co/600x400/2a2a2a/FFF?text=Client+Work"
    },
    {
        id: "EV-003",
        title: "Flutter Apps",
        type: "Mobile",
        tech: ["Flutter", "Firebase"],
        description: "Cross-platform mobile applications with responsive design.",
        status: "PROTOTYPE",
        image: "https://placehold.co/600x400/3a3a3a/FFF?text=Flutter+Apps"
    },
    {
        id: "EV-004",
        title: "API Gateway",
        type: "Backend",
        tech: ["Nest.js", "Docker"],
        description: "Scalable REST API architecture handling auth & validation.",
        status: "CLASSIFIED",
        image: "https://placehold.co/600x400/0f0f0f/FFF?text=API+Gateway"
    }
];

const filters = ["ALL", "REACT", "NEXT.JS", "FLUTTER", "BACKEND"];

export default function Evidence() {
    const [filter, setFilter] = useState("ALL");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const filteredEvidence = evidenceItems.filter(item => {
        if (filter === "ALL") return true;
        return item.tech.some(t => t.toUpperCase().includes(filter)) || item.type.toUpperCase().includes(filter);
    });

    return (
        <section id="evidence" className="py-24 min-h-screen relative scroll-mt-24">

            {/* Header */}
            <div className="flex flex-col items-center mb-16 relative z-10">
                <div className="relative mb-6">
                    <div className="absolute -top-6 -left-6 text-6xl text-gray-800 opacity-20 rotate-[-15deg]">
                        <Search />
                    </div>
                    <div className="bg-[#e2d5b5] text-black px-8 py-3 transform rotate-1 shadow-lg border border-gray-400 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200/50 rotate-[-2deg] backdrop-blur-sm -z-10"></div>
                        <h2 className="text-4xl md:text-5xl font-typewriter font-bold tracking-widest uppercase">
                            EVIDENCE BOARD
                        </h2>
                        <p className="text-[10px] font-mono text-center mt-1 text-red-900 tracking-[0.3em]">CLASSIFIED ARCHIVE // CASE FILE #404-B</p>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap gap-4 justify-center items-center bg-black/50 p-2 rounded-full border border-gray-800 backdrop-blur-sm mt-8">
                    <span className="text-xs font-mono text-gray-500 ml-4 mr-2">TECH STACK:</span>
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1 text-xs font-mono transition-all duration-300 ${filter === f
                                ? "text-red-500 border-b border-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Evidence Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {filteredEvidence.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: hoveredId === item.id ? 0 : Math.random() * 6 - 3 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="group relative z-10"
                                style={{ zIndex: hoveredId === item.id ? 50 : 10 }}
                            >
                                {/* String connections (Visual only, simpler than actual connecting lines) */}
                                <div className="absolute -top-12 left-1/2 w-[1px] h-12 bg-red-800/60 z-0 origin-bottom animate-pulse"></div>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full shadow-md z-20 border border-red-900"></div>

                                {/* Polaroid Card */}
                                <div className="bg-white p-3 pb-12 shadow-2xl transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2 relative">
                                    <div className="aspect-video bg-gray-900 border border-gray-200 overflow-hidden relative group-cursor-zoom-in">
                                        {/* Placeholder Image or Real Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-black/80 text-white text-[10px] px-2 py-1 font-mono">
                                            {item.id}
                                        </div>
                                    </div>

                                    <div className="mt-4 px-2 text-center relative">
                                        <h3 className="font-typewriter font-bold text-lg text-black mb-1">{item.title}</h3>
                                        <p className="font-sans text-xs text-gray-500 line-clamp-2">{item.description}</p>

                                        <div className="mt-3 flex flex-wrap justify-center gap-1">
                                            {item.tech.map(t => (
                                                <span key={t} className="text-[9px] bg-gray-100 text-gray-600 px-1 border border-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Status Stamp */}
                                    <div className="absolute bottom-4 right-4 transform -rotate-12 opacity-70">
                                        <span className={`text-xs font-black border-2 px-1 uppercase ${item.status === "DEPLOYED" ? "text-green-700 border-green-700" :
                                            item.status === "CLASSIFIED" ? "text-red-700 border-red-700" :
                                                "text-blue-700 border-blue-700"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Random connecting lines (SVG) */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-20">
                    <path d="M50% 10% L 20% 40%" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M50% 10% L 80% 40%" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M20% 40% L 50% 70%" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
            </div>
        </section>
    )
}
