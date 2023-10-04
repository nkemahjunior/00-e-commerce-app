import dynamic  from "next/dynamic";

import Categories from "./features/clothes categories/Categories";
import Reviews from "./features/customerReviews/Reviews";
import Arrivals from "./features/new arrivals/Arrivals";
import TopSelling from "./features/top selling/TopSelling";
// import Hero from "./ui/Hero/Hero";
const Hero = dynamic(() => import("./ui/Hero/Hero"),{
  ssr:false,
  loading:() => <p>Loading header...</p>
} )

export default function Home() {
  return (
    <>
      <Hero />
      <Arrivals />
      <TopSelling />
      <Categories />
      <Reviews />
    </>
  );
}
