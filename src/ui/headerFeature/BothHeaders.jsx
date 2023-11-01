'use client'


import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";





function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function BothHeaders({userisLogin}) {

    // const {data,isLoading} = useGetUser();

    // if(!isLoading) console.log(data)

  const [windowSize, setWindowsize] = useState(0);

  useEffect(() => {      
      function handleWindowResize() {
          setWindowsize(getWindowSize())
      }

      handleWindowResize();
    
      window.addEventListener("resize", handleWindowResize);

     return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  },[]);

   
    

    return (
        <>
      {windowSize.innerWidth < 1024 ? <MobileHeader/> : <LargeHeader />}
      </>
    )
}

export default BothHeaders
