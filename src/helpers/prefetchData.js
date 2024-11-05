import PAGE_SIZE from "@/ui/PAGE_SIZE";
import { useQueryClient } from "@tanstack/react-query";

export function prefetchData(count, curPage, fetchFunction, key) {
  const queryClient = useQueryClient();
  const pageCount = Math.ceil(count ?? 0 / PAGE_SIZE);

  if (curPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: [key, curPage + 1],
      queryFn: () => fetchFunction({ curPage: curPage + 1 }),
    });

  if (curPage > 1)
    queryClient.prefetchQuery({
      queryKey: [key, curPage - 1],
      queryFn: () => fetchFunction({ curPage: curPage - 1 }),
    });
}
