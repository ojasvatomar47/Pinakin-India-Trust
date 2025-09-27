'use client';

import React, { useState } from 'react';
import { FiLock, FiKey } from 'react-icons/fi';
import ImageUploader from '@/components/ImageUploader'; // Import the full uploader

// NOTE: This MUST match the hardcoded value in app/actions.ts
const HARDCODED_OTP = '7465';

export default function MinimalOtpGate() {
    const [otp, setOtp] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState('');

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (otp === HARDCODED_OTP) {
            setIsUnlocked(true);
            setError('');
        } else {
            setError('Invalid code.');
            setOtp(''); // Clear the input on failure
        }
    };

    if (isUnlocked) {
        // If unlocked, show the full uploader component
        return (
            <div className="max-w-xl mx-auto mb-12">
                <ImageUploader />
            </div>
        );
    }

    return (
        <div className="w-full mb-8">
            {/* The main access line at the bottom of the section */}
            <div className="flex justify-center border-t border-gray-200 pt-3">
                <button
                    onClick={() => setIsInputVisible(!isInputVisible)}
                    className={`flex items-center text-sm font-medium transition-colors duration-200 
                      ${isInputVisible ? 'text-indigo-700' : 'text-gray-500 hover:text-indigo-600'}`}
                    aria-expanded={isInputVisible}
                >
                    <FiLock className="w-4 h-4 mr-1" />
                    {isInputVisible ? 'Admin Gallery Access (Hide)' : 'Need to add images? Enter security code.'}
                </button>
            </div>

            {/* Conditional Input Field */}
            <div
                className={`max-w-xs mx-auto overflow-hidden transition-all duration-300 ease-in-out 
                    ${isInputVisible ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <form onSubmit={handleOtpSubmit} className="flex space-x-2 items-center">
                    <div className="relative flex-grow">
                        <FiKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="password"
                            placeholder="Security Code"
                            value={otp}
                            onChange={(e) => { setOtp(e.target.value); setError(''); }}
                            className="w-full text-black p-2 pl-9 border border-gray-300 rounded-md text-sm focus:ring-yellow-500 focus:border-yellow-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-md text-sm font-bold hover:bg-yellow-600 transition duration-150 shadow-md"
                    >
                        Go
                    </button>
                </form>

                {error && (
                    <p className="mt-1 text-red-600 text-xs font-medium text-center">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}
