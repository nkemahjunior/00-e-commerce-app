"use client"
import { addItemToCart, increaseNumberOfItems } from "@/app/(authHome)/showCartSlice";
import Image from "next/image"

import { useDispatch } from "react-redux"
import { useGetStablePrice } from "./useGetStablePrice";
import GlobalLoading from "@/ui/GlobalLoading";
import toast from "react-hot-toast";



 function ShoppingBagItem({data,fetchId}) {

    const dispatch = useDispatch();
    
    //getting real price from database so quantity will be multiplied with this price and not the updated price in the browser
    const {data:price,error,isLoading} = useGetStablePrice(data.id,fetchId)
    if(isLoading) return <GlobalLoading/>
    if(error) toast.error("there was error... refresh and try again")

     
    let qty ;

    const itemsInStorage = localStorage.getItem('cart')
    const itemsInStorageToObject = JSON.parse(itemsInStorage)

    const arr = [...itemsInStorageToObject];
    arr.forEach((el) => el.id === data.id ? qty = el.quantity : '')

        

    function handleDeleteItem(){
        const itemsInStorage = localStorage.getItem('cart')
        const itemsInStorageToObject = JSON.parse(itemsInStorage)
        const holdItemsFromStorage = [...itemsInStorageToObject].filter((el) => el.deleteId !== data.deleteId)

        localStorage.setItem('cart',JSON.stringify(holdItemsFromStorage))
        
        dispatch(increaseNumberOfItems(holdItemsFromStorage.length))
        dispatch(addItemToCart(holdItemsFromStorage))

       
    }



       
    function updateQuantity(e){
        
        //console.log(e.target.value)
        const newQty = Number(e.target.value)
        
        const itemsInStorage = localStorage.getItem('cart')
        const itemsInStorageToObject = JSON.parse(itemsInStorage)

        const updateQuantity = itemsInStorageToObject.map((el) => (
            el.id === data.id ? 
        {...el,quantity :newQty,price:newQty * price[0].price } : el
        ))

        localStorage.setItem('cart',JSON.stringify(updateQuantity))

        dispatch(increaseNumberOfItems(updateQuantity.length))
        dispatch(addItemToCart(updateQuantity))

    }



    return (

        <>

        <div className="grid grid-cols-[30fr,70fr] space-x-2 md:space-x-0">

            <div className=" w-[7rem]">

                <div className=" h-[7rem] w-[7rem]
                lg:h-[10rem] lg:w-[10rem] relative  ">
                    <Image src={data.image.trim()} alt={`photo of ${data.name}`} fill/>
                </div>

            </div>

            <div className=" space-y-2">

                <p className="uppercase  font-medium ">{data.name}</p>

                <div className="flex space-x-4 justify-evenly  md:justify-between">
                    <p className="font-medium">${data.price}</p>

                    <div className="border-2 border-solid border-stone-200 p-1 flex w-fit ">
                        <p className="font-light phones:text-xs">QTY: {qty} </p>

                        <select name="qty" id="qty" className="w-fit outline-none " onChange={updateQuantity}>
                            

                            <option value="0" ></option>
                            <option value="1" >1</option>
                            
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>

                    </div>

                    <button className=" mr-8 text-xl md:hover:scale-95" onClick={handleDeleteItem}>x</button>

                </div>
                
                <p className="capitalize">quantity: {data.quantity}</p>
                <p className="capitalize">size: {data.selectedSize}</p>
                
            </div>
        </div>
        <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-2 mb-2"/>
        </>
    )
}

export default ShoppingBagItem
