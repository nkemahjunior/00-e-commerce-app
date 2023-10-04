'use client'

import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";




function BothHeaders() {

  function getWindowSize() {

    if(window === 'undefined') return;
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowsize] = useState(0);

  useEffect(() => {
    if (window==='undefined') return(<p>loading window</p>)
    else handleWindowResize()
      
      function handleWindowResize() {
          
          setWindowsize(getWindowSize())
        }
    

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  },[]);

   
    if(windowSize.innerWidth === 0) return (<p>window is null....</p>)

    return (
        <>
      {windowSize.innerWidth < 768 ? <MobileHeader /> : <LargeHeader />}
      </>
    )
}

export default BothHeaders
