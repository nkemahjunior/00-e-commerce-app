import Image from "next/image"

function ShoppingCartItem({data}) {
  
    return (
        <div className="grid grid-cols-[30fr,70fr] space-x-2 md:space-x-0">

            <div className=" w-[7rem]">

                <div className=" 
                h-[7rem] w-[7rem] relative  ">
                    <Image src={data.image} alt={`photo of ${data.name}`} fill/>
                </div>

            </div>

            <div className=" space-y-2">

                <p className="uppercase  font-medium ">{data.name}</p>
                <p className="font-medium">${data.price}</p>
                <p className="capitalize">quantity: {data.quantity}</p>
                <p className="capitalize">size: {data.selectedSize}</p>
                
            </div>
        </div>
    )
}

export default ShoppingCartItem
