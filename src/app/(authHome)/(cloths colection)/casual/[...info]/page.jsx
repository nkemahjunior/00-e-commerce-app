import { getADress } from "@/api/getADress"
import AllArrivalsDetail from "@/features/allClothes/AllArrivalsDetail"
import Navigation from "@/features/allClothes/Navigation"
import GlobalLoading from "@/ui/GlobalLoading"
import { Suspense } from "react"


async function page({params}) {

        const param = await params;
        const info = param?.info;

    const id = info[1]

    const {data,error} = await getADress('casual',id)

    const [detail] = data;
    
     return (
        <Suspense fallback={<GlobalLoading/>}>
            <Navigation/>
            <AllArrivalsDetail data={detail} error={error} />
        </Suspense>
    )
}

export default page
