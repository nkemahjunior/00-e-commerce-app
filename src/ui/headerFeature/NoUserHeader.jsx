function NoUserHeader() {
  return (
    <nav className="sticky top-0 z-20">
      <div className=" bg-black text-center text-white font-light   capitalize">
        sign up and 20% off to your first order.
        <span className="capitalize underline font-semibold">Sign up Now</span>
      </div>

      <ul
        className="flex justify-between  space-x-4 lg:space-x-5 xl:space-x-12 2xl:space-x-10 items-center  md:pl-[2rem] lg:pl-[3rem] xl:pl-[4rem] 2xl:pl-[6rem]  md:py-4
          bg-white  py-2 px-2"
      >
        <div className="flex space-x-2 items-center">
          <li className="  md:text-2xl font-bold capitalize">zeco shopping</li>

          {/* <li className=" font-light capitalize cursor-pointer">Shop</li>
            <li className=" font-light capitalize cursor-pointer">on sale</li>
            <li className=" font-light capitalize cursor-pointer">new arrivals</li>
            <li className=" font-light capitalize cursor-pointer">brands</li>*/}
        </div>

        <div className="flex space-x-4">
          <button className="capitalize p-2 font-semibold text-black bg-white rounded-lg  border-2 border-solid border-black lg:hover:bg-[#DBDBDB] transition-all">
            sign up
          </button>

          <button className="capitalize p-2 font-semibold text-white bg-black rounded-lg  border-2 border-solid border-black lg:hover:bg-[#373737] transition-all">
            sign in
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default NoUserHeader;
