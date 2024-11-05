import { getStablePrice } from "@/api/getAllClothes";
import { useQuery } from "@tanstack/react-query";

export function useGetStablePrice(id, fetchId) {
  const { isLoading, data: { data, error } = {} } = useQuery({
    queryKey: [`stablePrice${fetchId}`],
    queryFn: () => getStablePrice(id),
  });

  return { data, error, isLoading };
}
