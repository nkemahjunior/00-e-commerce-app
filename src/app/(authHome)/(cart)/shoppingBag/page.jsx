
import dynamic from "next/dynamic"
import GlobalLoading from "@/ui/GlobalLoading"
import Navigation from "@/features/allClothes/Navigation"

function page() {

    const ShoppingBag = dynamic(() => import('@/features/shoppinBag-checkout/ShoppingBag'),{
        ssr:false,
        loading:() => <GlobalLoading/>
    }
   )
    return (
        <>
        <div className=" -px-6  md:px-[1rem] lg:px-[2rem] xl:px-[3rem] 2xl:px-[5rem] ">
            <Navigation/>
        </div>
            
           <ShoppingBag/>
        </>
    )
}

export default page
