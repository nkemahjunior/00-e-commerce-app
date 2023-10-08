'use client'

import { allNewArrivals as allNewArrivalsApi  } from "@/api/getAllClothes";
import LoadingCard from "@/ui/LoadingCard";
import { Suspense } from "react";
import ArrivalsCard from "./ArrivalsCard";

import GlobalLoading from "@/ui/GlobalLoading";
import { useAllNewArrivals } from "./useAllNewArrivals";
import toast from "react-hot-toast";


 function AllArrivals() {

    // const allNewArrivals = await allNewArrivalsApi ();

    const {isLoading,data,error} = useAllNewArrivals();
    if(isLoading) return <GlobalLoading/>
    if(error) return toast.error("could not fetch new arrivals. Refresh and try again ")

    console.log(data)
    
  


    return (
        
        <div className="mt-4 lg:mt-6   px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]">

            <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">new arrivals</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
                {
                    data.data.map(el => (
                        <Suspense fallback={<LoadingCard/>} key={el.id }>
                         <ArrivalsCard  picture={el.image} price={el.price} name={el.name} />
                      </Suspense>
                        
                    ))
                }
            </div>

        </div>
    );
}

export default AllArrivals
