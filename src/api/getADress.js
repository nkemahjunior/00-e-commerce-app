import { supabase } from "@/services/supabase";

export async function getADress(type, id) {
  try {
    const { data, error } = await supabase
      .from("clothes")
      .select("*")
      .eq("type", type)
      .eq("id", id);

    return { data, error };
  } catch (error) {
    console.log(`could not get this ${type}  cloth` + error.message);
  }
}
