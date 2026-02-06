"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";
import { Circle, MapPin, Calendar } from "lucide-react";

export default function Timeline() {
    return (
        <section id="timeline" className="py-12 relative">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl font-bold font-mono text-primary uppercase tracking-widest">
                    Case History (Timeline)
                </h2>
                <div className="h-[2px] bg-primary/20 flex-1"></div>
            </div>

            <div className="relative border-l-2 border-dashed border-primary/30 ml-4 md:ml-12 space-y-16">
                {profileData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Timeline Node */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300">
                            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                        </div>

                        <div className="bg-card border border-border p-6 rounded-sm hover:border-primary/50 transition-colors relative">
                            {/* Evidence Tag */}
                            <div className="absolute -top-3 -right-3 px-3 py-1 bg-muted font-mono text-xs text-muted-foreground rotate-2 shadow-sm border border-border">
                                EVIDENCE #{index + 1}
                            </div>

                            <h3 className="text-xl font-bold text-foreground flex flex-wrap items-center gap-2">
                                {exp.position}
                                <span className="text-primary text-sm font-mono px-2 py-0.5 border border-primary/30 rounded-full bg-primary/5">
                                    {exp.company}
                                </span>
                            </h3>

                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm text-muted-foreground font-mono">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {exp.period}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                            </div>

                            <ul className="space-y-2 mt-4 text-muted-foreground list-disc pl-4 marker:text-primary">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="leading-relaxed text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-4 border-t border-dashed border-border flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
