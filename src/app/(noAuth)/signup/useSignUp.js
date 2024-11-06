import { handleSignUp } from "@/api/authentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export function useSignUp(origin) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      handleSignUp({ name, email, password }),
    onSuccess: () => {
      router.refresh();
      queryClient.invalidateQueries("user");
      router.replace(`${origin}${redirect}`);
    },
    onError: () => {
      toast.error("user already exist");
    },
  });

  return { signup, isLoading };
}
