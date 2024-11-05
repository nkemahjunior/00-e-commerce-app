import Image from "next/image";
import casual from "../../../public//casual.png";

import formal from "../../../public/formal.png";
import party from "../../../public/party.png";
import gym from "../../../public/gym.png";
import Link from "next/link";

function Categories() {
  return (
    <div className="max-w-[100vw] px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem] mt-6 md:mt-12">
      <div className="bg-[#F0F0F0]  rounded-xl  pb-4 md:pb-8 xl:pb-10 pt-6 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-14 px-2 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]   ">
        <h3 className="font-bold uppercase mb-4 md:mb-6 xl:mb-10 text-center md:text-2xl xl:text-3xl 2xl:text-4xl">
          browse by dress style
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-3 md:gap-4 relative">
          <Link href={"/casual?page=1"}>
            <div className="h-[10rem] xl:h-[14rem] 2xl:h-[18rem]  relative lg:hover:brightness-50 transition-all cursor-pointer delay-75">
              <Image src={casual} alt="causual" fill sizes="100vw" />
            </div>
          </Link>

          <Link href="/formal?page=1" className="md:col-span-2 ">
            <div className="h-[10rem] xl:h-[14rem] 2xl:h-[18rem]  relative lg:hover:brightness-50 transition-all cursor-pointer delay-75">
              <Image src={formal} alt="formal" fill sizes="100vw" />
            </div>
          </Link>

          <Link href="/party?page=1" className="md:col-span-2 ">
            <div className="h-[10rem] xl:h-[14rem] 2xl:h-[18rem]  relative lg:hover:brightness-50 transition-all cursor-pointer delay-75">
              <Image src={party} alt="party" fill sizes="100vw" />
            </div>
          </Link>

          <Link href="/gym?page=1">
            <div className="h-[10rem] xl:h-[14rem] 2xl:h-[18rem]  relative lg:hover:brightness-50 transition-all cursor-pointer delay-75">
              <Image src={gym} alt="gym" fill sizes="100vw" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
