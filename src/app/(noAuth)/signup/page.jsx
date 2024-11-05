import { checkIfUserIsLogin } from "@/app/auth/checkLogin";
import Signup from "@/ui/Signup";
import { redirect } from "next/navigation";

async function page() {
  const session = await checkIfUserIsLogin();
  if (session) redirect("/newArrivals?page=1");

  return (
    <div className="px-6 md:px-40 lg:px-72 xl:px-[24rem] 2xl:px-[40rem] border-2 ">
      <Signup />
    </div>
  );
}

export default page;
