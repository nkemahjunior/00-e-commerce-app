import { handleSignUp } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(origin) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      handleSignUp({ name, email, password }),
    onSuccess: () => {
      router.replace(`${origin}${redirect}`);
      //router.refresh()
      // console.log(location + "***************");
      // router.push(`${location.origin}/${redirect}`);
    },
    onError: () => {
      toast.error("user already exist");
    },
  });

  return { signup, isLoading };
}
