"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute -left-[3px] top-0 h-full w-[4px] bg-primary"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-widest text-background bg-primary -rotate-2"
            >
                CASE FILE #404: OPEN
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground uppercase"
            >
                {profileData.name}
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl font-mono text-primary mb-8 flex items-center gap-4"
            >
                <span className="w-12 h-[1px] bg-primary/50"></span>
                {profileData.title}
                <span className="w-12 h-[1px] bg-primary/50"></span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-xl text-lg text-muted-foreground font-light leading-relaxed border-l-2 border-muted pl-6 italic"
            >
                "{profileData.tagline}"
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 flex gap-4"
            >
                <div className="w-32 h-32 border border-dashed border-muted flex items-center justify-center rotate-3 overflow-hidden bg-card grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                        src="/Suspect_photo.JPG"
                        alt="Suspect photo"
                        className="w-full h-full object-cover opacity-90"
                        loading="eager"
                    />
                </div>
                <div className="font-mono text-xs text-muted-foreground space-y-2 mt-4">
                    <p>LAST SEEN: {profileData.experience[0].location}</p>
                    <p>STATUS: ACTIVE</p>
                    <p>WARNING: ARMED WITH CODE</p>
                </div>
            </motion.div>
        </section>
    );
}
