'use server'; // <--- MUST be at the top of the file!
import { supabaseAdmin } from '@/lib/server/supabaseAdmin';
import { revalidatePath } from 'next/cache';

// NOTE: This MUST match the hardcoded value in ImageUploader.tsx
const HARDCODED_OTP = '1234'; 

export async function uploadImageServerAction(otp: string, formData: FormData) {
  if (otp !== HARDCODED_OTP) {
    return { error: 'Invalid OTP provided.' };
  }

  const file = formData.get('file') as File | null;
  if (!file || file.size === 0) {
    return { error: 'No file selected.' };
  }
  
  // 1. Create unique file path
  const fileExtension = file.name.split('.').pop();
  const filePath = `public/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
  const bucketName = 'gallery-images';

  // 2. Perform the upload using the Admin Client
  const { error } = await supabaseAdmin.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || 'image/jpeg',
    });

  if (error) {
    console.error('Secure Supabase upload error:', error);
    return { error: `Upload failed: ${error.message}` };
  }

  // 👇 THE CRITICAL FIX: Invalidate the cache for the gallery page
  revalidatePath('/gallery'); 

  return { success: true };
}
