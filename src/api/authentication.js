import { supabaseKey, supabaseUrl } from '@/services/supabase url&key';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export async function handleLogIn ({email,password}) {

    
    const supabase = createClientComponentClient({supabaseUrl,supabaseKey})

    const{data,error} = await supabase.auth.          signInWithPassword({
        email,
        password,
    })

    if (error) throw new Error(error.message);

    return data
        
        
}


export async function handleSignUp({ fullName, email, password}){
    const supabase = createClientComponentClient({supabaseUrl,supabaseKey})

    const{data,error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data:{
                fullName
            },
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
    })

    if(error) throw new Error(error.message)

    return data
}