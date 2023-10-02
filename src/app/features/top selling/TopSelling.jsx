import Button from "@/app/ui/Button";
import TopSellingCards from "./TopSellingCards";

function TopSelling() {
    return (
        
        <div className="mt-4 lg:mt-6    px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]">

            <h2 className=" mb-2 md:mb-4 capitalize font-bold text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-5xl lg:mb-6 xl:mb-8 2xl:mb-10">Top Selling</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2">
                <TopSellingCards/>
                <TopSellingCards/>
                <TopSellingCards/>
                <TopSellingCards/>
            </div>

            <div className="lg:flex lg:justify-center">
                <Button text={"view all"}/>

            </div>

            <hr className="w-[100%] bg-stone-700 mt-6 lg:mt-8 xl:mt-10  mb-2 2xl:mt-12"/>

        </div>
    );
}

export default TopSelling
