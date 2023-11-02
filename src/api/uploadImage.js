

import { supabaseKey, supabaseUrl } from '@/services/supabase url&key';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient({supabaseUrl,supabaseKey})



export async function uploadImage({file,imagePath}){

    

   
    
    console.log(file)

    const {  error } = await supabase
  .storage
  .from('formal')
  .upload(imagePath, file)

  if(error ) throw new Error("could add dress to bucket " + error.message)
}