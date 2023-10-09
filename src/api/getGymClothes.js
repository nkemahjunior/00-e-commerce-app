import supabase from "@/services/supabase";
import PAGE_SIZE from "@/ui/PAGE_SIZE";

export async function getGymClothes({curPage}){

    let query = supabase.from('clothes')
    .select('*' , { count: "exact", })
    .eq('type', 'gym')

    //Pagination
    if(curPage){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.range(0,to).order('created_at',{ascending:false});
    }

    const { data, error , count} = await query;

    // const { data, error,count } = await supabase
    // .from('clothes')
    // .select("*",{count:'exact'})
  
    // .eq('type', 'gym')

    if(error) console.log("could not get gym clothes " + error.message)

    return  {data,count,error};

  
}