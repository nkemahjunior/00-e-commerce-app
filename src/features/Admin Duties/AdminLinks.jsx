"use client"

import { handleSignOut } from "@/api/authentication";
import { useLogOut } from "@/app/(noAuth)/login/useLogout";

import Link from "next/link";


 function AdminLinks({session}) {

    // const {data:{user},error} = await supabase.auth.getUser();

    
    const {logout} = useLogOut();

    
    
    let isAdmin = false;

    if(session !== false)
     ({isAdmin} = session.user.user_metadata) //sets isAdmin to true
   

    
   


    
    return (
        <ul className="space-y-5 md:space-y-1">
          {session === false ?  <Link href={'/signup'} className="block"><li className="capitalize font-semibold md:font-light ">sign up</li></Link>
           : 
           '' }

           {
            session === false ? <Link href={'/login'} className="block"><li className="capitalize font-semibold md:font-light">sign in</li></Link>
             : 
             <li className="capitalize font-semibold md:font-light md:hover:text-red-500" onClick={logout}>logout</li>
           }
           
           
           { 
            isAdmin && <Link href={'/admin'} className="block"><li className="capitalize font-semibold md:font-light md:hover:text-red-500" > admin dashboard</li></Link>
           } 
        </ul>
    )
}

export default AdminLinks
