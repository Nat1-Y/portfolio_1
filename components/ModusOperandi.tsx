"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";

const skillCategories = [
    {
        id: "TS",
        name: "TypeScript",
        type: "Language",
        level: 5,
        capabilities: ["Type-safe scalable systems", "Complex state management"],
    },
    {
        id: "NEXTJS",
        name: "Next.js",
        type: "Framework",
        level: 5,
        capabilities: ["Server-side rendering", "Edge runtime optimization"],
    },
    {
        id: "PYTHON",
        name: "Python",
        type: "Language",
        level: 5,
        capabilities: ["AI/ML pipeline automation", "Rapid prototyping"],
    },
    {
        id: "CICD",
        name: "CI/CD",
        type: "DevOps",
        level: 5,
        capabilities: ["Automated deployment pipelines", "Pipeline-as-code"],
    },
    {
        id: "EXPRESS",
        name: "Express.js",
        type: "Backend",
        level: 5,
        capabilities: ["Scalable REST APIs", "Middleware orchestration"],
    },
    {
        id: "FIGMA",
        name: "Figma",
        type: "Design",
        level: 5,
        capabilities: ["UI/UX Prototyping", "Design system management"],
    },
    {
        id: "SVELTEKIT",
        name: "SvelteKit",
        type: "Framework",
        level: 5,
        capabilities: ["Reactive web applications", "Lightweight performance"],
    },
    {
        id: "GCP",
        name: "GCP",
        type: "Cloud",
        level: 5,
        capabilities: ["Cloud infrastructure", "Serverless orchestration"],
    },
];

export default function ModusOperandi() {
    return (
        <section id="modus-operandi" className="py-24 relative overflow-hidden scroll-mt-24">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16 relative z-10">
                <div className="inline-block px-4 py-1 bg-[#e2d5b5] text-red-900 font-bold font-mono text-sm transform -rotate-2 mb-4 shadow-sm border border-red-900/20">
                    CLASSIFIED DOCUMENTATION // PROJECT 2026-X
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase text-stroke relative">
                    MODUS OPERANDI
                </h2>
                <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-red-600/30 opacity-50 pointer-events-none"></div>
                <p className="mt-4 text-muted-foreground italic max-w-lg text-center font-mono text-sm">
                    "The patterns of execution. Every build is a calculated strike. Every line is a trace left behind."
                </p>
                <div className="absolute right-4 top-0 text-[10px] font-mono text-red-600 text-right hidden md:block">
                    <p>THREAT STATUS: <span className="bg-red-900 text-white px-1">CRITICAL</span></p>
                    <p>CLEARANCE: LEVEL 5 OMNI</p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <div className="col-span-1 lg:col-span-1 mb-8">
                    <div className="border border-red-900/30 bg-red-950/10 p-4">
                        <h3 className="text-red-500 font-mono font-bold flex items-center gap-2">
                            <span className="animate-pulse">⦿</span> PRIMARY WEAPONS
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 mb-8 lg:col-start-3">
                    <div className="border border-blue-900/30 bg-blue-950/10 p-4">
                        <h3 className="text-blue-500 font-mono font-bold">
                            TACTICAL ASSETS
                        </h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {skillCategories.map((skill, i) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0f0f11] border border-[#27272a] p-4 relative group hover:border-red-900/50 transition-colors"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4 border-b border-[#27272a] pb-2">
                            <div>
                                <p className="text-[10px] text-[#52525b] font-mono">ITEM ID: {skill.id}</p>
                                <h4 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">{skill.name}</h4>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx < skill.level ? 'bg-red-600' : 'bg-[#27272a]'}`} />
                                ))}
                            </div>
                        </div>

                        {/* Capabilities */}
                        <div className="space-y-2">
                            <p className="text-[10px] text-red-900 font-bold uppercase">Capabilities:</p>
                            <ul className="space-y-1">
                                {skill.capabilities.map((cap, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-[#a1a1aa] font-mono">
                                        <span className="text-red-600 mt-0.5">•</span>
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-900/50"></div>
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-900/50"></div>
                    </motion.div>
                ))}
            </div>

            {/* Radar / Tech visual decoration (Right side) */}
            <div className="hidden lg:block absolute top-1/4 right-10 w-64 h-64 border border-green-900/20 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-full h-[1px] bg-green-900/30 absolute"></div>
                <div className="h-full w-[1px] bg-green-900/30 absolute"></div>
                <div className="w-48 h-48 border border-green-900/20 rounded-full animate-pulse"></div>
            </div>
        </section>
    );
}
