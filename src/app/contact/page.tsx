'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { FiMail, FiHeart, FiUser, FiCreditCard } from 'react-icons/fi'; // Using Fi icons for visual appeal

// Define Theme Colors for consistency
const THEME_COLORS = {
  primary: 'indigo', 
  secondary: 'yellow', 
};

// NOTE: Using the Formspree endpoint from the user's provided code for continuity.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkwazaj'; 

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // We use standard form submission here for simplicity with Formspree's redirect/success page.
  // For a seamless UX without redirects, you would use fetch() and handle state internally (as shown in the earlier solution).
  // Assuming the user wants the quick Formspree integration via action/method.

  return (
    <div className="bg-gray-50 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* Contact Hero/Intro Section (Themed) */}
      {/* ---------------------------------------------------- */}
      <section className={`relative bg-${THEME_COLORS.primary}-700 text-white py-16 md:py-24 text-center overflow-hidden shadow-xl`}>
        <Image
          src="/images/t3.jpg" // Reusing placeholder background image
          alt="Contact Pinakin India Trust"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-20"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Connect With Our Team
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Whether you have a question about our programs, governance, or a donation confirmation, we are here to assist you.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Contact Form & Confirmation Instructions Section */}
      {/* ---------------------------------------------------- */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Contact Form (Takes 2/3 space on large screens) */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-xl shadow-2xl border-t-8 border-indigo-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Send a Message or Confirm Donation
          </h2>
          
          <form
            action={FORMSPREE_ENDPOINT} 
            method="POST" 
            className="space-y-6"
            // Simple method to simulate success message if fetch were used: 
            // onSubmit={(e) => { e.preventDefault(); fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(e.target as HTMLFormElement) }).then(() => setIsSubmitted(true)); }}
          >
            {/* 1. Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name" 
                  className="pl-10 block text-gray-800 w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            {/* 2. Contact Info (Email/Phone) */}
            <div>
              <label htmlFor="contact_info" className="block text-sm font-semibold text-gray-700 mb-2">Email ID or Phone Number</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="contact_info"
                  name="contact_info" 
                  className="pl-10 block text-gray-800 w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                  placeholder="e.g., you@example.com or +91 9876543210"
                  required
                />
              </div>
            </div>

            {/* 3. Subject (using Formspree's _subject) */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="_subject" 
                className="block text-gray-800 w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                placeholder="Inquiry, Donation Confirmation, etc."
                required
              />
            </div>
            
            {/* 4. Message (combined general message and donation details) */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message / Donation Details
              </label>
              <textarea
                id="message"
                name="message" 
                rows={5}
                className="block text-gray-800 w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                placeholder="If confirming a donation, please include the exact amount, date, and Transaction ID/UPI Ref."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-indigo-700 transition duration-300 shadow-xl transform hover:scale-[1.01]`}
            >
              Send Message
            </button>

            {isSubmitted && (
                <p className="text-center text-green-600 font-semibold mt-4">Thank you! Your message has been sent.</p>
            )}
          </form>
        </div>

        {/* Contact/Donation Instructions & Info (Takes 1/3 space on large screens) */}
        <div className={`bg-white p-8 rounded-xl shadow-2xl border-t-8 border-yellow-500 flex flex-col justify-between h-fit lg:sticky lg:top-24`}>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Key Contact Information
            </h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="flex items-start text-lg">
                <FiMail className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                    <span className="font-semibold block">General Inquiries</span>
                    <a href="mailto:info@pinakinindiatrust.org" className="hover:text-indigo-700 hover:underline">info@pinakinindiatrust.org</a>
                </div>
              </div>

              <div className="flex items-start text-lg">
                <FiHeart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                    <span className="font-semibold block">Partnerships & CSR</span>
                    <a href="mailto:partnerships@pinakinindiatrust.org" className="hover:text-indigo-700 hover:underline">partnerships@pinakinindiatrust.org</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Donation Confirmation Reminder */}
          <div className="mt-12 p-5 bg-yellow-50 rounded-lg shadow-inner border border-yellow-200">
              <FiCreditCard className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Donation Confirmation</h3>
              <p className="text-gray-700 text-base">
                  If you have made a donation via bank transfer, please use the form to the left to submit the transaction ID/reference so we can verify the contribution and send your tax receipt promptly.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
