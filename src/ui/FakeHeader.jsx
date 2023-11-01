import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

function FakeHeader() {
    return (
        <>
        <nav className="sticky top-0 z-20">
          
         
    
          <ul
            className="flex space-x-4 lg:space-x-5 xl:space-x-12 2xl:space-x-10 items-center  pl-[2rem] lg:pl-[3rem] xl:pl-[4rem] 2xl:pl-[6rem]  py-4
          bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
          >
            
              <li className="text-2xl font-bold capitalize">zeco shopping</li>
            
           
           <li className=" font-light capitalize cursor-pointer">Shop</li>
            
            <li className=" font-light capitalize cursor-pointer">on sale</li>
           
              <li className=" font-light capitalize cursor-pointer">new arrivals</li>
            
            
            <li className=" font-light capitalize cursor-pointer">brands</li>
    
            <li className="flex items-center bg-[#f2f0f1] p-1 w-[10rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[28rem] rounded-lg lg:rounded-xl cursor-pointer shadow-lg">
              <span>
                <CiSearch />
              </span>
              <input
                type="search"
                placeholder="search for products..."
                className="bg-[#f2f0f1] outline-none w-full"
              />
            </li>
    
            <div className="flex items-center  space-x-6">
    
              <li className=" cursor-pointer flex"
              
              >
                <BsCart /> <p className= {` -mt-2 bg-black text-white max-h-fit w-fit flex items-center rounded-[50%]`}></p> 
              </li>
    
              <li className={`cursor-pointer relative
               `} >
                <div  
                >
                  <VscAccount />
                </div>
            
              </li>
    
            </div>
          </ul>
          
        </nav>
        <hr className="w-[100%] bg-stone-400 h-[0.5px] mt-2 "/>
        </>
      );
}

export default FakeHeader
