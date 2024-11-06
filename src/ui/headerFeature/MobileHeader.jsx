"use client";

import { hideCart, showCart } from "@/app/(authHome)/showCartSlice";
import AdminLinks from "@/features/Admin Duties/AdminLinks";
import { useGetUser } from "@/features/Admin Duties/useGetUser";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import FakeMobileHeader from "../FakeMobileHeader";

import { motion } from "framer-motion";

function MobileHeader() {
  const showCartOrNot = useSelector((state) => state.showCart.show);
  const numOfcartItems = useSelector(
    (state) => state.showCart.numberOfItemsInCart
  );
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const [signUpBonus,setsignUpBonus] = useState(false)

  const ref = useRef();

  const path = usePathname();
  const { data, isLoading } = useGetUser();

  useEffect(function () {
    document.addEventListener("click", handleClick, true);

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setShowNav(false);
    }

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(
    function () {
      if (showNav) setShowNav(false);
    },
    [path]
  );

  function handleShowShoppingCart() {
    if (showCartOrNot === false) dispatch(showCart());
    if (showCartOrNot === true) dispatch(hideCart());
  }

  function handleShowNav() {
    setShowNav((show) => !show);
  }

  function handleShowSearchBar() {
    setShowSearch((show) => !show);
  }

  // if(userisLogin !== false)
  // setBonusLink(true)

  //if(isLoading) return(<FakeMobileHeader/>)

  let signUpBonus = false;

  if (data?.user?.id) {
    signUpBonus = true;
    // setsignUpBonus(true)
  }

  return (
    <>
      <nav className="sticky top-0 z-20">
        {!signUpBonus && (
          <div className=" bg-black text-center text-white font-extralight h-1   capitalize">
            {/* sign up and 20% off to your first order.
            <Link href={"/signup"}>
              <span className="capitalize underline font-semibold">
                Sign up Now
              </span>
            </Link> */}
          </div>
        )}

        <ul className="flex items-center justify-between   760:justify-center  px-2  py-2  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 h-[4rem]">
          <div className="flex items-center space-x-2">
            <li onClick={handleShowNav}>
              <div className="bg-black w-6 h-1 mb-1"></div>
              <div className="bg-black w-6 h-1"></div>
            </li>

            <Link href={"/"}>
              <li
                className={`  760:block font-bold capitalize ${
                  showSearch === true ? "phones:hidden" : ""
                } transition-all`}
              >
                zeco shopping
              </li>
            </Link>

            <li
              className={` w-[12rem] rounded-md  overflow-hidden hidden  ${
                showSearch === true ? "" : "phones:hidden"
              }  transition-all 760:block`}
            >
              <input
                type="search"
                placeholder="search for products..."
                className="w-full bg-[#f2f0f1] outline-none pl-1"
              />
            </li>
          </div>

          <div className={`flexx items-center space-x-4  `}>
            <li className="hidden" onClick={handleShowSearchBar}>
              <CiSearch />
            </li>

            <motion.li
              className=" cursor-pointer flex"
              onClick={handleShowShoppingCart}
              whileTap={{ scale: 0.95 }}
            >
              <BsCart size={20} />{" "}
              <p className=" -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]">
                {numOfcartItems}
              </p>
            </motion.li>
            {/* <li className=" cursor-pointer">
            <VscAccount />
          </li> */}
          </div>
        </ul>

        <div
          className={`  absolute top-0  w-[100dvw] h-[100dvh] ${
            showNav === true ? "" : "hidden"
          } transition-all    duration-200
         backdrop-filter backdrop-blur-lg bg-opacity-1   `}
        >
          {/*bluring the screen when the nav bar is open */}
        </div>

        <div
          className={`  absolute top-0  w-[100dvw] h-[100dvh] ${
            showNav === true ? "translate-x-[0%]" : "translate-x-[-100%]"
          } transition-all    duration-200
            `}
        >
          <div
            className={`pl-4  border-solid border-2  shadow-lg bg-white pb-4  h-[100vh] w-[80vw] `}
            ref={ref}
          >
            <ul className="space-y-5 mt-2">
              <div className="flex justify-between items-center mr-8">
                <Link href={"/newArrivals?page=1"} className="block">
                  {" "}
                  <li className="font-semibold capitalize">shop</li>
                </Link>

                <motion.div
                  className="border-solid border-2 border-black p-1 inline  bg-stone-400   "
                  onClick={handleShowNav}
                  whileTap={{ scale: 0.95 }}
                >
                  X
                </motion.div>
              </div>

              {/* <li className="font-semibold capitalize">on sale</li> */}
              <Link href={"/newArrivals?page=1"} className="block">
                {" "}
                <li className="font-semibold capitalize">new arrivals</li>
              </Link>
              <Link href={"/casual?page=1"} className="block">
                {" "}
                <li className="font-semibold capitalize">Casual</li>
              </Link>
              <Link href={"/party?page=1"} className="block">
                {" "}
                <li className="font-semibold capitalize">Party</li>
              </Link>
              {/* <li className="font-semibold capitalize">brands</li> */}
              <AdminLinks />
            </ul>
          </div>
        </div>
      </nav>
      <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-1 " />
    </>
  );
}

export default MobileHeader;
