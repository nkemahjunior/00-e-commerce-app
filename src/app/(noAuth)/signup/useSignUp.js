import { handleSignUp } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(){

    const router = useRouter()
    const{mutate:signup,isLoading} = useMutation({

        mutationFn:({ fullName, email, password})=> handleSignUp({ fullName, email, password}),
        onSuccess:() => {
            router.replace('/payment')
        },
        onError:() => {
            toast.error('user already exist');
        }
    })

    return {signup,isLoading}
}