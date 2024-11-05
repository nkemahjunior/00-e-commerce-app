import { handleSignOut } from "@/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogOut(origin) {
  const router = useRouter();

  const {
    mutate: logout,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: handleSignOut,

    onSuccess: () => {
      router.refresh();
      router.replace(origin);
    },

    onError: () => {
      toast.error("Error loging out... Try again");
    },
  });

  return { logout, isLoading, isSuccess };
}
