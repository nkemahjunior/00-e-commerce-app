import supabase from "@/services/supabase";
import { filters } from "./filters";


export async function getPartyClothes({curPage,sortBy,startPriceRange,priceRange1,priceRange2}){

    try {

            let query = supabase.from('clothes')
        .select('*' , { count: "exact", })
        .eq('type', 'party')

        const {data,error,count} = await filters(query,curPage,sortBy,startPriceRange,priceRange1,priceRange2);
            

        if(error) console.log("could not get party clothes " + error.message)

    return  {data,count,error};

    } catch (error) {
        console.log("could not get party clothes " + error.message)
    }

    


  
}