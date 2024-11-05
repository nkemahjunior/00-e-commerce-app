import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://euzdjprdvjwzsjgqxyfj.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1emRqcHJkdmp3enNqZ3F4eWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MDE3NzEsImV4cCI6MjA0NjI3Nzc3MX0.dCSmXatKUpSTkBOUrY--v0VfTrD7G0UjiixDAo-lB2w";
export const supabase = createClient(supabaseUrl, supabaseKey);

// export default  supabase;
