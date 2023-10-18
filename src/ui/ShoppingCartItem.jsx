'use client'
import { addItemToCart, increaseNumberOfItems } from "@/app/(authHome)/showCartSlice"
import Image from "next/image"
import { useDispatch } from "react-redux"

function ShoppingCartItem({data}) {

    const dispatch = useDispatch()

   function handleDeleteItem(){
    const itemsInStorage = localStorage.getItem('cart')
    const itemsInStorageToObject = JSON.parse(itemsInStorage)
    const holdItemsFromStorage = [...itemsInStorageToObject].filter((el) => el.deleteId !== data.deleteId)
    

    console.log(holdItemsFromStorage)

  
    localStorage.setItem('cart',JSON.stringify(holdItemsFromStorage))
    
    dispatch(increaseNumberOfItems(holdItemsFromStorage.length))
    dispatch(addItemToCart(holdItemsFromStorage))


    //const test =localStorage.getItem('cart')
   // console.log(JSON.parse(test))
   
   }
  
    return (

        <div className="grid grid-cols-[30fr,70fr] space-x-2 md:space-x-0">

            <div className=" w-[7rem]">

                <div className=" 
                h-[7rem] w-[7rem] relative  ">
                    <Image src={data.image} alt={`photo of ${data.name}`} fill/>
                </div>

            </div>

            <div className=" space-y-2">

                <p className="uppercase  font-medium ">{data.name}</p>

                <div className="flex justify-between">
                    <p className="font-medium">${data.price}</p>

                    <button className=" mr-8 text-xl md:hover:scale-95" onClick={handleDeleteItem}>x</button>

                </div>
                
                <p className="capitalize">quantity: {data.quantity}</p>
                <p className="capitalize">size: {data.selectedSize}</p>
                
            </div>
        </div>
    )
}

export default ShoppingCartItem
