'use client'
import { useState } from "react"
import Filters from "./Filters"
import TheClothes from "./TheClothes"
import FilterButton from "./FilterButton"
import Navigation from "./Navigation"
import Pagination from "./Pagination"
import Title from "./Title"

function AllClothes() {

    const [show,setShow] = useState(false)

    function handleShow(){
        setShow((show) => !show)
    }
    return (
        <div>
            <div>
                
                <Navigation/>
                <div className=" phones:flex phones:justify-between ">
                    <Title/>
                    <div className="flex justify-end md:hidden"
                    onClick={handleShow}
                    >
                        <FilterButton/>
                    </div>
                </div>

                <div className="md:flex md:space-x-6">
                    <Filters show={show}/>
                    <TheClothes/>
                </div>

                <Pagination/>
            </div>
        </div>
    )
}

export default AllClothes
