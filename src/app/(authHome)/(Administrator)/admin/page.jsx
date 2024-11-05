import { checkIfUserIsLogin, checkIfUserIsLogin } from "@/app/auth/checkLogin";
import { checkIfSessionExists } from "@/app/auth/checkSession"
import AddDresses from "@/features/Admin Duties/AddDresses";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";




async function page() {

  //const session = await checkIfSessionExists();
  const session = await checkIfUserIsLogin()

      

    let isAdmin;

    if(session )
     ({isAdmin} = session.user.user_metadata)

   if(!isAdmin) redirect('/');

    

    return (
        <>
          <AddDresses/>  
        </>
    )
}

export default page
