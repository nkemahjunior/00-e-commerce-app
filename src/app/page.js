
import Categories from "./features/clothes categories/Categories";
import Reviews from "./features/customerReviews/Reviews";
import Arrivals from "./features/new arrivals/Arrivals";
import TopSelling from "./features/top selling/TopSelling";
import Hero from "./ui/Hero/Hero";



export default function Home() {
  
  return (
      <>
      <Hero/>
      <Arrivals/>
      <TopSelling/>
      <Categories/>
      <Reviews/>
      
    </>
    
  )
}
