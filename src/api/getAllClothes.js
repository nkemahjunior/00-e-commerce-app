
import supabase from "@/services/supabase";
import PAGE_SIZE from "@/ui/PAGE_SIZE";

export async function newArrivals(){
    
    const { data, error,count } = await supabase
    .from('clothes')
    .select('*')
    .order('created_at',{ascending:false});


    return data;

}

export async function getAllNewArrivals({curPage}){

    let query = supabase.from('clothes')
    .select('*' , { count: "exact", })

    //Pagination
    if(curPage){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.range(0,to).order('created_at',{ascending:false});
    }
    
    const { data, error , count} = await query;
    

    if(error) console.log("could not get all new arrivals " + error.message)

    return {data,error,count};

}



export async function topSelling(){
    
    const { data, error } = await supabase
    .from('clothes')
    .select('*')
    


    return data;
}