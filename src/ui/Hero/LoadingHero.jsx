function LoadingHero() {

    return (
        <header className="pt-4 bg-white h-fit py-4 px-4 ">
            <div className="md:grid md:grid-cols-2  animate-pulse bg-white">
    
                <div className="  mx-2 md:pl-[2rem] md:pr-[2rem]   lg:pl-[3rem] lg:pr-[3rem]  xl:pl-[4rem] xl:pr-[4rem]  2xl:pl-[6rem] 2xl:pr-[6rem]">

                    <div className="space-y-2 xl:space-y-4">
    
                        <h1 className="h-4  w-[70%] bg-[#E3DFE1]"></h1>
    
                        <p className=" h-12 w-full bg-[#E3DFE1] "> </p>
    
                        <button className="w-full  rounded-xl py-1 md:w-[40%] h-6 bg-[#E3DFE1] "></button>
                    </div>
    
                    <div className=" space-y-2 mt-2 xl:mt-6">
    
                        <div className="flex items-center justify-between md:space-x-4 ">
    
                            <p className="font-bold inline leading-none h-[3rem] w-[30%] bg-[#E3DFE1]"></p>
    
                            <div className=" w-[0.1rem] h-[4rem] bg-[#E3DFE1]"></div>
    
                            <p className="h-[3rem] w-[30%] inline bg-[#E3DFE1]"></p>
    
                            <div className=" w-[0.1rem] h-[4rem] bg-[#E3DFE1]"></div>
    
                            <p className="h-[3rem] w-[30%] hidden md:block bg-[#E3DFE1]"></p>
    
                        </div>
    
                        <p className="h-4 w-[30%] leading-none md:hidden bg-[#E3DFE1]"></p>
                    </div>
    
                </div>


                <div className=" h-[15rem] mt-4 md:mt-0 md:mr-8 relative w-full bg-[#E3DFE1]" ></div>
                        
                       
                       
                
    
            </div>
    
            <div className="flex space-x-4  py-4 items-center px-2 md:justify-evenly h-[4rem]  mt-4 bg-[#E3DFE1] ">


            </div>
    
        </header>
    )
}

export default LoadingHero

