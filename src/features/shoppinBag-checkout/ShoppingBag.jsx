"use client";

import { useSelector } from "react-redux";
import ShoppingBagItem from "./ShoppingBagItem";
import Link from "next/link";
import CheckoutBtn from "@/ui/CheckoutBtn";

function ShoppingBag() {
  const itemsInCart = useSelector((state) => state.showCart.itemsInCart);

  const itemsInCartLength = useSelector(
    (state) => state.showCart.numberOfItemsInCart,
  );

  let subtotal = 0;
  itemsInCart.forEach((el) => (subtotal = subtotal + el.price));

  const deliveryFee = 30;

  const estimatedTotal = subtotal + deliveryFee;

  return (
    <>
      {itemsInCartLength === 0 ? (
        <div className="flex justify-center items-center  h-screen w-full">
          {" "}
          no items in shopping bag...{" "}
        </div>
      ) : (
        <div className="px-2  md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] space-y-4">
          <h1 className=" text-2xl uppercase font-semibold mt-2">
            shopping bag
          </h1>

          <div
            className="
                flex flex-col  md:flex-row
                  space-y-2 md:space-x-4 "
          >
            <div
              className="                  
                    w-100vw md:w-[60vw]
                    border-2 border-solid border-stone-200 h-fit p-2"
            >
              {itemsInCart.map((el, i) => (
                <ShoppingBagItem
                  data={el}
                  price={el.price}
                  fetchId={i}
                  key={Math.random()}
                />
              ))}
            </div>

            <div
              className=" 
                    md:sticky md:top-24
                    w-100vw md:w-[40vw]
                    border-2 border-solid border-stone-200 p-2 h-fit  "
            >
              <h2 className=" text-xl capitalize font-semibold">
                order summary
              </h2>

              <ul className="space-y-2 md:space-y-4">
                <div className="flex justify-between">
                  <li className="capitalize mt-2 text-stone-600">subtotal</li>
                  <li>${subtotal}</li>
                </div>

                <div className="flex justify-between">
                  <li className="capitalize text-stone-600">delivery fee</li>
                  <li>${deliveryFee}</li>
                </div>

                <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-2 mb-2" />

                <div className="flex justify-between">
                  <li className="capitalize mt-2 text-stone-600">
                    estimated total
                  </li>
                  <li>${estimatedTotal}</li>
                </div>
              </ul>

              <CheckoutBtn
                padding={"p-3"}
                mt={"mt-4"}
                cartItems={itemsInCart}
              />
              {/* <Link href={"/login"} className="block">
                <button className="text center uppercase text-white bg-black p-3 w-full mt-4 lg:hover:scale-95 transition-all lg:delay-75 ">
                  checkout
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingBag;
