import { checkIfSessionExists } from "@/app/auth/checkSession"
import { redirect } from "next/navigation";


async function page() {

    const session = await checkIfSessionExists();

    let isAdmin;

    if(session !== false)
     ({isAdmin} = session.user.user_metadata)

   if(!isAdmin) redirect('/');

    return (
        <div>
            admin
        </div>
    )
}

export default page
