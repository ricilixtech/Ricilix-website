'use client';
import Image from "next/image";


import { useState, useEffect, useRef } from 'react';
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

    const lastScrollY = useRef(0); // ✅ persists value

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // ⭐ Always show navbar near top
            if (currentScrollY < 50) {
                setShowNavbar(true);
            }
            else if (currentScrollY > lastScrollY.current) {
                // scrolling down
                setShowNavbar(false);
            }
            else {
                // scrolling up
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/portfolio', label: 'Portfolio' },
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
                <nav className=" mx-auto bg-gray-800 text-white border border-red-500 rounded-2xl shadow-sm">

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/pictures/HomePage/R logo.png"
                                    alt="Ricilix Logo"
                                    width={160}
                                    height={50}
                                    priority
                                    className="h-17 xl:h-20 text-red-500 w-auto object-contain hover:opacity-80 transition"
                                />
                            </Link>


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
                                                    ? 'text-red-600 font-bold'
                                                    : 'text-neutral-200 hover:text-red-200'
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
                                    className="bg-red-600 font-bold text-white 
                                    px-6 py-2 rounded-lg hover:bg-red-700 transition">
                                    Get a Quote
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <button
                                className="md:hidden text-red-700"
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
