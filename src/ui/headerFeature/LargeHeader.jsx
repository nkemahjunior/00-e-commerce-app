"use client";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

import { hideCart, showCart } from "@/app/(authHome)/showCartSlice";
import { useEffect, useRef, useState } from "react";
import AdminLinks from "@/features/Admin Duties/AdminLinks";
import { usePathname } from "next/navigation";




function LargeHeader({session}) {

  const showCartOrNot = useSelector(state => state.showCart.show);
  const updateCount = useSelector(state => state.showCart.updateItemCount);
  const numOfcartItems = useSelector((state) => state.showCart.numberOfItemsInCart);
  const dispatch = useDispatch()
  const ref = useRef()

  const path = usePathname()

  const [showAccount,setShowAccount] = useState(false);


  useEffect(function(){
    if(showAccount)
    setShowAccount(false)
  },[path])

  useEffect(function(){
    
    function show_Account(e){
      if(showAccount && ref.current && !ref.current.contains(e.target) )
      setShowAccount(false);
    }

    window.addEventListener('click',show_Account)

    return () => window.removeEventListener('click',show_Account)
  })

    
 
  function handleShowAccount(){
    setShowAccount((v) => !v);
  }


  // console.log(numberOfItemsInCart.length)
  



  function handleShowShoppingCart(){
    if(showCartOrNot === false) dispatch(showCart())
    if(showCartOrNot === true) dispatch (hideCart())
  }

  let signUpBonusLink = false;

    if(session !== false)
    signUpBonusLink = true


  return (
    <>
    <nav className="sticky top-0 z-20">
      
      {signUpBonusLink ||<div className=" bg-black text-center text-white font-light   capitalize">
        sign up and 20% off to your first order.
       
          <Link href={'/signup'}><span className="capitalize underline font-semibold">Sign up Now</span></Link>
       
      </div>}

      <ul
        className="flex space-x-4 lg:space-x-5 xl:space-x-12 2xl:space-x-10 items-center  pl-[2rem] lg:pl-[3rem] xl:pl-[4rem] 2xl:pl-[6rem]  py-4
      bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <Link href={"/"}>
          <li className="text-2xl font-bold capitalize">zeco shopping</li>
        </Link>
       
        <Link href="/newArrivals?page=1"   ><li className=" font-light capitalize cursor-pointer">Shop</li></Link>
        
        <li className=" font-light capitalize cursor-pointer">on sale</li>
        <Link href="/newArrivals?page=1"   >
          <li className=" font-light capitalize cursor-pointer">new arrivals</li>
        </Link>
        
        <li className=" font-light capitalize cursor-pointer">brands</li>

        <li className="flex items-center bg-[#f2f0f1] p-1 w-[10rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[28rem] rounded-lg lg:rounded-xl cursor-pointer shadow-lg">
          <span>
            <CiSearch />
          </span>
          <input
            type="search"
            placeholder="search for products..."
            className="bg-[#f2f0f1] outline-none w-full"
          />
        </li>

        <div className="flex items-center  space-x-6">

          <li className=" cursor-pointer flex"
          onClick={/*() => setShow((v) => !v)*/ handleShowShoppingCart}
          >
            <BsCart /> <p className= {`${ updateCount === true ? 'animate-bounce ' : ''} -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]`}>{numOfcartItems}</p> 
          </li>

          <li className={`cursor-pointer relative
           `} ref={ref}>
            <div onClick={handleShowAccount} 
            >
              <VscAccount />
            </div>
            

            <div className={`border-4 border-solid border-red-600 h-fit w-[10rem] bg-white absolute z-[100] p-2 ${showAccount === false ? 'hidden' : ''}`}>
              <AdminLinks  session={session}/>
            </div>
          </li>

        </div>
      </ul>
      
    </nav>
    <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-2 "/>
    </>
  );
}

export default LargeHeader;
