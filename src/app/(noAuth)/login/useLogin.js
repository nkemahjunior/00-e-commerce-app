import { handleLogIn } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import {  useRouter } from "next/navigation";
import toast from "react-hot-toast";


export function useLogin(){
    const router = useRouter();
    
   
    const {mutate:Login ,isLoading} = useMutation({
        mutationFn:({email,password}) => handleLogIn({email,password}),
        onSuccess:(data) =>{ 
           router.refresh()
           //router.replace('/signup')
           
        },
        onError: (err) => {
            toast.error('Provided email or password are incorrect');
        },

    })

    return {Login,isLoading}
}