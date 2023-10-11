import supabase from "@/services/supabase";
import PAGE_SIZE from "@/ui/PAGE_SIZE";
import { filters } from "./filters";


export async function getFormalClothes({curPage,sortBy,startPriceRange,priceRange1,priceRange2}){


    try {

        // const {data,count,error} = await supabase
         let query =  supabase.from('clothes')
        .select("*",{count:'exact'})
        .eq('type', 'formal')

   
        const {data,error,count} = await filters(query,curPage,sortBy,startPriceRange,priceRange1,priceRange2);

        if(error) console.log("could not get formal clothes " + error.message)

        return  {data,count,error};

        
    } catch (error) {
        console.log("could not get formal clothes " + error.message)
    }
    
  
}