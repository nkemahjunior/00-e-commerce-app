import Image from "next/image";
import ShopThis from "./AddToCart";


function ArrivalsCard({ picture, name, price }) {
  // console.log(picture.trim())
  return (
    <div className="mt-6 md:mt-8 lg:mt-12  w-full">
      <div className=" w-full ">
        <div className=" h-[15rem] md:h-[20rem] 2xl:h-[25rem]    w-full bg-[#F0EEED]  overflow-hidden relative">
          <Image src={picture?.trim()} alt={`photo of ${name}`} quality={90} fill />
        </div>

        <div
          className="  text-lg
               "
        >
          <p className="  text-center text-sm font-medium  uppercase  mt-2 overflow-ellipsis">
            {name}
          </p>

          <p className=" text-center text-sm font-medium   uppercase  mt-3">
            ${price}
          </p>

          <div className="flex justify-center">
            <ShopThis />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrivalsCard;


// function ArrivalsCard({ picture, name, price }) {
//   // console.log(picture.trim())
//   return (
//     <div className="mt-6 md:mt-8 lg:mt-12 border-2 border-solid border-green-700 w-full">
//       <div
//         className=" w-[9.5rem] 350:w-[10.8rem] md:w-[9.5rem] lg:w-[13rem] xl:w-[13.5rem]    
//             2xl:w-[16rem] 1400:w-[14rem] border-2 border-solid border-blue-700 "
//       >
//         <div className=" h-[9.5rem] lg:h-[13rem]  xl:h-[17rem] 2xl:h-[19rem] w-[100%] bg-[#F0EEED] rounded-xl overflow-hidden relative">
//           <Image src={picture?.trim()} alt={`photo of ${name}`} fill />
//         </div>

//         <div
//           className="  text-lg
//                "
//         >
//           <p className="  text-center  uppercase  mt-2 overflow-ellipsis">
//             {name}
//           </p>

//           <p className=" text-center   uppercase  mt-3">${price}</p>

//           <div className="flex justify-center">
//             <ShopThis />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ArrivalsCard;
