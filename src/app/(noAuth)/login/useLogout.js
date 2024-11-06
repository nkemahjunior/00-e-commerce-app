import { handleSignOut } from "@/api/authentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogOut(origin) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: handleSignOut,

    onSuccess: () => {
      router.refresh();
      queryClient.invalidateQueries("user");
      router.replace(origin);
    },

    onError: () => {
      toast.error("Error loging out... Try again");
    },
  });

  return { logout, isLoading, isSuccess };
}
