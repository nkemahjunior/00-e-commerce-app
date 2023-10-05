import supabase from "@/services/supabase";

export async function test(){
    
const { data, error } = await supabase
.from('test')
.select('*')

console.log("working")

console.log("data = " + data)

if(error) console.log("fuckkkkkkkkkk " + error.message)

return data;

}