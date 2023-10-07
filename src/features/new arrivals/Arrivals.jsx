
import ArrivalsCard from "./ArrivalsCard";
import { newArrivals as newArrivalsApi } from "@/api/getAllClothes";
import LoadingCard from "@/ui/LoadingCard";
import ViewAll from "@/ui/ViewAll";
import { Suspense } from "react";



export const  revalidate  = 1200;

async function Arrivals() {    


    const newArrivals = await newArrivalsApi();
  
    const homePageNewArrivals = [];
    const numOfCardsOnHomePage = 4;

    for(let i = 0; i < numOfCardsOnHomePage ; i++){

        homePageNewArrivals.push(newArrivals[i])
    }

    
    
    

    

    return (
        
        <div className="mt-4 lg:mt-6   px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]">

            <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">new arrivals</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
                {
                    homePageNewArrivals.map(el => (
                        <Suspense fallback={<LoadingCard/>} key={el.id }>
                         <ArrivalsCard  image={el.image} price={el.price} name={el.name} />
                      </Suspense>
                        
                    ))
                }
            </div>

            <ViewAll/>

            <hr className="w-[100%] bg-stone-700 mt-6 lg:mt-8 xl:mt-10  mb-2 2xl:mt-12"/>

        </div>
    );
}

export default Arrivals

