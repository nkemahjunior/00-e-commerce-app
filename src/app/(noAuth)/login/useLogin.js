import { handleLogIn } from "@/api/authentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin(origin) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const queryClient = useQueryClient();

  const { mutate: Login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => handleLogIn({ email, password }),
    onSuccess: (data) => {
      //router.push(origin);
      router.refresh();
      queryClient.invalidateQueries("user");
      router.replace(`${origin}${redirect}`);
    },
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { Login, isLoading };
}
