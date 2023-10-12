
import { getClothDetail } from "@/api/getAllClothes";
import AllArrivalsDetail from "@/features/allClothes/AllArrivalsDetail";
import { Suspense } from "react"



// export async function generateStaticParams() {
    
//     const { data, error } = await supabase
//     .from('clothes','name')
//     .select('id')
    
   
//     return data.map((el) => ({
//      info:[`${el.name}`, `${el.id}`]
//     }))
//   }


//   async function getDetails(id){
    
//     let { data: clothes, error } = await supabase
//     .from('clothes')
//     .select('*')

//   }
  
async function page({params}) {

    const info = params?.info

    const id = info[1]
    const {data,error} = await getClothDetail(id)

    
    const [detail] = data;
    

    return (

        <Suspense fallback={<div>fuckkkkkkkkk its loading</div>}>
            dfghjklm
            <AllArrivalsDetail data={detail} error={error} />
        </Suspense>
       
         
    )
}

export default page
