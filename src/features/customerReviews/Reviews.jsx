import Button from "@/ui/Button"
import ReviewCard from "./ReviewCard"


function Reviews() {
    return (
        <div className="max-w-[100vw] px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] mt-8  md:mt-12  ">
            
            <h4 className="font-bold uppercase mb-4 md:mb-6 xl:mb-10 text-center md:text-2xl xl:text-3xl 2xl:text-4xl">our happy customers</h4>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-4">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>

            <div className="flex justify-center mt-2">
                <Button text={"see all"}/>
            </div>


           
        </div>
    )
}

export default Reviews
