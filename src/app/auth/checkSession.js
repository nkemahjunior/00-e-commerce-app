
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


import { supabaseKey, supabaseUrl } from "@/services/supabase url&key";


export async function checkIfSessionExists(){

  
    
    const cookieStore = cookies()

    const supabase = createServerComponentClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey});

        const {data:{ session }} = await supabase.auth.getSession();

    if(session){
    return session
    }else{
        return false;
    }

    // else if(!session){
    // return false}

        
    
}