import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiBookOpen, FiHeart, FiBriefcase, FiTarget, FiHelpCircle } from 'react-icons/fi';

// Define Theme Colors for consistency
const THEME_COLORS = {
  primary: 'indigo', 
  secondary: 'yellow', 
};

interface Program {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: JSX.Element;
    ctaText: string;
    link: string;
    color: string;
    id: number;
}

// Define the data for the three core programs
const CORE_PROGRAMS: Program[] = [
  {
    title: 'Education & Vocational Skilling',
    subtitle: 'Building Foundations for a Brighter Tomorrow',
    description: 'We believe education is the most powerful tool for change. Our initiatives focus on improving school enrollment, providing access to quality learning resources, and offering vocational training for youth. This ensures beneficiaries gain the practical skills needed to secure stable employment and lift their families out of poverty.',
    image: '/images/t1.jpg', 
    icon: <FiBookOpen className="text-6xl text-white" />,
    ctaText: 'View Education Projects in Gallery',
    link: '/gallery', // Valid link
    color: 'indigo-600',
    id: 1,
  },
  {
    title: 'Health, Sanitation & Wellness',
    subtitle: 'Nurturing Healthy Minds and Bodies in Underserved Areas',
    description: 'Access to basic healthcare is a fundamental right. We organize regular medical camps, awareness drives on hygiene and sanitation, and provide essential nutritional support to mothers and children. Our goal is to reduce preventable diseases and promote long-term well-being within our communities.',
    image: '/images/t2.jpg', 
    icon: <FiHeart className="text-6xl text-white" />,
    ctaText: 'Contact for Health Initiatives',
    link: '/donate', // Valid link
    color: 'teal-600',
    id: 2,
  },
  {
    title: 'Livelihood & Community Support',
    subtitle: 'Empowering Local Economies Through Entrepreneurship',
    description: 'Our livelihood programs focus on creating sustainable income streams. We establish self-help groups, provide micro-financing support, and teach practical skills like tailoring, farming techniques, and digital literacy. We empower individuals, especially women, to become financially independent and leaders in their communities.',
    image: '/images/t3.jpg', 
    icon: <FiBriefcase className="text-6xl text-white" />,
    ctaText: 'Support a Community Project',
    link: '/donate', // Valid link
    color: 'amber-600',
    id: 3,
  },
];

// Reusable component for the alternating program sections (Fixed Typings)
const ProgramDetailCard: React.FC<{ program: Program }> = ({ program }) => {
  const isReverse = program.id % 2 === 0;

  return (
    <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white shadow-2xl rounded-xl overflow-hidden group transition duration-500 hover:shadow-3xl`}>
      
      {/* Image Side (Added aspect ratio and padding adjustment for placeholder look) */}
      <div className={`relative w-full md:w-1/2 h-80 ${isReverse ? 'border-r-8 border-yellow-500' : 'border-l-8 border-yellow-500'}`}>
        <Image
          src={program.image}
          alt={`Pinakin Trust Program: ${program.title}`}
          fill
          // Ensure image covers the area completely
          style={{ objectFit: 'cover' }} 
          // Slight transformation based on ID for visual variety among placeholders
          className={`group-hover:scale-[1.03] transition duration-500 ease-in-out ${program.id === 2 ? 'scale-105' : ''}`}
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 p-8 lg:p-12 space-y-4 flex flex-col justify-center">
        <span className={`text-sm font-semibold uppercase text-${program.color}`}>
          Core Program {program.id}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {program.title}
        </h2>
        <h3 className="text-xl font-semibold text-gray-700">
          {program.subtitle}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {program.description}
        </p>
        
        {/* Call to Action Button */}
        <Link href={program.link} 
          className={`mt-6 inline-flex items-center justify-center self-start text-sm font-semibold px-6 py-3 rounded-full 
                      bg-${THEME_COLORS.primary}-700 text-white shadow-lg hover:bg-${THEME_COLORS.primary}-800 
                      transition duration-300 transform hover:scale-[1.02]`}>
          <FiTarget className="w-4 h-4 mr-2" />
          {program.ctaText}
        </Link>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <div className={`bg-gray-50`}>
      
      {/* 1. Hero Section: Services Overview */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/logo.png" 
          alt="Pinakin India Trust services overview"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
        <div className="relative z-10 text-white p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Our Sustainable Impact Programs
          </h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">
            We focus our efforts on three fundamental pillars—Education, Health, and Livelihoods—to ensure deep, lasting, and comprehensive social development where it is needed most.
          </p> 
        </div>
      </section>

      {/* 2. Core Pillars Detail Section (Z-Pattern) */}
      <section className="container mx-auto px-4 py-16 md:py-24 space-y-16 lg:space-y-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
            Detailed Program Offerings
        </h2>
        {CORE_PROGRAMS.map((program) => (
          <ProgramDetailCard key={program.id} program={program} />
        ))}
      </section>

      {/* 3. Final CTA: FAQs and Support */}
      <section className="bg-white py-16 md:py-24 text-center border-t-2 border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FiHelpCircle className="text-6xl mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner With Us For Change
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mx-auto mb-10">
            Whether you want to volunteer your skills, inquire about corporate social responsibility (CSR) opportunities, or donate, your partnership is vital to expanding our reach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gallery" 
                className={`inline-block border border-${THEME_COLORS.primary}-700 text-${THEME_COLORS.primary}-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-${THEME_COLORS.primary}-700 hover:text-white transition duration-300 transform hover:scale-105`}>
              See Our Work in Action
            </Link>
            <Link href="/donate" 
                className={`inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105`}>
              Contact Our Partnership Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
