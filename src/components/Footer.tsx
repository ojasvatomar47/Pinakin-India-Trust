import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Heart } from 'lucide-react';

const THEME_COLORS = {
  primary: 'indigo',
  secondary: 'yellow',
  dark: 'gray-800',
};

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Donate/donate Us', href: '/donate' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Transparency Report', href: '/report' },
];

export default function Footer() {
  return (
    <footer className={`bg-${THEME_COLORS.dark} text-gray-300 border-t-4 border-yellow-500`}>
      <div className="container mx-auto px-4 py-16 md:py-20">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10 mb-10">

          {/* 1. Trust Mission/Branding */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-0 md:pr-12">
            <Link href="/" className="text-3xl font-extrabold text-white flex items-center">
              <Heart className="w-7 h-7 mr-2 text-yellow-500" fill="#f59e0b" stroke="#f59e0b" />
              Pinakin India Trust
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Dedicated to fostering sustainable community development, ensuring transparency, and creating measurable impact in education, health, and welfare across India.
            </p>
            <div className="mt-4">
              <Link href="/donate"
                className={`inline-block bg-yellow-500 text-${THEME_COLORS.dark} px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-yellow-600 transition duration-300`}>
                Donate Now
              </Link>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 pb-2">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-500 transition duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Legal & Transparency */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 pb-2">Transparency</h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-500 transition duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Information - UPDATED DETAILS */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-indigo-500 pb-2">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <FiMail className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" />
                <a href="mailto:pinakinindiatrust@gmail.com" className="hover:text-yellow-500">pinakinindiatrust@gmail.com</a> {/* UPDATED EMAIL */}
              </p>
              <p className="flex items-start">
                <FiPhone className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" />
                <a href="tel:+919876543210" className="hover:text-yellow-500">+91 98765 43210</a>
              </p>
              <p className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  CORNER SHOP DA256/1 WARD NO. 19, KALYAN ENCLAVE COLONY PART 1 NEAR CHAUPAL RESTAURANT PALWAL, Haryana - 121102 {/* UPDATED ADDRESS */}
                </address>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pinakin India Trust. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition duration-300"><FiFacebook className="w-6 h-6" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-500 transition duration-300"><FiTwitter className="w-6 h-6" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-500 transition duration-300"><FiInstagram className="w-6 h-6" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
