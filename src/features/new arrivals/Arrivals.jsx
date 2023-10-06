
import Button from "@/ui/Button";
import ArrivalsCard from "./ArrivalsCard";
import { getAllClothes } from "@/api/getAllClothes";
import ViewAll from "@/ui/ViewAll";


export const  revalidate  = 3600

async function Arrivals() {    


    const allClothes = await getAllClothes();
    console.log(allClothes)

    

    return (
        
        <div className="mt-4 lg:mt-6   px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]">

            <h1 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">new arrivals</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
                <ArrivalsCard/>
                <ArrivalsCard/>
                <ArrivalsCard/>
                <ArrivalsCard/>
            </div>

            <ViewAll/>

            <hr className="w-[100%] bg-stone-700 mt-6 lg:mt-8 xl:mt-10  mb-2 2xl:mt-12"/>

        </div>
    );
}

export default Arrivals

