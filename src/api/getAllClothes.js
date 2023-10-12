
import supabase from "@/services/supabase";

import { filters } from "./filters";

export async function newArrivals(){
    
    const { data, error,count } = await supabase
    .from('clothes')
    .select('*')
    .order('created_at',{ascending:false});


    return data;

}


export async function getClothDetail(id){
    try {
        const {data,error}  = await supabase.from('clothes')
        .select('*')
        .eq('id',id)

        return {data,error}
        
    } catch (error) {
        console.log("error fetching this cloth " + error.message)
    }
}




export async function getAllNewArrivals({curPage,sortBy,startPriceRange,priceRange1,priceRange2}){

try{


    let query = supabase.from('clothes')
    .select('*' , { count: "exact", })

   
    const {data,error,count} = await filters(query,curPage,sortBy,startPriceRange,priceRange1,priceRange2);

   

    if(error) console.log("could not get all new arrivals " + error.message)

    return {data,error,count}
}
catch(err){
    console.log("there was a problem fetching the data " + err.message)
}

}



export async function topSelling(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    


    return data;
}