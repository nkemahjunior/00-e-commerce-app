import supabase from "@/services/supabase";

export async function getAllClothes(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')

    return data;

}