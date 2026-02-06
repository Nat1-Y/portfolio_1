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
    { href: "#timeline", label: "Timeline", icon: FileText },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/40">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold font-mono tracking-tighter text-primary flex items-center gap-2">
                    <Skull className="w-6 h-6" />
                    CASE_FILE_<span className="text-foreground">#404</span>
                </Link>

                {/* Desktop Nav - File Tabs Style */}
                <div className="hidden md:flex items-end h-full">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.includes(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-6 py-2 h-10 flex items-center gap-2 text-sm font-medium transition-colors border-t border-l border-r border-transparent rounded-t-lg mx-1",
                                    isActive
                                        ? "bg-card text-primary border-border translate-y-[1px]"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-background"
                                    />
                                )}
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
