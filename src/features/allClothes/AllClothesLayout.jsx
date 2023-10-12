'use client'
import { useState } from "react"
import Filters from "./Filters"
import TheClothes from "./TheClothes"
import FilterButton from "./FilterButton"
import Navigation from "./Navigation"
import Pagination from "./Pagination"
import Title from "./Title"
import { usePathname } from "next/navigation"

function AllClothesLayout({page}) {
    const [show,setShow] = useState(false)
    function handleShow(){
        setShow((show) => !show)
    }
    
    const pathname = usePathname()
    const currentPath = pathname.split('/')

    //  console.log(currentPath)

    if(currentPath.length  > 2   )  return <div>{page}</div>

    
    return (
        <div>
            <div>
                <div className="  ">
                
                    <Navigation/>
                    <div className=" phones:flex phones:justify-between sticky top-0">
                        <Title/>
                        <div className="flex justify-end md:hidden"
                        onClick={handleShow}
                        >
                            <FilterButton/>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:space-x-6">
                    <Filters show={show}/>
                    
                    {page}
                    
                    {/* <TheClothes/> */}
                </div>

                
            </div>
        </div>
    )
}

export default AllClothesLayout
