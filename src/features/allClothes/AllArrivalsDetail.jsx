"use client"

// export async function generateStaticParams() {

import Image from "next/image"
import { useState } from "react"

    
//     const { data, error } = await supabase
//     .from('clothes','name')
//     .select('id')
    
   
//     return data.map((el) => ({
//      info:[`${el.name}`, `${el.id}`]
//     }))
//   }

function AllArrivalsDetail({data,error}) {
    console.log(data)

    const [show,setShow] = useState(false)
    function handleShow(){
        setShow((v) => !v)
    }
 

    return (
        <div className="px-2 py-4 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]" >
            <div className="border-solid border-4 border-green-600
            md:grid md:grid-cols-2  md:gap-x-4
            ">

                <div className="border-solid border-4 border-red-600 relative h-[20rem]  md:h-[35rem] bg-[#F0F0F0]">
                    <Image src={data.image} alt={`image of ${data.name}`} fill sizes="100vw"/>
                </div>

                <div className="border-solid border-4 border-yellow-600 h-fit space-y-2 phones:mt-2 md:h-fit xl:h-[35rem]">

                    <h1 className="font-extrabold text-3xl md:text-4xl capitalize">{data.name}</h1>

                    <p className="font-bold md:text-2xl ">${data.price}</p>

                    <hr className="  bg-stone-400"/>

                    <h2 className=" font-semibold capitalize"
                    onClick={handleShow}
                    >choose size <span className="md:hidden">&gt;</span></h2>


                    <div className={`max-h-[fit] space-y-2
                    ${!show && "hidden"} transition-all delay-75
                    md:flex md:flex-wrap md:space-x-2 md:pb-2 md:pt-2 xl:pb-8 xl:pt-4`}>

                        

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium" >x-x-small<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium" >x-small<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium">small<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium">medium<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium">large<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium">x-large<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        <p className="w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white transition-colors delay-75 px-4 py-2  font-medium">2x-large<span className=" text-xs font-light tracking-widest"> (0 remaining)</span></p>

                        
                    </div>

                    <hr className="  bg-stone-400 mt-2 "/>

                    <div className="flex space-x-2 mt-2 pt-4 md:pt-2 xl:pt-8">

                        <div className="flex bg-[#F0F0F0] p-2 rounded-xl space-x-2 w-fit md:w-[30%] border-2 border-solid border-white">
                            <button className="font-bold md:hover:scale-95">-</button>
                            <input type="number" placeholder="1" className="w-[3rem] outline-none  md:w-full bg-[#F0F0F0] text-center placeholder:text-black"/>
                            <button className="font-bold md:hover:scale-95">+</button>
                        </div>

                        <button className="
                        phones:border-solid phones:border-black phones:border-2
                        bg-black rounded-xl  text-white p-2 text-center w-full  md:w-[70%] md:hover:text-black md:hover:bg-white md:hover:border-2 md:hover:border-black md:hover:border-solid transition-colors delay-75">Add to cart</button>
                    </div>

                </div>

                

            </div>
        </div>
    )
}

export default AllArrivalsDetail
