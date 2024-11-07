

import Categories from "@/features/clothes categories/Categories";
import Reviews from "@/features/customerReviews/Reviews";
import Arrivals from "@/features/new arrivals/Arrivals";
import TopSelling from "@/features/top selling/TopSelling";
import LoadingHero from "@/ui/Hero/LoadingHero";
import Hero from "@/ui/Hero/Hero";
import { newArrivals as newArrivalsData } from "@/api/getAllClothes";
import { topSelling as topSellingApi } from "@/api/getAllClothes";

// const Hero = dynamic(() => import("@/ui/Hero/Hero"), {
//   ssr: false,
//   loading:() => <LoadingHero/>
// } )

export default async function Home() {

  const newArrivals = await newArrivalsData();
  const topSelling = await topSellingApi();


  return (
    <>
      <Hero />
      <Arrivals newArrivals={newArrivals} />
      <TopSelling topSelling={topSelling} />
      <Categories />
      {/* <Reviews /> */}
    </>
  );
}
