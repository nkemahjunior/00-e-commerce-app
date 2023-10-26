import { checkIfUserIsLogin } from "@/app/auth/checkLogin"

export const revalidate = 0;

async function page() {

    await checkIfUserIsLogin('/login',false);

    return (
        <div className="h-screen  w-screen flex justify-center items-center">
            <div className="">
                <p>payment</p>
                <p>still in development...</p>
            </div>
        </div>
    )
}

export default page
