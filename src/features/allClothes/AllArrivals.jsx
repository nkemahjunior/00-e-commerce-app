"use client";
import LoadingCard from "@/ui/LoadingCard";
import { Suspense } from "react";
import ArrivalsCard from "../new arrivals/ArrivalsCard";

import GlobalLoading from "@/ui/GlobalLoading";
import { useAllNewArrivals } from "../new arrivals/useAllNewArrivals";
import toast from "react-hot-toast";
import LoadMore from "./LoadMore";
import Link from "next/link";

// export const dynamicParams = false; 








function AllArrivals() {


  
 

  const { isLoading, data } = useAllNewArrivals();

  if (isLoading) return <GlobalLoading />;

  if(data?.data?.length === 0){
   return toast.error("sorry, no clothes are available for that price range right now...")
  } 

  if (data.error){
        return toast.error("could not fetch new arrivals. Refresh and try again ");
  }


 

  return (
    <div className="mt-4 lg:mt-0   px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] ">
      <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">
        new arrivals
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2">
        {data.data.map((el) => (
          <Suspense fallback={<LoadingCard />} key={el.id}>
            <Link href={`/newArrivals/${el.name}/${el.id}`}>
              <ArrivalsCard picture={el.image} price={el.price} name={el.name} />
            </Link>
          </Suspense>
        ))}
      </div>

      <div className="p-2 flex justify-center">
        <LoadMore numberOfClothes = {data.count}/>
      </div>
    </div>
  );
}

export default AllArrivals;
