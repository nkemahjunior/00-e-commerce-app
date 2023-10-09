import { getPartyClothes } from "@/api/getPartyClothes"
import { prefetchData } from "@/helpers/prefetchData"
import { useQuery } from "@tanstack/react-query"
import { usePathname, useSearchParams,useRouter  } from "next/navigation"

import { useCallback } from "react"

export function useGetPartyClothes(){

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const createQueryString = useCallback(

        (name, value) => {

          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )

    const curPage = Number(searchParams.get('page'))
    
    curPage === 0 || null || undefined ? router.push(pathname + '?' + createQueryString('page', 1)) : Number(searchParams.get('page'))


    const {data:{data,count,error} = {},isLoading} = useQuery({
        queryKey:['party',curPage],
        queryFn:() => getPartyClothes({curPage})

    })

    //prefetching
    prefetchData(count,curPage,getPartyClothes,'party')

    //console.log(data,count,error)

    return {data,count,error,isLoading}
}