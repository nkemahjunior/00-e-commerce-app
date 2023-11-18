"use client"


import { addItemToCart,  increaseNumberOfItems} from "@/app/(authHome)/showCartSlice";
// export async function generateStaticParams() {

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import {AnimatePresence, LayoutGroup, motion} from "framer-motion"


function AllArrivalsDetail({data,error}) {

    const [rotate,setRotate] = useState(false)
    
    const [show,setShow] = useState(false)
    const [quantity,setQuantity] = useState(1)
    const [noSizeError,SetNoSizeError] = useState(false)
    const [size,setSize] = useState("")
    // let noSizeError = false;
    let ref = useRef(1)
    const dispatch = useDispatch()
    

    
    let initialCart = [];

    function handleShow(){
        setShow((v) => !v)
        setRotate(v => !v)
    }




    useEffect(function(){
        
       const storedItems = localStorage.getItem("cart") ;
       initialCart = storedItems ? JSON.parse(storedItems) : []


       if(initialCart.length === 0){
       localStorage.setItem("cart",JSON.stringify(initialCart))}

        // dispatch(increaseNumberOfItems(initialCart.length))

     },["cart",initialCart]
    )


   
    
    function handleGetSize(e){
        if(noSizeError ) SetNoSizeError(false)
        const {size} = e.target.dataset
        setSize(size)

    }

    function handleGetQuantity(e){
        ref.current = e.target.value
    }

    function handleAddQuantity(){
        ref.current = ref.current + 1
        setQuantity((q) => q + 1)
    }

    function handleDecreaseQuantity(){
        if(ref.current === 1) return
        if(quantity === 1) return

        ref.current = ref.current - 1
        setQuantity((q) => q - 1)
    }

    
    
    function handleAddItemToCart(){
    
        if( typeof size === 'undefined' || size === "") {
            SetNoSizeError(true)
            return;
        }
        
        const {price} = data
        const dataWithsizes = {
            ...data,
            price:quantity * price,
            selectedSize:size,
            quantity:ref.current,
            deleteId:Math.random()
        }
 
        

        if(initialCart?.length === 0 ) {

            initialCart = [dataWithsizes]
            localStorage.setItem("cart",JSON.stringify(initialCart))
            dispatch(increaseNumberOfItems(initialCart.length))
            dispatch(addItemToCart(initialCart))

            
            // SetNoSizeError(false)
            return;
        }
        
          
        if(initialCart.length > 0 ) {

            const duplicateItems = initialCart.some((el) => el.id === data.id && el.selectedSize === size)

            // console.log(duplicateItems)
            // console.log(initialCart)
            
            

            if(duplicateItems){
                toast.error("item is already in cart.. if you want this very item,you can add the quantity or select a different size..")
            }

            else{


                initialCart = [dataWithsizes,...initialCart]

                localStorage.setItem("cart",JSON.stringify(initialCart))
                dispatch(increaseNumberOfItems(initialCart.length))
                dispatch(addItemToCart(initialCart))
                // SetNoSizeError(false)
            }

    
        }

        
    }
    
    if(error) toast.error("there was an error loading this item. Refresh and try again")


    return (
        <div className="px-2 py-4 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]" >

            <div className="
            md:grid md:grid-cols-2  md:gap-x-4
            ">

                <div className=" relative h-[20rem]  md:h-[35rem] bg-[#F0F0F0]">
                    <Image src={data.image.trim()} alt={`image of ${data.name}`} fill sizes="100vw"/>
                </div>

                <div className=" h-fit space-y-2 phones:mt-2 md:h-fit xl:h-[35rem]">

                    <h1 className="font-extrabold text-3xl md:text-4xl capitalize">{data.name}</h1>

                    <p className="font-bold md:text-2xl ">${data.price}</p>

                    <hr className="  bg-stone-400"/>

                    <h2 className=" font-semibold capitalize flex items-center"
                    onClick={handleShow}
                    >choose size <span className= {`md:hidden transition-all duration-100 ${rotate && 'rotate-90'}`}  >&nbsp;&gt;</span></h2>


                    
                    
                    <AnimatePresence>
                    <motion.div   className={`max-h-[fit] grid grid-cols-4 space-y-2 md:space-y-0
                    ${!show && "hidden"} transition-all delay-75 duration-[1s]
                    md:flex md:flex-wrap md:space-x-2  md:pt-2  xl:pt-4 
                    ${noSizeError === true ? '':'md:pb-2 xl:pb-8'}  `}  >

                        
                        
                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white  -75 px-4 py-2  font-medium uppercase" 
                        onClick = {handleGetSize} 
                        data-size = "XXS"
                        
                            >
                                xxs
                                <span  className=" text-xs font-light tracking-widest" > 
                                   {/*(0 remaining)*/}
                                </span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" 
                        onClick = {handleGetSize}
                        data-size = "XS" >
                            xs<span className=" text-xs font-light tracking-widest" > 
                                {/*(0 remaining)*/}
                            </span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" onClick = {handleGetSize}
                        data-size = "S">
                            s
                            <span className=" text-xs font-light tracking-widest" > {/*(0 remaining)*/}</span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" onClick = {handleGetSize}
                        data-size = "M">
                            m<span className=" text-xs font-light tracking-widest" > {/*(0 remaining)*/}</span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" onClick = {handleGetSize}
                        data-size = "L">
                            l<span className=" text-xs font-light tracking-widest" > {/*(0 remaining)*/}</span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" onClick = {handleGetSize}
                        data-size="XL">
                            xl
                            <span className=" text-xs font-light tracking-widest" > {/*(0 remaining)*/}</span>
                        </motion.p>

                        <motion.p   className="   transition-colors delay-75 duration-[0.7s] w-fit rounded-xl   bg-[#F0F0F0] hover:bg-black hover:text-white   px-4 py-2  font-medium uppercase" onClick = {handleGetSize}
                        data-size="2XL">
                            2xl<span className=" text-xs font-light tracking-widest" > {/*(0 remaining)*/}</span>
                        </motion.p>

                        
                    </motion.div>
                    </AnimatePresence>
                    
                    

                    <p  className={`${ noSizeError === true ? '' : 'hidden'} text-red-600 md:pb-2 xl:pb-8`}>please choose a size</p>

                    <hr className="  bg-stone-400 mt-2 "/>

                    <motion.div layout className="flex space-x-2 mt-2 pt-4 md:pt-2 xl:pt-8">

                        <div className="flex bg-[#F0F0F0] p-2 rounded-xl space-x-2 w-fit md:w-[30%] border-2 border-solid border-white">

                            <button className="font-bold md:hover:scale-95"
                            onClick={handleDecreaseQuantity}>-</button>

                            <input type="number" placeholder={quantity} className="w-[3rem] outline-none  md:w-full bg-[#F0F0F0] text-center placeholder:text-black" onChange={handleGetQuantity}
                            />

                            <button className="font-bold md:hover:scale-95"
                            onClick={handleAddQuantity}>+</button>
                        </div>

                        <button className="
                        phones:border-solid phones:border-black phones:border-2
                        bg-black rounded-xl  text-white p-2 text-center w-full  md:w-[70%] md:hover:text-black md:hover:bg-white md:hover:border-2 md:hover:border-black md:hover:border-solid transition-colors delay-75"
                        onClick={handleAddItemToCart}
                        >
                            Add to cart
                        </button>
                    </motion.div>

                </div>

                

            </div>
        </div>
    )
}

export default AllArrivalsDetail
