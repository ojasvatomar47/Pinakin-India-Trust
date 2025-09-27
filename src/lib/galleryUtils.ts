// OLD: import { supabase } from './supabaseClient';
// 👇 NEW: Import the secure admin client (you may need to create this file structure)
import { supabaseAdmin } from './server/supabaseAdmin'; 

/**
 * Fetches the public URLs for all images in the specified Supabase storage bucket folder.
 * This runs on the server, so we use the secure admin client.
 * @returns {Promise<string[]>} An array of public URLs for the images.
 */
export async function getGalleryImageUrls(): Promise<string[]> {
  const bucketName = 'gallery-images'; 
  const folderPath = 'public'; 

  // 👇 CHANGED: Use supabaseAdmin here to guarantee read access on the server
  const { data, error } = await supabaseAdmin.storage
    .from(bucketName)
    .list(folderPath, {
      limit: 100, 
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

  if (error) {
    // CRITICAL: Log the error type to confirm it's fixed
    console.error('Error listing files from Supabase (using Admin Key):', error);
    return []; 
  }

  if (!data) {
    return [];
  }

  // --- REST OF THE CODE REMAINS THE SAME ---

  const imageFiles = data.filter(file => file.name !== '.emptyPlaceholder' && file.name !== '.gitkeep');

  const imageUrls: string[] = imageFiles.map(file => {
    const filePath = `${folderPath}/${file.name}`;
    
    // NOTE: You still must use the ANONYMOUS client here for getPublicUrl()
    // because the resulting URL is a public link meant for client consumption.
    // Assuming you have 'lib/supabaseClient.ts' still exporting 'supabase' (anon key client)
    
    // Fallback: If you don't want to import the Anon client, the URL structure is predictable:
    const publicBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    return `${publicBaseUrl}/storage/v1/object/public/${bucketName}/${filePath}`;

  }).filter(url => !!url);

  return imageUrls;
}
