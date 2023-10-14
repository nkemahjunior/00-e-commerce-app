'use client'


import { useSelector } from "react-redux"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCart() {

    const cartItems = useSelector((state) => state.showCart.itemsInCart)
    
   

    

    const showCart = useSelector(state => state.showCart.show)

    return (
        <div className={`
        ${showCart === false ? 'hidden':''}
         fixed   md:right-[4rem] z-[100] bg-white phones:h-fit pb-2 px-2 md:px-4 phones:w-full`} > 

        <div className="   h-full">

            <div className="p-4">
                <h1 className="font-bold text-center uppercase">added to shopping bag <span className="absolute right-4 font-normal">X</span></h1>
                    
            </div>

            <hr  className="bg-stone-400 h-[0.15rem]"/>

            <div className="  overflow-y-auto  h-[45dvh]    md:h-[22rem] md:w-[30rem]">

                <div className="space-y-4">
                    {
                        cartItems.map((el) => (
                            <ShoppingCartItem key={el.id} data={el}/>
                        ))
                    }
 
                </div>

            </div>

            <hr  className="bg-stone-400 h-[0.15rem]"/>
            <div className="space-y-2 mt-2">
                <button className="bg-black text-white p-4 text-center w-full uppercase md:hover:scale-90 border-2 border-solid border-black">checkout</button>
                <button className="bg-white text-black p-4 text-center w-full uppercase md:hover:scale-90 border-2 border-solid border-black">view shopping bag</button>
            </div>

        </div>


        </div>

       
    )
}

export default ShoppingCart
