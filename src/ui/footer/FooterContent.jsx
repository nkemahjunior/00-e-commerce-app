'use client'

import { FaXTwitter} from "react-icons/fa6"
import { FiFacebook} from "react-icons/fi"
import { BsInstagram} from "react-icons/bs"
import { RiThreadsLine} from "react-icons/ri"
import { TfiEmail} from "react-icons/tfi"
import Image from "next/image"


function FooterContent() {

    const year = new Date().getFullYear()

    return (
        <div className="mt-8">

            <div className="bg-black px-3 rounded-md w-[95dvw]   py-4 space-y-3 
             -mb-[10rem] md:-mb-[6rem] lg:-mb-[4rem] 2xl:-mb-[6rem] relative z-[8] mx-2
             md:mx-[2rem] md:w-[90dvw] lg:mx-[3rem] xl:mx-[4rem] 2xl:mx-[6rem] lg:px-6 xl:py-8 xl:px-[10rem] 2xl:py-16
             md:grid md:grid-cols-[40fr,60fr] md:gap-x-4 md:px-4
             
            ">

                <div className="text-white font-extrabold uppercase text-3xl ">
                    stay upto date about our latest offers
                </div>

                <div className="space-y-4" >

                    <div className="bg-white flex items-center h-fit rounded-lg px-4 py-1 ">
                        <div>
                        <TfiEmail style={{color:"#000000"}}/>
                        </div>
                        <input type="email" placeholder="Enter your email address" className=" outline-none w-full h-fit ml-4" />
                    </div>

                    <button  className="bg-white rounded-lg text-center py-1 w-full text-black font-semibold">Subscribe to our Newsletter</button>
                </div>
 
            </div>

            <div className="bg-[#F2F0F1] pt-[11rem] w-full  px-2 md:pl-[2rem] pb-4 md:pr-[2rem] lg:pl-[3rem] lg:pr-[3rem] xl:pl-[4rem]  xl:pr-[4rem] 2xl:pl-[6rem]  2xl:pr-[6rem] md:pt-[8rem] md:pb-[2rem] relative ">

                <div className="">

                    <div className="md:grid md:grid-cols-[30fr,70fr] md:gap-x-2 xl:gap-x-4 2xl:gap-x-6">

                        <div className="lg:mr-8 xl:mr-16 2xl:mr-20" >

                            <div className=" font-extrabold text-2xl">zeco shopping</div>
                            <div className=" font-light">Get all trending and classic clothes at affordable prices for children, men and women.Delivery right at your door steps </div>

                            <div className="flex space-x-4 mt-4 mb-4">
                                <div className="border-solid border-black border-2 bg-white rounded-[50%] p-1">
                                    <FaXTwitter style={{color:"black"}}/>
                                </div>

                                <div className="border-solid border-black border-2 bg-black rounded-[50%] p-1">
                                    <FiFacebook style={{color:"white", fill:"white"}}/>
                                </div>

                                <div className="border-solid border-black border-2 bg-white rounded-[50%] p-1">
                                    <BsInstagram style={{color:"black"}}/>
                                </div>

                                <div className="border-solid border-black border-2 bg-white rounded-[50%] p-1">
                                    <RiThreadsLine style={{color:"black"}}/>
                                </div>
                                
                            </div>

                        </div>

                        <div className=" grid grid-cols-2 gap-4 md:grid-cols-4">

                            <div>
                                <div className=" uppercase font-semibold mb-2">company</div>
                                
                                <div className=" font-light capitalize mb-1">about</div>

                                <div className=" font-light capitalize mb-1">features</div>

                                <div className=" font-light capitalize mb-1">works</div>

                                <div className=" font-light capitalize mb-1">career</div> 
                            </div>

                            <div>
                                <div className=" uppercase font-semibold mb-2">help</div>

                                <div className=" font-light capitalize mb-1">customer support</div>

                                <div className=" font-light capitalize mb-1">Delivery details</div>

                                <div className=" font-light capitalize mb-1">terms & conditions</div>

                                <div className=" font-light capitalize mb-1">privacy policy</div>
                            </div>

                            <div>
                                <div className=" uppercase font-semibold mb-2">FAQ</div>

                                <div className=" font-light capitalize mb-1">account</div>

                                <div className=" font-light capitalize mb-1">manage deliveries</div>

                                <div className=" font-light capitalize mb-1">orders</div>

                                <div className=" font-light capitalize mb-1">payment</div>
                            </div>

                            <div>
                                <div className=" uppercase font-semibold mb-2">resources</div>

                                <div className=" font-light capitalize mb-1">Free eBook</div>

                                <div className=" font-light capitalize mb-1">development tutorial</div>

                                <div className=" font-light capitalize mb-1">how to -blog</div>

                                <div className=" font-light capitalize mb-1">youtube playlist</div>

                            </div>
                        </div>

                    </div>

                    <hr className="w-[100%] bg-stone-700 mt-2 mb-2"/>
                    <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">

                        <div className="capitalize font-light">zeco shopping&copy; 1929-{year}. All Rights Reserved</div>

                        <div className="flex space-x-2">
                            
                            <div className="bg-white    rounded-md h-[2rem] flex items-center justify-center">
                                <Image src={"/visa.png"} height={40} width={55} alt="visa card accepted"/>
                            </div>

                            <div className="bg-white h-[2rem] flex items-center justify-center  rounded-md ">
                                <Image src={"/masterCard.png"} height={40} width={55} alt="mastercard accepted"/>
                            </div>

                            <div className="bg-white  flex items-center justify-center  rounded-md h-[2rem]">
                                <Image src={"/paypal.png"} height={45} width={55} alt="paypal accepted"/>
                            </div>

                            <div className="bg-white  flex items-center justify-center  rounded-md h-[2rem]">
                                <Image src={"/applePay.png"} height={40} width={55} alt="applePay accepted"/>
                            </div>

                            <div className="bg-white  flex items-center justify-center  rounded-md h-[2rem]">
                                <Image src={"/googlePay.png"} height={40} width={55} alt="google pay accepted"/>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FooterContent
