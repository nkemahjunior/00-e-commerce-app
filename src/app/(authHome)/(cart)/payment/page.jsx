import { checkIfUserIsLogin } from "@/app/auth/checkLogin"
import PaymentMessage from "@/ui/PaymentMessage";

import { redirect } from "next/dist/server/api-utils";

export const revalidate = 0;

async function page() {

    const session = await checkIfUserIsLogin();
    if(!session) redirect("/login")
    

    

    return (
        <div className="h-screen  w-screen flex justify-center items-center ">
            <PaymentMessage />
        </div>
    )
}

export default page
