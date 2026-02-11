"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";
import { Activity, Clock, ShieldCheck, Terminal } from "lucide-react";

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 relative bg-black/40 border-t border-red-900/30 scroll-mt-24">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-red-900/30 pb-4">
                    <div>
                        <p className="text-red-600 font-mono text-xs tracking-[0.3em] mb-2">DEEP ARCHIVE // SYSTEM LOGS</p>
                        <h2 className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter uppercase relative">
                            CHRONOLOGY
                            <span className="absolute -top-4 -right-8 w-4 h-4 rounded-full bg-red-600 animate-pulse"></span>
                        </h2>
                    </div>
                    <div className="flex gap-4 text-[10px] font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-3 h-3 text-red-500" /> TERMINAL: DX404
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-green-500" /> STATUS: ONLINE
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3 text-blue-500" /> CONNECTION: SECURED
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    {/* Left: Access Logs (Experience) */}
                    <div className="md:col-span-4 space-y-8 relative">
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-red-600 to-transparent"></div>

                        <h3 className="text-xl text-[#e2d5b5] font-mono border-l-4 border-red-600 pl-4 mb-8">ACCESS LOGS</h3>

                        {profileData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="pl-8 relative group"
                            >
                                {/* Connector */}
                                <div className="absolute left-0 top-1 w-4 h-[1px] bg-red-600"></div>
                                <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 bg-red-600 rounded-full group-hover:animate-ping"></div>

                                <div className="border border-gray-800 bg-[#0a0a0a] p-4 hover:border-red-900/50 transition-colors group-hover:bg-[#111]">
                                    <p className="text-xs font-mono text-green-500 mb-1 uppercase">{exp.period}</p>
                                    <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">{exp.company}</h4>
                                    <p className="text-sm text-gray-400 italic mb-2">"{exp.position}"</p>
                                    <p className="text-xs text-gray-500 font-mono line-clamp-2">
                                        {exp.achievements[0]}
                                    </p>
                                    <div className="mt-2 text-[10px] text-gray-600 font-mono text-right">REF: LOG_00{index + 1}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Surveillance Feed (Decoration/Summary) */}
                    <div className="md:col-span-8 space-y-8">
                        {/* Fake Git Graph */}
                        <div className="border border-gray-800 bg-black/50 p-6 relative overflow-hidden">
                            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-2">
                                <h3 className="text-xl text-white font-mono italic">LIVE SURVEILLANCE FEED</h3>
                                <div className="flex gap-2">
                                    <span className="text-[10px] bg-green-900/20 text-green-500 px-2 py-1 rounded border border-green-900/30 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span> UPLINK: STABLE
                                    </span>
                                    <span className="text-[10px] bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-800 uppercase">
                                        GITHUB_UPTIME
                                    </span>
                                </div>
                            </div>

                            {/* Contribution Graph Visual */}
                            <div className="flex gap-1 flex-wrap opacity-50 justify-end">
                                {[...Array(160)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-3 h-3 rounded-sm ${Math.random() > 0.7 ? 'bg-green-500' :
                                            Math.random() > 0.5 ? 'bg-green-700' :
                                                Math.random() > 0.3 ? 'bg-green-900' : 'bg-gray-800'
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            <div className="mt-2 text-[9px] font-mono text-gray-500 flex justify-between uppercase">
                                <span>1401 activities tracked</span>
                                <span>Less <span className="inline-block w-2 h-2 bg-gray-800"></span> <span className="inline-block w-2 h-2 bg-green-500"></span> More</span>
                            </div>
                        </div>

                        {/* Summary Box */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-red-900/30 bg-red-950/5 p-6 relative">
                                <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> INVESTIGATION SUMMARY
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                    THE SUBJECT EXHIBITS HIGHLY FOCUSED CREATIVE OUTPUT. CONTRIBUTION FREQUENCY REMAINS CONSISTENT THROUGHOUT OPERATIONAL HOURS. NO SIGNIFICANT SECURITY BREACHES REPORTED.
                                </p>
                                <div className="mt-4 inline-block bg-red-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase">
                                    STATUS: UNDER CONTINUOUS MONITORING
                                </div>
                                {/* Top Secret Stamp */}
                                <div className="absolute right-4 bottom-4 opacity-10 rotate-[-20deg] border-4 border-red-500 p-2">
                                    <span className="text-4xl font-black text-red-500 uppercase">TOP SECRET</span>
                                </div>
                            </div>

                            <div className="border border-gray-800 p-6 flex flex-col justify-center items-center text-center bg-black">
                                <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center mb-4 relative">
                                    <div className="absolute inset-0 rounded-full border-t-2 border-green-500 animate-spin"></div>
                                    <Terminal className="w-6 h-6 text-green-500" />
                                </div>
                                <h4 className="text-white font-bold tracking-widest uppercase">DATA_SECURE</h4>
                                <p className="text-[10px] text-gray-500 font-mono mt-2">VERIFICATION HASH: 2xF72A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
