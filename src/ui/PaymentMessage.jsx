"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PiCheckBold } from "react-icons/pi";
import PaymentFailed from "./PaymentFailed";
import PaymentSuccess from "./PaymentSuccess";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/app/(authHome)/showCartSlice";


export default function PaymentMessage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart())
    localStorage.removeItem("cart");

  }, []);

  const searchParams = useSearchParams();
  const router = useRouter()
  const paySuccess = searchParams.has("success");
  const redirect = searchParams.get("redirect")

  const backToUrlBeforeCheckout = () => {
    if (!redirect) router.push(`${location.origin}/newArrivals?page=1`)
    else router.push(`${location.origin}/${redirect}`, { scroll: false });
  }
  


  return (
    <div className="  flex flex-col justify-center items-center gap-y-24 lg:gap-y-32">
      {paySuccess ? <PaymentSuccess /> : <PaymentFailed />}

      <div className=" flex justify-center items-center">
        <button onClick={backToUrlBeforeCheckout} className=" font-semibold py-2 lg:py-4 px-6 lg:px-8 rounded-xl text-white bg-black transition-transform lg:hover:scale-95">
          Continue Browsing Products
        </button>
      </div>
    </div>
  );
}
