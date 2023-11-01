import { supabaseKey, supabaseUrl } from '@/services/supabase url&key';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient({supabaseUrl,supabaseKey})


export async function handleLogIn ({email,password}) {

    

    const{data,error} = await supabase.auth.          signInWithPassword({
        email,
        password,
    })

     

    if (error) throw new Error(error.message);

    return data
        
        
}


export async function handleSignUp({ name, email, password}){

    const{data,error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data:{
                name,
            },
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
    })

    if(!error) await createProfile();

    if(error) throw new Error(error.message)

    return data
}

 async function createProfile(){


    const {data: { user },error} = await supabase.auth.getUser()
    let name = user?.user_metadata.name
    let id = user?.id
   

       
  
    const { data, error:err } = await supabase
    .from('profiles')
    .insert([
    { userName: name, userID: id },
    ])
    .select()

    if(error) console.log("could not get user ")

    if(err) throw new Error(err.message);

    return data;
}


export async function getUser(){


    try {
        const {data,error} = await supabase.auth.getUser();
    
        return data;

    } catch (error) {
        
        console.log("error getting user "+ error.message)
    }

}


export async function handleSignOut(){

    const {error} = await supabase.auth.signOut()

    if(error) throw new Error("could not log out .. " + error.message )
    

    console.log("rrrrrrrrrrrrr")
   
}