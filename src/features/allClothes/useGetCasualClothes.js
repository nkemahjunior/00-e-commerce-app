import { filtersParams } from "@/api/filtersParams";
import { getCasualClothes } from "@/api/getCasualClothes";
import { prefetchData } from "@/helpers/prefetchData";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export  function useGetCasualClothes(){

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

    const {sortBy,startPriceRange,priceRange1,priceRange2,priceRange} = filtersParams(searchParams)
    
    curPage === 0 || null || undefined ? router.push(pathname + '?' + createQueryString('page', 1)) : Number(searchParams.get('page'))




    const {data:{data,count,error} = {},isLoading} = useQuery({
        queryKey:['casual',curPage,sortBy,startPriceRange,priceRange1,priceRange2,priceRange],

        queryFn:() => getCasualClothes({curPage,sortBy,startPriceRange,priceRange1,priceRange2})

    })

    //prefetching
    prefetchData(count,curPage,getCasualClothes,'casual')

    //console.log(data,count,error)

    return {data,count,error,isLoading}
}