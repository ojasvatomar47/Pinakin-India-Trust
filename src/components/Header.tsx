'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react'; // Using Lucide icons for a modern look
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="bg-white shadow-xl py-4 px-6 md:px-12 sticky top-0 z-50 border-b-4 border-indigo-600">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link
          href="/"
          className="flex items-center text-2xl sm:text-3xl font-extrabold text-indigo-700 hover:text-indigo-900 transition duration-300"
          onClick={closeMobileMenu}
        >
          {/* Logo */}
          <Image
            src="/logo.png"  // or /logo.png
            alt="Pinakin India Trust Logo"
            width={40}        // adjust size
            height={40}
            className="mr-2"
          />
          Pinakin India Trust
        </Link>

        {/* Desktop Navigation Links - visible on medium and larger screens */}
        <ul className="hidden md:flex flex-wrap justify-center gap-x-6 lg:gap-x-10 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md hover:bg-indigo-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Highlighted Contact/Donation CTA Button */}
          <li>
            <Link
              href="/donate"
              className="ml-4 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-md font-bold shadow-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Donate / Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) - visible only on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" /> // Close Icon (X)
            ) : (
              <Menu className="h-6 w-6" /> // Hamburger Icon
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-40" onClick={closeMobileMenu}>
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="flex flex-col space-y-4 text-xl font-medium">
              {[...navLinks, { name: 'Donate / Contact', href: '/donate', cta: true }].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-2 rounded-md transition duration-300 
                                ${('cta' in link && link.cta) // <-- CORRECT WAY TO CHECK IN TS
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 font-bold'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
