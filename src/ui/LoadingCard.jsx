function LoadingCard() {
  return (
    <div className="mt-4 mx-2 md:mx-[2rem] xl:mx-[4rem] 2xl:mx-[6rem] animate-pulse">
      <div
        className=" w-[9.5rem] lg:w-[13rem] xl:w-[17rem] 
            2xl:w-[19rem]"
      >
        <div className=" h-[9.5rem] lg:h-[13rem]  xl:h-[17rem] 2xl:h-[19rem] w-[100%] bg-[#E3DFE1] rounded-xl overflow-hidden "></div>

        <div className=" max-h-fit w-[100%]  py-2">
          <p className=" h-3 w-[70%] mt-2 bg-[#E3DFE1]"></p>
          <p className="block h-3 mt-2 w-[50%] bg-[#E3DFE1]"></p>
          <p className="block mt-2 h-3 w-[20%] bg-[#E3DFE1]"></p>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
