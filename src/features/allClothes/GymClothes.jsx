'use client'

import GlobalLoading from "@/ui/GlobalLoading";
import { useGetGymClothes } from "./useGetGymClothes";
import toast from "react-hot-toast";
import { Suspense } from "react";
import LoadingCard from "@/ui/LoadingCard";
import ArrivalsCard from "../new arrivals/ArrivalsCard";
import LoadMore from "./LoadMore";
import Link from "next/link";

function GymClothes() {
    const {data,count,error,isLoading} = useGetGymClothes();

    if (isLoading) return <GlobalLoading />;
  
    
  
    if (error){
          return toast.error("could not fetch gym clothes. Refresh and try again ");
    }
  
  
   
  
    return (
      <div className="mt-4 lg:mt-0   px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] ">
        
        <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">
          gym
        </h1>
  
        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2">
          {data.map((el) => (
            <Suspense fallback={<LoadingCard />} key={el.id}>
            <Link href={`/gym/${el.name}/${el.id}`}>
              <ArrivalsCard picture={el.image} price={el.price} name={el.name} />
            </Link>
            </Suspense>
          ))}
        </div>
  
        <div className="p-2 flex justify-center">
          <LoadMore numberOfClothes = {count}/>
        </div>
      </div>
    );
}

export default GymClothes
