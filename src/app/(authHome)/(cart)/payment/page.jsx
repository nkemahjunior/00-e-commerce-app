import { checkIfUserIsLogin } from "@/app/auth/checkLogin"

export const revalidate = 0;

async function page() {

    await checkIfUserIsLogin('/login',false);

    return (
        <div>
            payment
        </div>
    )
}

export default page
