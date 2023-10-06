"use client";

import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

function LargeHeader() {
  return (
    <nav className="sticky top-0 z-20">
      <div className=" bg-black text-center text-white font-light   capitalize">
        sign up and 20% off to your first order.
        <span className="capitalize underline font-semibold">Sign up Now</span>
      </div>

      <ul
        className="flex space-x-4 lg:space-x-5 xl:space-x-12 2xl:space-x-10 items-center  pl-[2rem] lg:pl-[3rem] xl:pl-[4rem] 2xl:pl-[6rem]  py-4
      bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <Link href={"/"}>
          <li className="text-2xl font-bold capitalize">zeco shopping</li>
        </Link>
       

        <li className=" font-light capitalize cursor-pointer">Shop</li>
        <li className=" font-light capitalize cursor-pointer">on sale</li>
        <li className=" font-light capitalize cursor-pointer">new arrivals</li>
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
          <li className=" cursor-pointer">
            <BsCart />
          </li>
          <li className=" cursor-pointer">
            <VscAccount />
          </li>
        </div>
      </ul>
      
    </nav>
  );
}

export default LargeHeader;
