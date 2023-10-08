
import supabase from "@/services/supabase";

export async function newArrivals(){
    
    const { data, error,count } = await supabase
    .from('clothes')
    .select('*')
    .order('created_at',{ascending:false});


    return data;

}

export async function getAllNewArrivals(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    .range(0,7)
    .order('created_at',{ascending:false});

    if(error) console.log("could not get all new arrivals " + error.message)

    

    return {data,error};

}

export async function topSelling(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    


    return data;
}