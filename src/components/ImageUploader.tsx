'use client'; 

import React, { useState, ChangeEvent, FormEvent } from 'react';
// Removed: import { uploadImageToSupabase } from '@/lib/uploadUtils'; 
import { FiUploadCloud, FiLock, FiCheckCircle, FiAlertTriangle, FiImage } from 'react-icons/fi';
import { uploadImageServerAction } from '@/app/actions'; // Using the Server Action

// NOTE: This MUST match the hardcoded value in app/actions.ts
const HARDCODED_OTP = '7465'; 

// The component no longer accepts a prop
export default function ImageUploader() { 
  const [otp, setOtp] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' }>({ text: 'Enter OTP to enable upload.', type: 'info' });

  const isOtpValid = otp === HARDCODED_OTP;
  
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      // Basic check to ensure it's an image file
      const selectedFile = event.target.files[0];
      if (selectedFile.type.startsWith('image/')) {
         setFile(selectedFile);
      } else {
         setFile(null);
         setMessage({ text: 'Selected file must be an image.', type: 'error' });
      }
    } else {
      setFile(null);
    }
  };

  const handleUpload = async (event: FormEvent) => {
    event.preventDefault();

    if (!isOtpValid) {
        setMessage({ text: 'Invalid OTP. Please try again.', type: 'error' });
        return;
    }

    if (!file) {
        setMessage({ text: 'Please select an image file first.', type: 'error' });
        return;
    }

    setIsUploading(true);
    setMessage({ text: 'Uploading image...', type: 'info' });

    try {
        // Create FormData object
        const formData = new FormData();
        formData.append('file', file); // 'file' is the key expected by the Server Action
        
        // CALL THE SERVER ACTION
        const result = await uploadImageServerAction(otp, formData); 

        if (result.success) {
            setMessage({ text: 'Image uploaded successfully! Gallery is refreshing.', type: 'success' });
            setFile(null); 
            setOtp('');    
            // The Server Action handles revalidation, which triggers the Gallery page to re-render.
        } else {
            // Display error from the server action
            setMessage({ text: result.error || 'Upload failed due to unknown error.', type: 'error' }); 
        }
    } catch (error) {
        setMessage({ text: 'An unexpected network error occurred.', type: 'error' });
    } finally {
        setIsUploading(false);
    }
  };

  const getMessageStyles = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700 border-green-400';
      case 'error':
        return 'bg-red-100 text-red-700 border-red-400';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-700 border-blue-400';
    }
  };

  return (
    <div className="p-6 border border-dashed border-gray-300 rounded-xl bg-white shadow-sm mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
        <FiUploadCloud className="mr-2 text-indigo-600" />
        Admin Image Uploader
      </h2>
      
      {/* Message Box */}
      {message.text && (
        <div className={`p-3 rounded-lg border flex items-center mb-4 ${getMessageStyles(message.type)}`}>
          {message.type === 'success' && <FiCheckCircle className="w-5 h-5 mr-2" />}
          {message.type === 'error' && <FiAlertTriangle className="w-5 h-5 mr-2" />}
          {message.type === 'info' && <FiImage className="w-5 h-5 mr-2" />}
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      <form onSubmit={handleUpload} className="space-y-4">
        {/* OTP Input */}
        <div className="flex items-center space-x-4">
          <FiLock className="text-gray-500" />
          <input
            type="password"
            placeholder="Enter Hardcoded OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            disabled={isUploading}
          />
        </div>

        {/* File Input */}
        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-indigo-50 file:text-indigo-700
                       hover:file:bg-indigo-100
                       disabled:opacity-50"
            disabled={!isOtpValid || isUploading}
          />
          {file && (
            <span className="text-sm text-gray-600 truncate max-w-[150px]">{file.name}</span>
          )}
        </div>

        {/* Upload Button */}
        <button
          type="submit"
          disabled={!isOtpValid || !file || isUploading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-150 ${
            !isOtpValid || !file || isUploading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-md'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
    </div>
  );
}
