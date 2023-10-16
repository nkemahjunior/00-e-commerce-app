import { getADress } from "@/api/getADress"
import AllArrivalsDetail from "@/features/allClothes/AllArrivalsDetail"
import GlobalLoading from "@/ui/GlobalLoading"
import { Suspense } from "react"

async function page({params}) {

    const info = params?.info

    const id = info[1]

    const {data,error} = await getADress('formal',id)

    const [detail] = data;
    
     return (
        <Suspense fallback={<GlobalLoading/>}>
            dfghjklm
            <AllArrivalsDetail data={detail} error={error} />
        </Suspense>
    )
}

export default page
