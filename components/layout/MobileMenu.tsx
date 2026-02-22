'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ⭐ IMPORTANT FIX
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 md:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-4 right-4 w-64 
        bg-white 
        border border-purple-500 
        rounded-2xl 
        shadow-lg 
        z-50 md:hidden">

        <div className="p-6 relative">

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-purple-700 cursor-pointer"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className="mt-8 space-y-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block font-medium text-lg transition ${
                    isActive
                      ? 'text-purple-600 font-bold'
                      : 'text-black hover:text-purple-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA Button */}
            <button
              onClick={() => {
                router.push('/contact');
                onClose();
              }}
              className="w-full bg-purple-600 font-bold text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer mt-6"
            >
              Get a Quote
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
