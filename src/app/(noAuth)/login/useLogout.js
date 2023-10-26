import { handleSignOut } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogOut(){

    const router = useRouter();

    const { mutate:logout ,isLoading} = useMutation({
        
        mutationFn: handleSignOut,

        onSuccess:() => {
            router.refresh()
            router.replace('/')
        },

        onError:() => {
            toast.error('Error loging out... Try again');
        }

        
    })

   
    return {logout}
}

