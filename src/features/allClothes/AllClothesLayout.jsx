'use client'
import { useState } from "react"
import Filters from "./Filters"
import TheClothes from "./TheClothes"
import FilterButton from "./FilterButton"
import Navigation from "./Navigation"
import Pagination from "./Pagination"
import Title from "./Title"
import { usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { hideTheFilter, showTheFilter } from "@/app/(authHome)/showCartSlice"

function AllClothesLayout({page}) {
    
    const dispatch = useDispatch()
    const showFilter = useSelector((state) => state.showCart.showFilter)

    function handleShow(){
        //setShow((show) => !show)

        if(showFilter === false)
        dispatch(showTheFilter())

        if(showFilter === true)
        dispatch(hideTheFilter())
    }
    
    const pathname = usePathname()
    const currentPath = pathname.split('/')

    //  console.log(currentPath)

    if(currentPath.length  > 2   )  return <div>{page}</div>

    
    return (
        
            <div className=" ">
                <div className="  ">
                
                    <Navigation/>
                    <div className=" phones:flex phones:justify-between ">
                        {/* <Title/> */}
                        <div></div>
                        <div className="flex justify-end md:hidden "
                        onClick={handleShow}
                        >
                            <FilterButton/>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:space-x-6 ">
                    <Filters  />
                    
                    {page}
                    
                    {/* <TheClothes/> */}
                </div>

                
            </div>
       
    )
}

export default AllClothesLayout
