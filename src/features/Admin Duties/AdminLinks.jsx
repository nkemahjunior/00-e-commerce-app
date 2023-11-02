"use client"

import { handleSignOut } from "@/api/authentication";
import { useLogOut } from "@/app/(noAuth)/login/useLogout";

import Link from "next/link";
import { useGetUser } from "./useGetUser";
import { useRouter } from "next/navigation";
import { useState } from "react";


 function AdminLinks() {

    // const {data:{user},error} = await supabase.auth.getUser();

    const router = useRouter();
    const {logout,isLoading:load} = useLogOut();
    const {data:user, isLoading} = useGetUser();
    // const [active,setActive] = useState(false)
    // const [admin,setAdmin] = useState(false)

    if(isLoading) return(<></>)

   
    console.log(user)


    let active = false;
    let admin = false;
    if(user?.user !== null){
      // setActive(true)
      active = true
      if(user?.user?.user_metadata?.isAdmin === true)
        admin = true
    }


    

    

    // const admin = user.user.user_metadata.isAdmin
    
    
    // let isAdmin = false;

    // if(session !== false)
    //  ({isAdmin} = session.user.user_metadata) //sets isAdmin to true
   

    
   


    
    return (
        <ul className="space-y-5 md:space-y-1">
          { !active &&  <Link href={'/signup'} className="block"><li className="capitalize font-semibold md:font-light ">sign up</li></Link> }

           {
            !active ? <Link href={'/login'} className="block"><li className="capitalize font-semibold md:font-light">sign in</li></Link>
             : 
             <li className="capitalize font-semibold md:font-light md:hover:text-red-500" onClick={logout} >{load ? 'logging Out..' : 'logout' }</li>
           }
           
           
           { 
            admin && <Link href={'/admin'} className="block"><li className="capitalize font-semibold md:font-light md:hover:text-red-500" > admin dashboard</li></Link>
           } 
        </ul>
    )
}

export default AdminLinks
