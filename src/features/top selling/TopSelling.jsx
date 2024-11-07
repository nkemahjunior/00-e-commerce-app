
"use client"
import ViewAll from "@/ui/ViewAll";
import { Suspense } from "react";
import LoadingCard from "@/ui/LoadingCard";
import ArrivalsCard from "../new arrivals/ArrivalsCard";
import Button from "@/ui/Button";
import Link from "next/link";
import { numberOfCardsOnHomepage } from "@/utils/numberOfCardsOnHomePage";


async function TopSelling({ topSelling }) {
  console.log("------------------");
  console.log(topSelling);
  
  const homePageTopSelling = [];
  const numOfCardsOnHomePage = numberOfCardsOnHomepage();

  for (let i = 0; i < numOfCardsOnHomePage; i++) {
    homePageTopSelling.push(topSelling[i]);
  }

  return (
    <div className="mt-6 md:m-8 lg:mt-12    px-1 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]">
      <h2 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">
        Top Selling
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-2 2xl:gap-x-3">
        {homePageTopSelling.map((el) => (
          <Suspense fallback={<LoadingCard />} key={el.id}>
            <ArrivalsCard picture={el.image} price={el.price} name={el.name} />
          </Suspense>
        ))}
      </div>

      <Link href="/gym?page=1">
        <ViewAll />
      </Link>

      <hr className="w-[100%] bg-stone-700 mt-6 lg:mt-8 xl:mt-10  mb-2 2xl:mt-12" />
    </div>
  );
}

export default TopSelling;
