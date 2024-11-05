import { checkIfUserIsLogin } from "@/app/auth/checkLogin"
import Login from "@/ui/Login"
import { redirect } from "next/navigation";

async function page() {

    
        const session = await checkIfUserIsLogin();
        if (session) redirect("/newArrivals?page=1");
    
    return (
        <div className="px-6 md:px-40 lg:px-72 xl:px-[24rem] 2xl:px-[40rem]">
            <Login/>
        </div>
    )
}

export default page
