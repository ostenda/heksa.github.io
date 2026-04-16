'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Klub' },
    { href: '#programs', label: 'Program' },
    { href: '#schedule', label: 'Plan' },
  ];

  const CTA = { href: '#contact', label: 'Kontakt' };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo.jpg"
            alt="KS HEKSA"
            width={52}
            height={52}
            className="h-12 w-auto object-contain rounded"
          />
          <span className="hidden sm:block font-bold text-gray-900 text-lg leading-tight">
            KS <span className="text-orange-600">HEKSA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-gray-600 font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-orange-600 transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={CTA.href}
            className="bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
          >
            {CTA.label}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 pb-5">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-gray-700 font-medium hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={CTA.href}
                className="block text-center bg-orange-600 text-white font-semibold py-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {CTA.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
