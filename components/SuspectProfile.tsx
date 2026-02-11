"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";
import { Github, Linkedin, Send, Terminal } from "lucide-react";

export default function SuspectProfile() {
    return (
        <section id="suspect" className="py-24 flex justify-center scroll-mt-24">
            <div className="bg-paper p-8 md:p-12 max-w-5xl w-full shadow-2xl rotate-1 relative">
                {/* Paper Clip/Tape decoration used to be here, simplified for code */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#e5e5e5]/50 rotate-[-1deg] backdrop-blur-sm shadow-sm z-10"></div>

                {/* Header */}
                <div className="border-b-4 border-black pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase relative z-10">
                            SUSPECT PROFILE
                        </h2>
                        <p className="text-sm font-mono text-gray-600">DEPARTMENT OF INVESTIGATION // CASE #404</p>
                    </div>
                    <div className="text-right font-mono text-xs md:text-sm text-gray-800">
                        <p>DATE: {new Date().toLocaleDateString()}</p>
                        <p>STATUS: <span className="text-red-600 font-bold text-lg">AT LARGE</span></p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    {/* Left Column: Polaroid Photo */}
                    <div className="md:col-span-5 relative">
                        <motion.div
                            initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
                            whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-4 pb-16 shadow-polaroid transform -rotate-2 hover:rotate-0 transition-transform duration-300 relative z-10"
                        >
                            <div className="aspect-[4/5] bg-gray-200 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500 relative">
                                <img
                                    src="/Suspect_photo.JPG"
                                    alt="Suspect Mugshot"
                                    className="w-full h-full object-cover"
                                />
                                {/* Red Pin */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-md border border-red-800 z-20"></div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-black text-black uppercase tracking-widest font-mono">
                                    {profileData.name}
                                </h3>
                            </div>
                        </motion.div>
                        <div className="mt-8 p-4 border-2 border-dashed border-red-300 bg-red-50 relative rotate-1">
                            <p className="text-xs font-bold text-red-800 uppercase text-center font-mono">
                                LAST SEEN AT:
                                <br />
                                <span className="text-lg text-red-600">{profileData.experience[0].location}</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:col-span-7 space-y-8 text-gray-900 font-typewriter">
                        {/* Vital Stats */}
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-b-2 border-dashed border-gray-400 pb-8">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase font-sans">NAME</p>
                                <p className="text-xl font-bold">{profileData.name} A.K.A Solo Codes</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase font-sans">ALIAS</p>
                                <p className="text-xl">{profileData.title}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase font-sans">LAST SEEN</p>
                                <p className="text-lg">Shipping Code @ 3AM</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase font-sans">MOTIVE</p>
                                <p className="text-lg">Obsession with Building</p>
                            </div>
                        </div>

                        {/* Analysis */}
                        <div>
                            <h4 className="text-2xl font-bold border-b-2 border-black inline-block mb-4 font-sans">Psychological Analysis</h4>
                            <p className="leading-relaxed text-sm md:text-base">
                                Subject displays high aptitude for complex problem solving. Tendency to over-engineer solutions if not monitored. Known to operate across the full stack, showing disregard for frontend/backend boundaries.
                            </p>
                        </div>

                        {/* Background */}
                        <div>
                            <h4 className="text-2xl font-bold border-b-2 border-black inline-block mb-4 font-sans">Background</h4>
                            <p className="leading-relaxed text-sm md:text-base">
                                {profileData.profile}
                            </p>
                        </div>

                        {/* Digital Footprint */}
                        <div>
                            <h4 className="text-xl font-bold text-red-800 border-b border-red-800 inline-block mb-4 font-sans uppercase tracking-widest">
                                DIGITAL FOOTPRINT
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <a href={profileData.contact.github} target="_blank" className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-red-700 transition-colors">
                                    <Github className="w-4 h-4" /> GITHUB.EXE
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-blue-700 transition-colors">
                                    <Linkedin className="w-4 h-4" /> LINKEDIN.COM
                                </a>
                                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-green-700 transition-colors">
                                    <Send className="w-4 h-4" /> CONTACT.MSG
                                </a>
                                <div className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-yellow-700 transition-colors cursor-help" title="No logs found">
                                    <Terminal className="w-4 h-4" /> X_COM.LOG
                                </div>
                            </div>
                        </div>

                        {/* Stamp */}
                        <div className="absolute bottom-8 right-8 pointer-events-none opacity-80">
                            <div className="border-[6px] border-red-600/50 p-2 transform -rotate-12 mask-image">
                                <span className="text-5xl md:text-6xl font-black text-red-600/50 uppercase tracking-tighter">CONFIDENTIAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
