"use router";

import { useRouter } from "next/navigation";

function BackToAPage({ el, i, lastItem }) {
  const router = useRouter();

  return (
    <p
      className={`inline mr-1 capitalize cursor-pointer  ${i === lastItem - 1 ? "text-black pointer-events-none" : "text-stone-500"}`}
      onClick={() => {
        el === "/casual" ||
        el === "/formal" ||
        el === "/gym" ||
        el === "/newArrivals" ||
        el === "/party"
          ? router.replace(`${el}?page=1`)
          : router.replace(`${el}`);
      }}
      disabled={true}
    >
      {el === "/" ? "home" : el.replaceAll("/", "  >  ").replace(`?page=1`, "")}
    </p>
  );
}

export default BackToAPage;
