import supabase from "@/services/supabase";
import PAGE_SIZE from "@/ui/PAGE_SIZE";


export async function getPartyClothes({curPage}){

    let query = supabase.from('clothes')
    .select('*' , { count: "exact", })
    .eq('type', 'party')

    //Pagination
    if(curPage){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.range(0,to).order('created_at',{ascending:false});
    }

    const { data, error , count} = await query;
    

    if(error) console.log("could not get party clothes " + error.message)

    return  {data,count,error};

  
}