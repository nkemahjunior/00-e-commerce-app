"use client";
import ArrivalsCard from "./ArrivalsCard";

import LoadingCard from "@/ui/LoadingCard";
import ViewAll from "@/ui/ViewAll";
import { numberOfCardsOnHomepage } from "@/utils/numberOfCardsOnHomePage";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 1200;

function Arrivals({ newArrivals }) {
  const numOfCardsOnHomePage = numberOfCardsOnHomepage();

  const homePageNewArrivals = [];

  for (let i = 0; i < numOfCardsOnHomePage; i++) {
    homePageNewArrivals.push(newArrivals[i]);
  }

  // console.log(homePageNewArrivals )
  // console.log("boyc")

  return (
    <div className="mt-6 md:m-8 lg:mt-12   px-1 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] ">
      <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">
        new arrivals
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-2 2xl:gap-x-3   ">
        {homePageNewArrivals.map((el) => (
          <Link
            href={`/newArrivals/${el.name}/${el.id}`}
            key={el.id}
            className="= "
          >
            <ArrivalsCard picture={el.image} price={el.price} name={el.name} />
          </Link>
        ))}
      </div>

      <Link href="/newArrivals?page=1">
        <ViewAll />
      </Link>

      <hr className="w-[100%] bg-stone-700 mt-6 lg:mt-8 xl:mt-10  mb-2 2xl:mt-12" />
    </div>
  );
}

export default Arrivals;
