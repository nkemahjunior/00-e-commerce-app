import { getAllNewArrivals } from "@/api/getAllClothes";
import { useQuery } from "@tanstack/react-query";

export  function useAllNewArrivals(){

    const{isLoading,data,error} = useQuery({
        queryKey:['allNewArrivals'],
        queryFn: getAllNewArrivals
    })

   return {isLoading,data,error}
}