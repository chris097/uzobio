'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative bg-[#0a0a0a]">
            <header className="text-white flex justify-between items-center max-w-7xl mx-auto h-[112px] px-4 md:px-8">
                <h1 className="text-xl md:text-2xl font-bold">Uzobankz</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 md:space-x-8 text-sm md:text-lg">
                        <li><Link href="/" className="hover:underline">HOME</Link></li>
                        <li><Link href="/bio" className="hover:underline">BIO</Link></li>
                        <li><Link href="/contact" className="hover:underline">CONTACT</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Animated Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[112px] left-0 w-full bg-[#0a0a0a] px-4 pb-6 z-50 md:hidden shadow-lg"
                    >
                        <ul className="flex flex-col space-y-4 text-lg text-white">
                            <li><Link href="/" className="hover:underline">HOME</Link></li>
                            <li><Link href="/bio" className="hover:underline">BIO</Link></li>
                            <li><Link href="/contact" className="hover:underline">CONTACT</Link></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;