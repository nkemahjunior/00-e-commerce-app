import Login from "@/ui/Login"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {

    
        const supabase = createServerComponentClient({cookies});

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
