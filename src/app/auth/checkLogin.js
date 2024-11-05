import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


import { supabaseKey, supabaseUrl } from "@/services/supabase";

export async function checkIfUserIsLogin() {
  const cookieStore = await cookies();
  const supabase = createServerComponentClient(
    { cookies: () => cookieStore },
    { supabaseUrl, supabaseKey }
  );
    
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session

}

// export async function checkIfUserIsLogin(route,isLogin){

//     const Login = isLogin;

//     const cookieStore = await cookies()

//     const supabase = createServerComponentClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey});

//     const { data: { session } } = await supabase.auth.getSession();

//     console.log();
//     console.log(data);

//         if( Login && session) {
//             redirect(route)
//         }

//         if( !Login && !session){
//             redirect(route)
//         }

//         if(!route && !isLogin && session){
//             return session;
//         }else{
//             return false;
//         }

// }
