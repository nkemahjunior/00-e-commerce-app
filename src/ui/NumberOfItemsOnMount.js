'use client'
import { addItemToCart, increaseNumberOfItems } from "@/app/(authHome)/showCartSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

function NumberOfItemsOnMount() {
    const dispatch = useDispatch()

useEffect(function(){
    const items = localStorage.getItem('cart') || false
    if(items === false) return

    if(items){
        const itemsTOObject = JSON.parse(items)
        console.log(itemsTOObject)
        dispatch(increaseNumberOfItems(itemsTOObject.length))
        dispatch(addItemToCart(itemsTOObject))
    }
},[])

return (
    <></>
)
}

export default NumberOfItemsOnMount
