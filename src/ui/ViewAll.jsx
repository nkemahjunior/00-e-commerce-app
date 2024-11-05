'use client'
// import { useRouter } from "next/navigation"
import Button from "./Button"

function ViewAll() {
    // const router = useRouter()


    // function viewAllClothes(){
    //     router.push('/allClothes')
    // }

    return (
      <div className="lg:flex lg:justify-center mt-2 md:mt-4 ">
        <Button text={"view all"} />
      </div>
    );
}

export default ViewAll
