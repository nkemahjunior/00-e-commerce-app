import Image from "next/image"

function TopSellingCards({image,name,price}) {
    return (
        <div className="">

            <div className=" w-[9.5rem] lg:w-[13rem] xl:w-[17rem] 
            2xl:w-[19rem]">

                <div className=" h-[9.5rem] lg:h-[13rem]  xl:h-[17rem] 2xl:h-[19rem] w-[100%] bg-[#F0EEED] rounded-xl overflow-hidden relative">
                    <Image fill src={image} alt={`photo of ${name}`}/>

                </div>

                <div className=" max-h-fit w-[100%]  py-2">

                    <p className=" font-black capitalize ">{name}</p>
                    <p className="block">x x x x x</p>
                    <p className="block font-bold">${price}</p>
                    
                </div>
            </div>

        </div>
    )
}

export default TopSellingCards
