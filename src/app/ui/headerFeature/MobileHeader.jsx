"use client";

import { useEffect, useRef, useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

// import BsCart from "./react icons/BsCart"
// import VscAccount from "./react icons/accountIcon"
// import CiSearch from "./react icons/searchIcon"

function MobileHeader() {


  const ref = useRef();

  useEffect(function () {
    document.addEventListener("click", handleClick, true);

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) 
      setShowNav(false);
    }

    return () => document.removeEventListener("click", handleClick, true);

  }, []);

  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);

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

      <ul className="flex items-center justify-between  px-2  py-2  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="flex items-center space-x-2">
          <li onClick={handleShowNav}>
            <div className="bg-black w-6 h-1 mb-1"></div>
            <div className="bg-black w-6 h-1"></div>
          </li>

          <li
            className={`font-bold capitalize ${
              showSearch === true ? "hidden" : ""
            } transition-all`}
          >
            zeco shopping
          </li>

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

          <li className=" cursor-pointer">
            <BsCart />
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
         backdrop-filter backdrop-blur-lg bg-opacity-1 `}
         
      >
        <div
          className="w-[70dvw] pl-4  border-solid border-2  shadow-lg bg-white pb-4  "
          ref={ref}
        >
          <ul className="space-y-3 mt-2">
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
