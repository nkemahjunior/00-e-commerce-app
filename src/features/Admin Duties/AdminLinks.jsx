"use client"

import { handleSignOut } from "@/api/authentication";
import { useLogOut } from "@/app/(noAuth)/login/useLogout";

import Link from "next/link";
import { useGetUser } from "./useGetUser";


 function AdminLinks() {

    // const {data:{user},error} = await supabase.auth.getUser();

    
    const {logout} = useLogOut();
    const {data:user, isLoading} = useGetUser();

    if(isLoading) return(<></>)

    const admin = user.user.user_metadata.isAdmin
    
    
    // let isAdmin = false;

    // if(session !== false)
    //  ({isAdmin} = session.user.user_metadata) //sets isAdmin to true
   

    
   


    
    return (
        <ul className="space-y-5 md:space-y-1">
          { !user  &&  <Link href={'/signup'} className="block"><li className="capitalize font-semibold md:font-light ">sign up</li></Link> }

           {
            !user  ? <Link href={'/login'} className="block"><li className="capitalize font-semibold md:font-light">sign in</li></Link>
             : 
             <li className="capitalize font-semibold md:font-light md:hover:text-red-500" onClick={logout}>logout</li>
           }
           
           
           { 
            admin && <Link href={'/admin'} className="block"><li className="capitalize font-semibold md:font-light md:hover:text-red-500" > admin dashboard</li></Link>
           } 
        </ul>
    )
}

export default AdminLinks
