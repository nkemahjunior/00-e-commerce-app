import { getAllNewArrivals } from "@/api/getAllClothes";
import { getGymClothes } from "@/api/getGymClothes"
import { prefetchData } from "@/helpers/prefetchData";
import PAGE_SIZE from "@/ui/PAGE_SIZE";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useGetGymClothes(){

   

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
        queryKey:['gym',curPage],
        queryFn:() => getGymClothes({curPage})

    })


       //prefetching
       prefetchData(count,curPage,getGymClothes,'gym')


    //console.log(data,count,error)

    return {data,count,error,isLoading}
}