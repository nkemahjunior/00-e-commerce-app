"use client";

import { hideCart, showCart } from "@/app/(authHome)/showCartSlice";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";


function MobileHeader() {

  const showCartOrNot = useSelector(state => state.showCart.show);
  const numOfcartItems = useSelector((state) => state.showCart.numberOfItemsInCart);
  const dispatch = useDispatch()

  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  
  const ref = useRef();
  



  useEffect(function () {
    document.addEventListener("click", handleClick, true);
  
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) 
      setShowNav(false);
    }
  
    return () => document.removeEventListener("click", handleClick, true);
  
  }, []);



  







  function handleShowShoppingCart(){
    if(showCartOrNot === false) dispatch(showCart())
    if(showCartOrNot === true) dispatch (hideCart())
  }



  function handleShowNav() {
    setShowNav((show) => !show);
  }




  function handleShowSearchBar() {
    setShowSearch((show) => !show);
  }




  return (
    <nav className="sticky top-0 z-20">
      <div className=" bg-black text-center text-white font-extralight   capitalize">
        sign up and 20% off to your first order.
        <span className="capitalize underline font-semibold">Sign up Now</span>
      </div>

      <ul className="flex items-center justify-between  px-2  py-2  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 h-[4rem]">
        <div className="flex items-center space-x-2">
          <li onClick={handleShowNav}>
            <div className="bg-black w-6 h-1 mb-1"></div>
            <div className="bg-black w-6 h-1"></div>
          </li>

          <Link href={"/"}>
          <li
            className={`font-bold capitalize ${
              showSearch === true ? "hidden" : ""
            } transition-all`}
          >

            zeco shopping
          </li></Link>

          <li
            className={` w-[12rem] rounded-md  overflow-hidden  ${
              showSearch === true ? "" : "hidden"
            }  transition-all`}
          >
            <input
              type="search"
              placeholder="search for products..."
              className="w-full bg-[#f2f0f1] outline-none pl-1"
            />
          </li>
        </div>

        <div className={`flex items-center space-x-4 `}>
          <li onClick={handleShowSearchBar}>
            <CiSearch />
          </li>

          <li className=" cursor-pointer flex" onClick={ handleShowShoppingCart} >
            <BsCart /> <p className=" -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]">{numOfcartItems}</p> 
          </li>
          <li className=" cursor-pointer">
            <VscAccount />
          </li>
        </div>
      </ul>

      <div
        className={`  absolute top-0  w-[100dvw] h-[100dvh]  ${
          showNav === true ? "" : "hidden"
        } transition-all
         backdrop-filter backdrop-blur-lg bg-opacity-1  `}
         
      >
        <div
          className=" pl-4  border-solid border-2  shadow-lg bg-white pb-4  h-[100vh] w-[80vw]"
          ref={ref}
        >
          <ul className="space-y-5 mt-2">
            <div className="flex justify-between items-center mr-8">
              <li className="font-semibold">shop</li>

              <div
                className="border-solid border-2 border-black p-1 inline  bg-stone-400   "
                onClick={handleShowNav}
              >
                X
              </div>
            </div>
            <li className="font-semibold">on sale</li>
            <li className="font-semibold">new arrivals</li>
            <li className="font-semibold">brands</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MobileHeader;
