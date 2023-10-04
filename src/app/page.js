import dynamic  from "next/dynamic";

import Categories from "./features/clothes categories/Categories";
import Reviews from "./features/customerReviews/Reviews";
import Arrivals from "./features/new arrivals/Arrivals";
import TopSelling from "./features/top selling/TopSelling";

import LoadingHero from "./ui/Hero/LoadingHero";



const Hero = dynamic(() => import("./ui/Hero/Hero"),{
  ssr:false,
  loading:() => <LoadingHero/>
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
