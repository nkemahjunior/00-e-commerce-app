'use client'

import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";


// function getWindowSize() {
//     const { innerWidth, innerHeight } = window;
//     return { innerWidth, innerHeight };
//   }

function BothHeaders() {

    const [windowSize, setWindowsize] = useState(null);

    useEffect(() => {

        
      function handleWindowResize() {
        if(window.innerWidth )
        setWindowsize(innerWidth)
      }
  
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    });


    return (
        <>
      {windowSize < 768 ? <MobileHeader /> : <LargeHeader />}
      </>
    )
}

export default BothHeaders
