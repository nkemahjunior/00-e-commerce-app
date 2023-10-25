import { checkIfUserIsLogin } from "@/app/auth/checkLogin";
import Signup from "@/ui/Signup"



async function page() {
    
    await checkIfUserIsLogin('/payment',true);

    
    return (
        <Signup/>
    )
}

export default page
