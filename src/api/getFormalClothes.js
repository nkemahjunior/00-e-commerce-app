import supabase from "@/services/supabase";
import PAGE_SIZE from "@/ui/PAGE_SIZE";


export async function getFormalClothes({curPage}){

    // const {data,count,error} = await supabase
   let query =  supabase.from('clothes')
    .select("*",{count:'exact'})
    .eq('type', 'formal')

    //PAGINATION
    if(curPage){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.range(0,to).order('created_at',{ascending:false});
    }

    const { data, error , count} = await query;

    if(error) console.log("could not get formal clothes " + error.message)

    return  {data,count,error};
}