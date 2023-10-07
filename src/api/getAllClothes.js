
import supabase from "@/services/supabase";

export async function newArrivals(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    .order('created_at',{ascending:false});


    return data;

}

export async function topSelling(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    


    return data;
}