import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function FakeMobileHeader() {
  return (
    <>
      <nav className="sticky top-0 z-20">
        <ul className="flex items-center justify-between   760:justify-center  px-2  py-2  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 h-[4rem]">
          <div className="flex items-center space-x-2">
            <li>
              <div className="bg-black w-6 h-1 mb-1"></div>
              <div className="bg-black w-6 h-1"></div>
            </li>

            <>
              <li
                className={`  760:block font-bold capitalize  transition-all`}
              >
                zeco shopping
              </li>
            </>

            <li
              className={` w-[12rem] rounded-md  overflow-hidden   transition-all 760:block`}
            >
              <input
                type="search"
                placeholder="search for products..."
                className="w-full bg-[#f2f0f1] outline-none pl-1"
              />
            </li>
          </div>

          <div className={`flex items-center space-x-4 `}>
            <li>
              <CiSearch />
            </li>

            <li className=" cursor-pointer flex">
              <BsCart />{" "}
              <p className=" -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]"></p>
            </li>
            {/* <li className=" cursor-pointer">
                <VscAccount />
              </li> */}
          </div>
        </ul>

        <div
          className={`  absolute top-0  w-[100dvw] h-[100dvh]  transition-all    duration-200
             backdrop-filter backdrop-blur-lg bg-opacity-1   `}
        >
          {/*bluring the screen when the nav bar is open */}
        </div>
      </nav>
      <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-1 " />
    </>
  );
}

export default FakeMobileHeader;
