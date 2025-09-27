import { supabase } from './supabaseClient';

// Define a type for the successful upload response data structure
interface UploadSuccessData {
  path: string;
  fullPath: string;
}

/**
 * Uploads a file to Supabase Storage.
 * @param {File} file - The file to upload.
 * @returns {Promise<UploadSuccessData | null>} The path information on success, or null on error.
 */
export async function uploadImageToSupabase(file: File): Promise<UploadSuccessData | null> {
  // 1. Create a unique file path
  const fileExtension = file.name.split('.').pop();
  // Ensure the folder path is correct (match the 'public' folder setup)
  const filePath = `public/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
  const bucketName = 'gallery-images';

  // 2. Perform the upload
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || 'image/jpeg', 
    });

  if (error) {
    console.error('Supabase upload error:', error);
    return null;
  }

  // FIX: data is guaranteed to be of type UploadSuccessData on success.
  // We don't need the unsafe 'as FileObject' cast anymore.
  return data as UploadSuccessData;
}
