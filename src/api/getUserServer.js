import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { supabaseKey, supabaseUrl } from "@/services/supabase";

export async function getUserServer() {
  const cookieStore = await cookies();
  const supabase = createServerComponentClient(
    { cookies: () => cookieStore },
    { supabaseUrl, supabaseKey },
  );

  const {
    data: {
      session: { user },
    },
  } = await supabase.auth.getSession();

  return user;
}
