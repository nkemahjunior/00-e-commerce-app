import AllClothesLayout from "@/features/allClothes/AllClothesLayout";

function ClothCollectionlayout({ children }) {
  return (
    <>
      <AllClothesLayout page={children} />
    </>
  );
}

export default ClothCollectionlayout;
