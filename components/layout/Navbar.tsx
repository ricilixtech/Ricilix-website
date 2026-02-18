'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Space_Grotesk } from "next/font/google";
import MobileMenu from './MobileMenu';

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <div
                className={`sticky top-4 z-50 px-4 sm:px-6 lg:px-8 
                transition-transform duration-300 ease-in-out
                ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
            >
                <nav className="max-w-7xl mx-auto 
                    bg-white
                    border 
                    border-purple-500 
                    rounded-2xl 
                    shadow-sm">

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            {/* Logo */}
                            <div className="flex items-center">
                                <Link href="/">
                                    <span
                                        className={`${spaceGrotesk.className}
                                        font-bold text-2xl sm:text-3xl lg:text-4xl 
                                        bg-gradient-to-r from-blue-600 to-purple-600 
                                        bg-clip-text text-transparent tracking-tight 
                                        hover:opacity-80 transition`}
                                    >
                                        Ricilix
                                    </span>
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-8">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`font-medium transition 
                                            ${isActive
                                                    ? 'text-blue-600'
                                                    : 'text-neutral-700 hover:text-blue-600'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="hidden md:block">
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-blue-600 font-bold text-white 
                                    px-6 py-2 rounded-lg hover:bg-blue-700 
                                    transition cursor-pointer"
                                >
                                    Get a Quote
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <button
                                className="md:hidden text-neutral-700"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </nav>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
};

export default Navbar;
