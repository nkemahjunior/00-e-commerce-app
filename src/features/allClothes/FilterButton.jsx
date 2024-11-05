import { BsFilter } from "react-icons/bs";

function FilterButton() {
  return (
    <button className="   h-[3rem] w-[3rem]  rounded-[50%] flex justify-center items-center  ">
      <BsFilter style={{ height: "3rem", width: "2rem" }} />
    </button>
  );
}

export default FilterButton;
