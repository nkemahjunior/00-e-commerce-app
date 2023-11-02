import { supabaseKey, supabaseUrl } from "@/services/supabase url&key";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"



export  async function POST(request){

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey})
    

    const formData = await request.json();
    
    const{name,price,qty,category,imageName,xs,s,m,l,xl,twoXl,threeXl} = formData;

    // https://nfveqfruwcnhdggiiqys.supabase.co/storage/v1/object/public/formal/1698880054798-postE02.jpg
    
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/formal/${imageName}`

    const id = Date.now()

    const {  error } = await supabase
    .from('clothes')
    .insert([
    { id:id, name: name, type:category,quantity:+qty,price:+price,image:imageUrl,xs:+xs,s:+s,m:+m,l:+l,xl:+xl,twoXl:+twoXl,threeXl:+threeXl },
    ])
    


    if(error){
        console.log(error)
        return NextResponse.json(error,{
            status:400
        })
    }
 
    console.log(imageUrl)
    return NextResponse.json(formData)
   
}