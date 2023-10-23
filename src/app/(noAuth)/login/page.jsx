import Login from "@/ui/Login"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabaseKey, supabaseUrl } from "@/services/supabase url&key";

async function page() {

    
    const cookieStore = cookies()

    const supabase = createServerComponentClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey});

        const {data:{ session }} = await supabase.auth.getSession();

        if(session) {
            redirect('/payment')
        }
    

    
    return (
        <>
            <Login/>
        </>
    )
}

export default page
