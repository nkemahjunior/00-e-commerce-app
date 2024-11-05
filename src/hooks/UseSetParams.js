import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

// const searchParams = useSearchParams()

// export const createQueryString = useCallback(

//     (name, value) => {

//       const params = new URLSearchParams(searchParams)
//       params.set(name, value)

//       return params.toString()
//     },
//     [searchParams]
// )

export function useSetParams(name, value, scroll = true) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  }, [searchParams]);

  router.push(pathname + "?" + createQueryString(name, value), {
    scroll: scroll,
  });
}
