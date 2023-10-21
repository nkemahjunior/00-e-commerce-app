'use client'

import { LiaExternalLinkAltSolid } from "react-icons/lia"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams} from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { hideTheFilter } from "@/app/(authHome)/showCartSlice"





function Filters() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const[rangeFrom,setRangeFrom] = useState(null)
    const[rangeTo,setRangeTo] = useState(null)

    const [rangeError,setRangeError] = useState(false)

    const dispatch = useDispatch()
    const showFilter = useSelector((state) => state.showCart.showFilter)

    useEffect(function(){
        dispatch(hideTheFilter())
    },[pathname,searchParams])

   

    const createQueryString = useCallback(
      (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
  
        return params.toString();
      },
      [searchParams]
    );
 

    function onValueChange(e){
        
        router.push(pathname + "?" + createQueryString("price", e.target.value))

    }

    function handleRangeFrom(e){
        setRangeFrom(e.target.value)
    }

    function handleRangeTo(e){
        setRangeTo(e.target.value)
    }

    function addRangeToUrl(){

        if( rangeFrom && !rangeTo) router.push(pathname + "?" + createQueryString("range", rangeFrom))

        // if(rangeTo && !rangeFrom) router.push(pathname + "?" + createQueryString("to", rangeTo))

        if( rangeFrom && rangeTo){
            router.push(pathname + "?" + createQueryString("range", rangeFrom +"-"+ rangeTo) )
            // router.push(pathname + "?" + createQueryString("to", rangeTo))
        }

        // rangeFrom?.length > 0 ? router.push(pathname + "?" + createQueryString("from", rangeFrom)) : console.log("no range from")
        // rangeTo?.length > 0 ? router.push(pathname + "?" + createQueryString("to", rangeTo)) : console.log("no range To")
    }


    

    return (
        <div className= {` ${ showFilter === true ? ' ' :'hidden'}
        absolute  xl:sticky  top-24 
         bg-white md:relative md:block  h-screen w-[90vw] md:w-[30%] lg:w-[20%] z-10 p-4`}
         
         >
            <div >
                <h1 className="capitalize font-bold text-2xl ">filters</h1>

                <hr className="w-[100%] bg-stone-700 mt-2   mb-2 "/>

                <h2 className="capitalize font-bold space-y-4 ">dress style</h2>

                <ul >
                    <Link 
                    className={`link ${pathname === '/casual' ? ' text-blue-800 font-medium' : ''}`}
                    href="/casual?page=1">
                        <li className="capitalize font-light flex">casual &nbsp;<LiaExternalLinkAltSolid style={{width:"1rem",height:"1rem",color:"#d6d3d1"}}/></li>
                    </Link>

                    <Link 
                     className={`link ${pathname === '/formal' ? ' text-blue-800 font-medium' : ''}`}
                    href="/formal?page=1">
                        <li  className="capitalize font-light flex ">Formal &nbsp;<LiaExternalLinkAltSolid style={{width:"1rem",height:"1rem",color:"#d6d3d1"}}/></li>
                    </Link>

                    <Link 
                     className={`link ${pathname === '/party' ? ' text-blue-800 font-medium' : ''}`}
                    href="/party?page=1">
                        <li className="capitalize font-light flex">Party &nbsp;<LiaExternalLinkAltSolid style={{width:"1rem",height:"1rem",color:"#d6d3d1"}}/></li>
                    </Link>

                    <Link 
                     className={`link ${pathname === '/gym' ? ' text-blue-800 font-medium' : ''}`}
                    href="/gym?page=1">
                        <li className="capitalize font-light flex">Gym &nbsp;<LiaExternalLinkAltSolid style={{width:"1rem",height:"1rem",color:"#d6d3d1"}}/></li>
                    </Link>


                </ul>


                <div className="mt-4">
                    <label htmlFor="sort price " className="font-bold">sort by price</label>

                    <select name="sort" id="sort" onChange={onValueChange}>
                        <option value="nosort">newest</option>
                        <option value="highest">from highest</option>
                        <option value="lowest">from lowest</option>
                    </select>
                </div>


                <div className="space-y-2 border-2 border-solid bg-stone-50 shadow-lg py-4 mt-4">
                    <h3 className=" font-bold capitalize mb-2 ml-2">price range</h3>
                    <div className="flex">
                        <label htmlFor="from" className=" font-semibold capitalize" > from </label>
                        <input type="number" className=" outline outline-1 outline-stone-500 w-[50%]"
                        onChange={handleRangeFrom} />
                    </div>

                    <div className="flex"
                     
                    >
                        <label htmlFor="to" className=" font-semibold capitalize"> to &nbsp; &nbsp; </label>
                        <input type="number" className="  outline outline-1 outline-stone-500 w-[50%]"
                        onChange={handleRangeTo}
                        onClick={() => {
                            setRangeError((v) => !v)
                        }}
                       />
                    </div>
                    {rangeError && !rangeFrom &&  <p className=" text-red-600 italic">input starting price first boy</p> }
                    

                    <div className={`flex justify-center ${!rangeFrom && 'hidden'} transition-all`}>
                        <button className="border-2 border-black font-bold capitalize  w-[80%] rounded-lg m p-2 bg-black text-white md:hover:bg-stone-50 md:hover:text-black md:hover:border-2 md:hover:border-black transition-all"
                        onClick={addRangeToUrl} 
                        >

                            apply
                        </button>
                    </div>
                
                </div>
                   




            </div>
        </div>
    )
}

export default Filters
