import {  handleSignUp } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(){

    const router = useRouter()
    const{mutate:signup,isLoading} = useMutation({

        mutationFn:({ name, email, password})=> handleSignUp({ name, email, password}),
        onSuccess:() => {
            
           // router.replace('/payment')
            router.refresh()
        },
        onError:() => {
            toast.error('user already exist');
        }
    })

    return {signup,isLoading}
}