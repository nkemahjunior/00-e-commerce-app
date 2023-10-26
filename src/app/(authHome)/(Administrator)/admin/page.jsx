import { checkIfSessionExists } from "@/app/auth/checkSession"
import AddDresses from "@/features/Admin Duties/AddDresses";
import { redirect } from "next/navigation";


async function page() {

    const session = await checkIfSessionExists();

    let isAdmin;

    if(session !== false)
     ({isAdmin} = session.user.user_metadata)

   if(!isAdmin) redirect('/');

    return (
        <>
          <AddDresses/>  
        </>
    )
}

export default page
