"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FolderOpen, User, FileText, Briefcase, Menu, X, Skull } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Case #404", icon: Skull },
    { href: "#suspect", label: "Suspect", icon: User },
    { href: "#evidence", label: "Evidence", icon: FolderOpen },
    { href: "#modus-operandi", label: "Modus Operandi", icon: Briefcase },
    { href: "#timeline", label: "Timeline", icon: FileText },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-40 bg-transparent pointer-events-none">
            {/* Gradient Overlay for legibility */}
            <div className="absolute inset-0 h-24 bg-gradient-to-b from-background to-transparent -z-10" />

            <nav className="container mx-auto px-4 h-16 flex items-start justify-center pt-2 pointer-events-auto">

                {/* Desktop Nav - Folder Tabs Style */}
                <div className="hidden md:flex items-end h-full space-x-1 perspective-500">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.includes(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-6 py-2 pb-3 h-12 flex items-center gap-2 text-sm font-bold tracking-wider transition-all duration-300 clip-path-polygon",
                                    isActive
                                        ? "bg-[#e2d5b5] text-red-900 border-t-2 border-red-900 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)] z-10 translate-y-2 scale-110"
                                        : "bg-[#2a2a2a] text-gray-500 hover:text-gray-300 hover:bg-[#333] translate-y-4 hover:translate-y-2"
                                )}
                                style={{
                                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                                }}
                            >
                                {/* Only show icon for Case #404 to save space/style */}
                                {link.href === "/" && <link.icon className="w-4 h-4" />}
                                {!isActive && link.href === "/" ? "CASE FILE" : link.label.toUpperCase()}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-card border-b border-border shadow-2xl p-4 flex flex-col gap-2"
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent/10 hover:text-accent transition-colors text-muted-foreground text-sm font-mono border border-transparent hover:border-accent/20"
                        >
                            <link.icon className="w-4 h-4" />
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
