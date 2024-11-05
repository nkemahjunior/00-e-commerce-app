import { getClothDetail } from "@/api/getAllClothes";
import AllArrivalsDetail from "@/features/allClothes/AllArrivalsDetail";
import Navigation from "@/features/allClothes/Navigation";
import GlobalLoading from "@/ui/GlobalLoading";
import { Suspense } from "react";

// export async function generateStaticParams() {

async function page({ params }) {
  const param = await params;
  const info = param?.info;

  const id = info[1];
  const { data, error } = await getClothDetail(id);

  const [detail] = data;

  return (
    <Suspense fallback={<GlobalLoading />}>
      <Navigation />
      <AllArrivalsDetail data={detail} error={error} />
    </Suspense>
  );
}

export default page;
