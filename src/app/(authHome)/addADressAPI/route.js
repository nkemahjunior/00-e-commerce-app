import { supabaseKey, supabaseUrl } from "@/services/supabase url&key";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"



export  async function POST(request){

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey})
    

    const formData = await request.json();
    
    // const{name,price,qty,category,/*image */xs,s,m,l,xl,twoXl,threeXl} = formData;

    const randomID = Math.random()
    const id = Date.now()

    // const { data, error } = await supabase
    // .from('clothes')
    // .insert([
    // { id:id, name: name, type:category,quantity:+qty,price:+price,xs:+xs,s:+s,m:+m,l:+l,xl:+xl },
    // ])
    
    // if(error){
    //     return NextResponse.json(error,{
    //         status:400
    //     })
    // }
 
    console.log(formData)
    return NextResponse.json(formData)
   
}