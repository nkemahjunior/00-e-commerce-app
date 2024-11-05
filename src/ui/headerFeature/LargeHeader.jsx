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
import { useGetUser } from "@/features/Admin Duties/useGetUser";
import FakeHeader from "../FakeHeader";

import {motion} from "framer-motion"




function LargeHeader() {

  const showCartOrNot = useSelector(state => state.showCart.show);
  const updateCount = useSelector(state => state.showCart.updateItemCount);
  const numOfcartItems = useSelector((state) => state.showCart.numberOfItemsInCart);
  const dispatch = useDispatch()
  const ref = useRef()

  const path = usePathname()

  const [showAccount,setShowAccount] = useState(false);

  const {data, isLoading} = useGetUser();
  // const [signUpBonus,setsignUpBonus] = useState(false)
  
  
 

 

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

  // let signUpBonusLink = false;

  //   if(userisLogin !== false)
  //   signUpBonusLink = true

  //if(isLoading ) return(<FakeHeader/>)

  let signUpBonus = false

  if(data?.user?.id  ){
    signUpBonus = true
    // setsignUpBonus(true)

  }

  return (
    <>
      {!signUpBonus && (
        <div className=" bg-black text-center text-white  h-1   capitalize">
          {/* sign up and 20% off to your first order.
            <Link href={"/signup"}>
              <span className="capitalize underline font-semibold">
                Sign up Now
              </span>
            </Link> */}
        </div>
      )}
      <nav className="sticky top-0 z-20 bg-white  backdrop-blur-lg bg-opacity-10 pl-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]  py-4 2xl:py-8">
        <div className=" flex  ">
          <ul
            className="flex space-x-4 lg:space-x-5 xl:space-x-12 2xl:space-x-10 items-center  
      "
          >
            <Link href={"/"}>
              <li className="text-2xl font-bold capitalize hover:text-[#373737] transition duration-75  ">
                zeco shopping
              </li>
            </Link>

            <Link href="/newArrivals?page=1">
              <li className="  capitalize cursor-pointer hover:text-[#373737] transition duration-75">
                Shop
              </li>
            </Link>

            <Link href="/newArrivals?page=1">
              <li className="  capitalize cursor-pointer hover:text-[#373737] transition duration-75">
                new arrivals
              </li>
            </Link>

            <Link href="/casual?page=1">
              <li className="  capitalize cursor-pointer hover:text-[#373737] transition duration-75">
                Casual
              </li>
            </Link>

            <Link href="/party?page=1">
              <li className="  capitalize cursor-pointer hover:text-[#373737] transition duration-75">
                Party
              </li>
            </Link>

            <li className=" items-center bg-[#f2f0f1] p-1 w-[10rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[28rem] rounded-lg lg:rounded-xl cursor-pointer shadow-lg hidden">
              <span>
                <CiSearch />
              </span>
              <input
                type="search"
                placeholder="search for products..."
                className="bg-[#f2f0f1] outline-none w-full"
              />
            </li>
          </ul>

          <div className="flex flex-grow justify-end space-x-8 w-16 items-center  ">
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
              className=" cursor-pointer flex"
              onClick={/*() => setShow((v) => !v)*/ handleShowShoppingCart}
            >
              <BsCart size={28} />{" "}
              <p
                className={`${
                  updateCount === true ? "animate-bounce " : ""
                } -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]`}
              >
                {numOfcartItems}
              </p>
            </motion.div>

            <div
              className={`cursor-pointer relative
           `}
              ref={ref}
            >
              <motion.div
                onClick={handleShowAccount}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
              >
                <VscAccount size={28} />
              </motion.div>

              <div
                className={`border-2 border-solid border-stone-500 shadow-xl rounded-lg h-fit w-[10rem] bg-white absolute z-[100] p-2 right-0 mt-4  ${
                  showAccount === false ? "hidden " : ""
                }`}
              >
                <AdminLinks />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-2 " />
    </>
  );
}

export default LargeHeader;
