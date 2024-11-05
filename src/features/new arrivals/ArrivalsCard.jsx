import Image from "next/image"
import ShopThis from "./AddToCart"


function ArrivalsCard({picture,name,price}) {

  
// console.log(picture.trim())
    return (
      <div className="mt-6 md:m-8 lg:mt-12">
        <div
          className=" w-[9.5rem] 350:w-[10.8rem] md:w-[9.5rem] lg:w-[13rem] xl:w-[13.5rem]    
            2xl:w-[16rem] 1400:w-[14rem] "
        >
          <div className=" h-[9.5rem] lg:h-[13rem]  xl:h-[17rem] 2xl:h-[19rem] w-[100%] bg-[#F0EEED] rounded-xl overflow-hidden relative">
            <Image src={picture?.trim()} alt={`photo of ${name}`} fill />
          </div>

          <div
            className="  text-lg
               "
          >
            <p className="  text-center  uppercase  mt-2 overflow-ellipsis">
              {name}
            </p>

            <p className=" text-center   uppercase  mt-3">${price}</p>

            <div className="flex justify-center">
              <ShopThis />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ArrivalsCard
