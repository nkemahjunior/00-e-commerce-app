"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import toast from "react-hot-toast";

import PAGE_SIZE from "@/ui/PAGE_SIZE";

import { useCallback } from "react";

function LoadMore({ numberOfClothes }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  // const searchParams = useSearchParams();

  const curPage = Number(searchParams.get("page"));

  curPage === 0 || null || undefined
    ? router.push(pathname + "?" + createQueryString("page", 1), {
        scroll: false,
      })
    : Number(searchParams.get("page"));
  const pagenumberOfClothes = Math.ceil(numberOfClothes / PAGE_SIZE);

  function loadMoreButton() {
    if (curPage === pagenumberOfClothes)
      return toast.error(" no more clothes to load");

    const next = curPage === pagenumberOfClothes ? curPage : curPage + 1;

    // useSetParams("page", next, true);

    router.push(pathname + "?" + createQueryString("page", next), {
      scroll: false,
    });
  }

  // function showLess(){
  //     const prev = curPage === 1 ? curPage : curPage-1;

  //     router.push(pathname + '?' + createQueryString('page',prev))

  // }

  function handleScrollToTop() {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (pagenumberOfClothes <= 1) return null;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 justify-center ">
        <button
          className=" font-bold border-2 border-solid p-2 "
          onClick={loadMoreButton}
        >
          Load more
        </button>

        <button
          className=" font-bold border-2 border-solid p-2 "
          onClick={handleScrollToTop}
        >
          scroll to top
        </button>
      </div>

      <div className="">
        <p>
          showing {1} to{" "}
          {curPage === pagenumberOfClothes
            ? numberOfClothes
            : curPage * PAGE_SIZE}{" "}
          of {numberOfClothes} products
        </p>
      </div>
    </div>
  );
}

export default LoadMore;
