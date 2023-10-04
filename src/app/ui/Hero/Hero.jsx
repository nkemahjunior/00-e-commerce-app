
'use client'

import {PiStarFourFill} from "react-icons/pi"

import Image from "next/image"

import { useEffect, useState } from "react";



  

function Hero() {

    
    function getWindowSize() {

     if(window === 'undefined') return;


        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
      }

    const [windowSize, setWindowsize] = useState(getWindowSize());

    useEffect(() => {
        
        
        


        function handleWindowResize() {
            
            setWindowsize(getWindowSize())
          }
      
  
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    },[]);

    if (window ==='undefined') return(<p>loading window</p>)

    return (
        <header className="pt-4  bg-[#F2F0F1]">
            <div className="md:grid md:grid-cols-2  ">

                <div className="  mx-2 md:pl-[2rem] md:pr-[2rem]   lg:pl-[3rem] lg:pr-[3rem]  xl:pl-[4rem] xl:pr-[4rem]  2xl:pl-[6rem] 2xl:pr-[6rem]">
                    <div className="space-y-2 xl:space-y-4">
                        <h1 className="font-extrabold text-2xl capitalize leading-none md:text-4xl xl:text-5xl 2xl:text-6xl">where style meets convenience</h1>

                        <p className="font-light md:leading-tight"> Shop the latest trends in women&rsquo;s, men&rsquo;s and kid&rsquo;s clothing at Zeco Shopping, with new arrivals dropping every week</p>

                        <button className="w-full text-center bg-black text-white uppercase font-semibold rounded-xl py-1 md:w-[40%]">shop now</button>
                    </div>

                    <div className=" space-y-2 mt-2 xl:mt-6">

                        <div className="flex items-center justify-between md:space-x-4 ">

                            <p className="font-bold inline leading-none">30+ <span className="font-light block">international brands</span></p>

                            <div className="bg-stone-500 w-[0.1rem] h-[2rem]"></div>

                            <p className="font-bold inline leading-none">2000+ <span className="font-light block">High-Quality Products</span></p>

                            <div className="bg-stone-500 w-[0.1rem] h-[2rem]"></div>

                            <p className="font-bold text-center leading-none hidden md:block">15,000+ <span className="font-light block">happy customers</span></p>

                        </div>

                        <p className="font-bold text-center leading-none md:hidden">15,000+ <span className="font-light block">happy customers</span></p>
                    </div>

                </div>

                <div className="relative">

                    <div className="absolute z-10 left-[17rem] top-[4rem] md:left-[20rem] lg:left-[27rem] xl:left-[38rem]">
                        <PiStarFourFill style={{color:"black", fill:"black", height:"2rem", width:"2rem"}}/>
                    </div>

                    <div className="absolute z-10 left-[2rem] top-[8rem] md:left-[7rem] lg:left-[13rem] xl:left-[20rem]">
                        <PiStarFourFill style={{color:"red", fill:"black",height:"1.5rem", width:"1.5rem"}}/>
                    </div>


                    <div className="md:h-[20rem] md:mr-8 relative" >
{                    windowSize.innerWidth < 768 ?  <Image src={"/mobileHeroImage.png"} alt="photo of two models with black jeans jackets"
                        width={500} height={500}
                        quality={100} /> :

                          <Image src={"/heroImage.png"} alt="photo of two models with black jeans jackets"
                        fill
                          quality={100}
                        />}
                       
                    </div>
                </div>
            </div>

            <div className="flex space-x-4 bg-black py-4 items-center px-2 md:justify-evenly">

                <div className=" flex items-center justify-center  rounded-md h-[2rem]">
                    <Image src={"/versace.png"} alt="versace logo" height={50} width={50}/>
                </div>

                <div className=" flex items-center justify-center  rounded-md h-[2rem]">
                    <Image src={"/zara.png"} alt="zara logo" height={45} width={50}/>
                </div>

                <div className=" flex items-center justify-center  rounded-md h-[2rem]">
                    <Image src={"/gucci.png"} alt="gucci logo" height={50} width={50}/>
                </div>

                <div className=" flex items-center justify-center  rounded-md h-[2rem]">
                    <Image src={"/prada.png"} alt="prada logo" height={50} width={50}/>
                </div>

                <div className=" flex items-center justify-center  rounded-md h-[2rem]">
                    <Image src={"/calvinKlein.png"} alt="calvinKlein logo" height={50} width={50}/>
                </div>
            </div>

        </header>
    )
}

export default Hero
