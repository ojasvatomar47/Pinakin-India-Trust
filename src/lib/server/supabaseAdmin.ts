import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These environment variables are only safe to use on the server (not client component)
const serviceKey: string = process.env.SUPABASE_SERVICE_KEY!;
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;

if (!serviceKey) {
  throw new Error('Missing SUPABASE_SERVICE_KEY environment variable. Cannot perform admin tasks.');
}

// This client uses the Service Role Key for server-side operations
export const supabaseAdmin: SupabaseClient = createClient(supabaseUrl, serviceKey, {
  auth: {
    // Ensures no session persistence on the server
    persistSession: false, 
  }
});
