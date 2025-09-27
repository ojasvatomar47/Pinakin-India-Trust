// src/app/faqs/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHelpCircle } from 'react-icons/fi';

// Define Theme Colors for consistency
const THEME_COLORS = {
  primary: 'indigo',
  secondary: 'yellow',
};

// --- AccordionItem Component (Reusable) ---
interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  // Use Tailwind classes for styling based on theme
  const primaryColorClass = `text-${THEME_COLORS.primary}-700`;
  const hoverBgClass = `hover:bg-${THEME_COLORS.primary}-50`;
  const focusRingClass = `focus:ring-${THEME_COLORS.primary}-500`;

  return (
    <div className="border-b border-gray-200">
      <button
        className={`flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold ${primaryColorClass} ${hoverBgClass} focus:outline-none ${focusRingClass} transition duration-300 rounded-none`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-')}`}
        role="region"
        aria-labelledby={`faq-question-${question.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4 px-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// --- FAQsPage Component ---
export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is Pinakin India Trust legally registered?',
      answer: <>The Pinakin India Trust is a legally registered public charitable trust under the <strong>Indian Trusts Act</strong>. We adhere to all statutory compliances and are registered with the relevant government authorities. This structure ensures our operations are governed by a fiduciary duty to our beneficiaries and the public.</>
    },
    {
      question: 'Where does the majority of my donation go?',
      answer: <>We commit to ensuring that a maximum portion of your donation, **over 85%**, is directed towards our core programs (Education, Health, and Livelihoods). The remainder covers essential administrative costs necessary for audits, compliance, and fundraising. We maintain high standards of <strong>financial transparency</strong>.</>
    },
    {
      question: 'Can I receive a tax exemption certificate for my donation?',
      answer: <>Yes. All donations made to the Pinakin India Trust are eligible for tax exemption under **Section 80G** of the Income Tax Act, 1961, in India. We will issue a tax receipt (80G certificate) promptly after your donation is confirmed. Please use the contact form to share your PAN and transaction details.</>
    },
    {
      question: 'How can I track the impact of my donation?',
      answer: <>We provide regular **Transparency Reports** detailing our project outcomes and fund allocation, available on our website. You can also view real-time progress and photos of our work in the <strong>Gallery section</strong>, which is updated frequently with project milestones.</>
    },
    {
      question: 'How can I volunteer my time or skills?',
      answer: (
        <>
          We welcome dedicated volunteers! We need support in areas like teaching, medical services, event management, and digital literacy.
          <br /><br />
          Please visit the <strong>Contact Us</strong> page and specify "Volunteer Inquiry" in the subject line, detailing your skills and availability. Our outreach team will get back to you shortly.
        </>
      )
    },
    {
      question: 'Does the Trust work in specific geographic regions?',
      answer: <>While our base is currently focused on underserved areas in [State Placeholder, e.g., Uttar Pradesh and Delhi], our vision is national. We select projects based on critical need and the potential for **sustainable, scalable impact**, not just geographical location.</>
    },
    {
      question: 'Who manages the Trust and ensures accountability?',
      answer: <>The Trust is governed by a dedicated <strong>Board of Trustees</strong>, comprising experts in finance, education, and social work. The board ensures financial accountability, ethical governance, and strict adherence to the Trust Deed and Indian laws. You can meet our leadership on the <strong>About Us</strong> page.</>
    },
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const primaryColorClass = `bg-${THEME_COLORS.primary}-700`;
  const primaryHoverClass = `hover:bg-${THEME_COLORS.primary}-800`;

  return (
    <div className="bg-gray-50">

      {/* FAQs Hero/Intro Section */}
      <section className={`relative ${primaryColorClass} text-white py-16 md:py-24 text-center overflow-hidden shadow-lg`}>
        <Image
          src="/images/t4.jpg" // Using the general theme image
          alt="Pinakin India Trust FAQs"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-20"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Find quick, transparent answers to common questions regarding our mission, finances, and ways you can help.
          </p>
        </div>
      </section>

      {/* FAQs Content Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-indigo-50 rounded-xl shadow-lg border-t-4 border-yellow-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            If your question wasn't answered here, please don't hesitate to reach out to our team directly. We prioritize transparency.
          </p>
          {/* CTA Button using primary theme colors */}
          <Link
            href="/contact"
            className={`inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Contact Us Directly
          </Link>
        </div>
      </section>
    </div>
  );
}
