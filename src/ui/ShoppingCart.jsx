"use client";

import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";
import { useEffect, useRef } from "react";
import { hideCart } from "@/app/(authHome)/showCartSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import CheckoutBtn from "./CheckoutBtn";

function ShoppingCart() {
  const path = usePathname();

  const cartItems = useSelector((state) => state.showCart.itemsInCart);
  const showCart = useSelector((state) => state.showCart.show);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (showCart === true) dispatch(hideCart());
    },
    [path],
  );

  useEffect(function () {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) dispatch(hideCart());
    }

    document.addEventListener("click", close, true);
    return () => document.removeEventListener("click", close, true);
  }, []);

  function handleXclose() {
    dispatch(hideCart());
  }

  return (
    <div
      className={`
        ${showCart === false ? "hidden" : ""}
         fixed   md:right-[4rem] z-[90] bg-white phones:h-fit pb-2 px-2 md:px-4 phones:w-full`}
      ref={ref}
    >
      <div className="   h-full">
        <div className="p-4">
          <h1 className="font-bold text-center uppercase">
            added to shopping bag{" "}
            <motion.span
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 0.95 }}
              className="absolute right-4 font-normal cursor-pointer"
              onClick={handleXclose}
            >
              X
            </motion.span>
          </h1>
        </div>

        <hr className="bg-stone-400 h-[0.15rem]" />

        <div className="  overflow-y-auto  h-[20rem]    md:h-[22rem] md:w-[30rem]">
          <div className="space-y-4">
            {cartItems.map((el) => (
              <ShoppingCartItem key={el.id * Math.random()} data={el} />
            ))}
          </div>
        </div>

        <hr className="bg-stone-400 h-[0.15rem]" />
        <div className="space-y-2 mt-2">
          <CheckoutBtn padding={"p-3"} mt={""} cartItems={cartItems} />
          {/* <Link href={"/login"}>
            <button className="bg-black text-white p-4 text-center w-full uppercase md:hover:scale-90 border-2 border-solid border-black">
              checkout
            </button>
          </Link> */}

          <Link href={"/shoppingBag"} className="block">
            <button className="bg-white text-black p-4 text-center w-full uppercase lg:hover:scale-95 transition-transform lg:delay-75 duration-100  border-2 border-solid border-black">
              view shopping bag
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
