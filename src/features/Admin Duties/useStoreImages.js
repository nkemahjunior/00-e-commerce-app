import { uploadImage } from "@/api/uploadImage";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useStoreImage() {
  const {
    mutate: storeImage,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ file, imagePath }) => uploadImage({ file, imagePath }),

    onSuccess: () => {
      toast.error("you did it");
    },

    onError: (data) => {
      toast.error("could not add product picture.. try again");
    },
  });

  return { storeImage, isLoading, error };
}
