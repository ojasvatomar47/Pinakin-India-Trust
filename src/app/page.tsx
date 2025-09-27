// src/app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiGlobe, FiTarget, FiHeart, FiBriefcase, FiAperture, FiCreditCard } from 'react-icons/fi';

// --- 1. Define Theme Colors and Data ---
const THEME_COLORS = {
  primary: 'indigo', // Indigo-700 for main actions and background accents
  secondary: 'yellow', // Yellow-500 for highlight accents
  dark: 'gray-800',
  light: 'gray-50',
};

// Simplified handler data (Replace with actual names and roles)
const TRUST_HANDLERS = [
  {
    name: 'Mr. Pinakin Verma',
    role: 'Founder & Managing Trustee',
    image: '/images/p1.jpg',
    bio: 'Visionary behind the trust, dedicated to community empowerment and education.',
    icon: '👤'
  },
  {
    name: 'Mrs. Anjali Rao',
    role: 'Director of Programs',
    image: '/images/p3.jpg',
    bio: 'Oversees project implementation, focusing on maximizing social impact and outreach.',
    icon: '💡'
  },
  {
    name: 'Mr. Dev Singh',
    role: 'Financial Officer',
    image: '/images/p2.jpg',
    bio: 'Ensures transparent and efficient use of funds, upholding donor trust and compliance.',
    icon: '💰'
  },
];

// Donation details
const BANK_DETAILS = {
  accountName: 'Pinakin India Trust',
  accountNumber: '1234567890123',
  ifscCode: 'SBIN000001',
  bank: 'State Bank of India',
};


export default function HomePage() {
  return (
    <div className={`bg-${THEME_COLORS.light}`}>

      {/* ---------------------------------------------------- */}
      {/* 1. Hero Section (Header) - IMPROVED CONTRAST */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <Image
          src="/images/t1.jpg"
          alt="Community support project by Pinakin India Trust"
          fill
          style={{ objectFit: 'cover' }}
          className="blur-sm"
          priority
        />
        {/* Adjusted opacity for better text visibility */}
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="relative z-10 text-white p-6 py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Empowering Communities. Building Futures.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-95 drop-shadow-md font-medium">
            The Pinakin India Trust is dedicated to fostering sustainable change through education, health, and social welfare programs across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services"
              className={`button-primary bg-${THEME_COLORS.primary}-600 text-white shadow-lg hover:bg-${THEME_COLORS.primary}-700`}>
              See Our Programs
            </Link>
            <Link href="/contact"
              className="button-secondary border border-white text-white hover:bg-white hover:text-indigo-700">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Added global Tailwind utility styles for consistent buttons */}
      <style jsx global>{`
        .button-primary {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
          transform: scale(1);
        }
        .button-primary:hover {
          transform: scale(1.05);
        }
        .button-secondary {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
          transform: scale(1);
        }
        .button-secondary:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* ---------------------------------------------------- */}
      {/* 2. About Us Summary & CTA - VISIBILITY FINE */}
      {/* ---------------------------------------------------- */}
      // Updated section for Integrity. Impact. Change.
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {/* Adjusted to bold/extrabold font for higher impact */}
          Integrity. Impact. Change.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
          The Pinakin India Trust was founded on the principle that sustainable development is driven by local initiatives and unwavering commitment. We focus on transparent operations and measurable impact in education, health, and community building, ensuring every contribution leads to a tangible improvement in lives.
        </p>

        {/* Redesigned Cards for Visual Appeal and Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

          {/* Card 1: Focus on Community */}
          <div className="p-6 md:p-8 rounded-xl shadow-xl bg-white border-b-4 border-indigo-600 transition duration-300 hover:shadow-2xl hover:bg-indigo-50 transform hover:-translate-y-1">
            <FiUsers className="text-5xl mx-auto mb-4 text-indigo-700" />
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">Focus on Community</h3>
            <p className="text-gray-600 text-sm">Our grassroots approach ensures that every project is locally driven, addressing the most pressing needs of the community.</p>
          </div>

          {/* Card 2: Global Standards */}
          <div className="p-6 md:p-8 rounded-xl shadow-xl bg-white border-b-4 border-indigo-600 transition duration-300 hover:shadow-2xl hover:bg-indigo-50 transform hover:-translate-y-1">
            <FiGlobe className="text-5xl mx-auto mb-4 text-indigo-700" />
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">Global Standards</h3>
            <p className="text-gray-600 text-sm">We adhere to the highest international standards of governance and best practices for charitable operations.</p>
          </div>

          {/* Card 3: Measurable Impact */}
          <div className="p-6 md:p-8 rounded-xl shadow-xl bg-white border-b-4 border-indigo-600 transition duration-300 hover:shadow-2xl hover:bg-indigo-50 transform hover:-translate-y-1">
            <FiTarget className="text-5xl mx-auto mb-4 text-indigo-700" />
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">Measurable Impact</h3>
            <p className="text-gray-600 text-sm">We track and report our results diligently, guaranteeing that your support translates into quantifiable, positive change.</p>
          </div>
        </div>

        <Link href="/about-us"
          className={`button-primary bg-indigo-700 text-white shadow-lg hover:bg-indigo-800`}>
          Read Our Full Story →
        </Link>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. Trust Handlers / Leadership Team - REDESIGNED */}
      {/* ---------------------------------------------------- */}
      <section className={`bg-gradient-to-r from-${THEME_COLORS.primary}-50 to-white py-16 md:py-24`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Stewards of Pinakin India Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our trust is driven by a passionate team committed to transparency and dedicated action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TRUST_HANDLERS.map((handler, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-yellow-500 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col items-center text-center">
                {/* Image is now larger (w-40 h-40) and styled professionally */}
                <div className="relative w-40 h-40 mb-5 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
                  <Image
                    src={handler.image}
                    alt={`Portrait of ${handler.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition duration-500 ease-in-out hover:opacity-80"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{handler.name}</h3>
                {/* Role is highlighted */}
                <p className={`text-lg font-semibold text-${THEME_COLORS.primary}-600 mb-4`}>{handler.role}</p>
                <p className="text-gray-600 text-base italic">{handler.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. Services Summary & CTA - VISIBILITY FINE */}
      {/* ---------------------------------------------------- */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Pillars of Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We focus our efforts across three vital areas—Education, Health, and Livelihoods—to ensure comprehensive and lasting social development where it is needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            icon={<FiBriefcase className={`text-5xl text-${THEME_COLORS.secondary}-500`} />}
            title="Education & Skilling"
            description="Providing access to quality learning and vocational training to create paths to stable employment."
          />
          <ServiceCard
            icon={<FiHeart className={`text-5xl text-${THEME_COLORS.secondary}-500`} />}
            title="Health & Wellness"
            description="Running health camps and ensuring basic medical access in underserved and rural areas."
          />
          <ServiceCard
            icon={<FiUsers className={`text-5xl text-${THEME_COLORS.secondary}-500`} />}
            title="Livelihood & Support"
            description="Creating self-help groups and supporting local entrepreneurship for financial stability."
          />
        </div>

        <div className="text-center">
          <Link href="/services"
            className={`button-primary bg-${THEME_COLORS.primary}-700 text-white shadow-lg hover:bg-${THEME_COLORS.primary}-800`}>
            View All Programs →
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. Gallery Showcase & CTA - VISIBILITY FINE */}
      {/* ---------------------------------------------------- */}
      <section className={`bg-${THEME_COLORS.dark} text-white py-16 md:py-24 text-center`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <FiAperture className="text-6xl mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Witness Our Impact
          </h2>
          <p className="text-lg md:text-xl opacity-90 mx-auto mb-10">
            See the real-world difference your support makes. Our gallery showcases moments from our latest initiatives, events, and project completions.
          </p>
          <Link href="/gallery"
            className={`button-secondary border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-${THEME_COLORS.dark}`}>
            Explore the Gallery →
          </Link>
        </div>
      </section>

      // ----------------------------------------------------
      // 6. Donation & Contact CTA - VISIBILITY IMPROVED
      // ----------------------------------------------------
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Support Our Mission: Donate Today
        </h2>

        {/* REDESIGNED CARD: Higher contrast, clearer separation */}
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl border-t-8 border-indigo-600 max-w-3xl mx-auto">
          <FiCreditCard className="text-5xl mx-auto mb-4 text-green-600" />
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Every contribution directly fuels our initiatives in education and welfare. Your support makes a tangible difference.
          </p>

          {/* HIGH-CONTRAST BANK DETAILS BLOCK */}
          <div className="text-left space-y-4 p-4 md:p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200 shadow-inner">
            <h3 className="text-2xl font-bold text-indigo-800 border-b pb-2 mb-2">Official Bank Account Details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-base md:text-lg">
              <p><strong className='text-black'>Account Name:</strong> <span className="font-semibold text-gray-900">{BANK_DETAILS.accountName}</span></p>
              <p><strong className='text-black'>Bank:</strong> <span className="font-semibold text-gray-900">{BANK_DETAILS.bank}</span></p>
            </div>

            <div className="border-t pt-3">
              <p className="mb-2 text-black"><strong>Account Number:</strong></p>
              {/* ACCOUNT NUMBER: Use dark, highly visible background for number */}
              <div className="font-mono text-xl text-gray-900 bg-yellow-300 p-2 rounded-md shadow-sm select-all">
                {BANK_DETAILS.accountNumber}
              </div>
            </div>

            <div>
              <p className="mb-2 text-black"><strong>IFSC Code:</strong></p>
              {/* IFSC: Use dark, highly visible background */}
              <div className="font-mono text-xl text-gray-900 bg-yellow-300 p-2 rounded-md shadow-sm select-all">
                {BANK_DETAILS.ifscCode}
              </div>
            </div>
          </div>
          {/* END HIGH-CONTRAST BANK DETAILS BLOCK */}

          <p className="text-lg text-gray-700 mt-8 font-semibold">
            Important: After donating, please click the button below to send us a confirmation message (including the transaction ID) so we can issue your official tax receipt.
          </p>

          {/* CTA Button is Green (universal donate color) */}
          <Link href="/contact"
            className="mt-8 inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-105">
            Confirm Donation →
          </Link>
        </div>
      </section>

    </div>
  );
}

// Helper Card Component for Services
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center border-b-4 border-yellow-500">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);
