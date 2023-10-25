import { getUser } from "@/api/authentication"
import { useQuery } from "@tanstack/react-query"


  export function useGetUser(){
    const {data,isLoading} = useQuery({
        queryKey:['user'],
        queryFn:getUser
    })

    return {data, isLoading}
  }