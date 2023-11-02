import { getUser } from "@/api/authentication"
import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"


  export function useGetUser(){

    const path = usePathname();
    const {data,isLoading} = useQuery({
        queryKey:['user',path],
        queryFn:getUser
    })

    return {data, isLoading}
  }