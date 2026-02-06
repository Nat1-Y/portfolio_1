"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";

export default function SuspectProfile() {
    return (
        <section className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold font-mono text-primary uppercase tracking-widest">
                    Suspect Profile
                </h2>
                <div className="h-[2px] bg-primary/20 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border p-8 rounded-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-2 bg-primary/10 text-primary text-xs font-mono">
                        CONFIDENTIAL
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-mono">BACKGROUND_CHECK</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {profileData.profile}
                    </p>

                    <div className="mt-8 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contact Intel</h4>
                        <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">EMAIL:</span>
                                <a href={`mailto:${profileData.contact.email}`} className="hover:text-primary transition-colors underline decoration-dotted">{profileData.contact.email}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">GITHUB:</span>
                                <a href={profileData.contact.github} target="_blank" className="hover:text-primary transition-colors underline decoration-dotted">github.com/Nat1-Y</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-xl font-bold font-mono">KNOWN_ASSOCIATES (SKILLS)</h3>
                    <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-3 py-1 bg-secondary border border-border text-sm font-mono text-secondary-foreground hover:border-primary hover:text-primary transition-colors cursor-crosshair"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-sm">
                        <h4 className="text-sm font-bold text-primary mb-2 font-mono">LATEST ACTIVITY</h4>
                        <div className="space-y-4">
                            {profileData.experience.slice(0, 2).map((exp, i) => (
                                <div key={i} className="border-l-2 border-primary/40 pl-4">
                                    <p className="font-bold text-sm">{exp.position}</p>
                                    <p className="text-xs text-muted-foreground">{exp.company} | {exp.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
