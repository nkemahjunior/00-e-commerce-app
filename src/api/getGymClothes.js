import { supabase } from "@/services/supabase";
import { filters } from "./filters";

export async function getGymClothes({
  curPage,
  sortBy,
  startPriceRange,
  priceRange1,
  priceRange2,
}) {
  try {
    let query = supabase
      .from("clothes")
      .select("*", { count: "exact" })
      .eq("type", "gym");

    const { data, error, count } = await filters(
      query,
      curPage,
      sortBy,
      startPriceRange,
      priceRange1,
      priceRange2
    );

    if (error) console.log("could not get gym clothes " + error.message);

    return { data, count, error };
  } catch (error) {
    console.log("could not get gym clothes " + error.message);
  }
}
