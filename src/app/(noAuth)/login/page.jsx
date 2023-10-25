import { checkIfUserIsLogin } from "@/app/auth/checkLogin"
import Login from "@/ui/Login"

async function page() {

    
        await checkIfUserIsLogin('/payment',true);
    
    return (
        <>
            <Login/>
        </>
    )
}

export default page
