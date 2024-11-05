"use client";
import { useGetUser } from "@/features/Admin Duties/useGetUser";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import GlobalLoading from "./GlobalLoading";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function CheckoutBtn({ padding, mt, cartItems }) {
  const { data: user, isLoading } = useGetUser();

  const router = useRouter();

  async function checkout() {
    if (cartItems.length < 1) return toast.error("Please select an item");
    if (!user || user.user == null)
      router.push(
        `${location.origin}/login?redirect=${location.pathname}${location.search}`,
      );

    const res = await fetch(`${location.origin}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemsInCart: cartItems,
        currentURL: `${location.pathname}${location.search}`,
      }),
    });

    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    const stripeError = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
  }

  if (isLoading) return <GlobalLoading />;
  return (
    <>
      {/* <Link href={"/login"}> */}
      <button
        onClick={checkout}
        className={`bg-black text-white ${padding} ${mt} text-center w-full uppercase lg:hover:scale-95 transition-transform lg:delay-75 duration-100 border-2 border-solid border-black`}
      >
        checkout
      </button>
      {/* </Link> */}
    </>
  );
}
