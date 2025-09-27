import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables are guaranteed to be strings by Next.js in a build environment, 
// but we use the non-null assertion operator (!) since they come from process.env
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Explicitly type the supabase client
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
