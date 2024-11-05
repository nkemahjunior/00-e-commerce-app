"use client";

import { useState } from "react";

function ShopThis() {
  const [slide, setSlide] = useState(false);

  function handleSlide() {
    setSlide((v) => !v);
  }
  return (
    <>
      <button
        className=" font-medium uppercase    "
        onMouseOver={handleSlide}
        onMouseLeave={handleSlide}
      >
        shop this
        <div
          className={`border-b border-b-black ${slide && "lg:animate-slide"}  `}
        ></div>
      </button>
    </>
  );
}

export default ShopThis;
