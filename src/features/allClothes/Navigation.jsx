'use client'


import { usePathname, useSearchParams } from "next/navigation"

import BackToAPage from "./BackToAPage"
import { useEffect } from "react";

function Navigation() {

    const currentPath = usePathname()
    const path = currentPath.replaceAll("%20"," ").split("/")

    let noNumberInPath;

    if(path.length === 2) noNumberInPath = path;

    //doing this to remove the dress id from the link
    if(path.length > 2)
    noNumberInPath = path.filter((el,i) => i !== (path.length)-1 )

    //console.log(noNumberInPath)
    
    const pathArr = noNumberInPath.map((el) => el === '' ? "/" : `/${el}`)
    //console.log(pathArr)

    // const searchParam = useSearchParams();
    // const page = searchParam.get("page")
    
    
    // useEffect(function(){
    //     if(page !== null)
    //     localStorage.setItem("p",page)
    // },[page])
  
    // let lastVisitedPage;
    // if(page === null){
    //     const get = localStorage.getItem("p");
    //     lastVisitedPage = JSON.parse(get)
    // }
    
    
    
    //const pathInsertHome = currentPath.replace("/","home/")
    // const path = currentPath.replaceAll("/"," > ").replaceAll("%20"," ").replaceAll('209',"")

    // const testArray = path.split(" > ")

    // let arr = []

    // if(testArray.length === 2) arr.push("/");
    // if(testArray.length === 4 ) arr.push('/',`/${testArray[1]}?page=${lastVisitedPage}`);



//    for(let i = 0 ; i < testArray.length - 1 ; i++){

    
//     if(testArray[i] !== ""  ) {
        
//        if(testArray.length === 1)  arr.push("/");
//         if(testArray.length === 2 ) arr.push(`/${testArray[i]}`)
//         if(testArray.length >= 3 ) arr.push(`/${testArray[i]}/${testArray[i + 1]}`)
//     }
    

//    }

//   const arr = testArray.filter((el,i) => el !== "").map((el,i) => el + el.at(i + 1))

   //console.log(arr)
  //console.log(testArray)

  
    
    return (
        <div  className={`  ${pathArr.length > 2 ? 'px-2 py-4 md:px-[2rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]':'pl-4 pt-2' } mt-1  md:mt-4 md:mb-4`}>
            {
                  pathArr.map((el,i) => <BackToAPage key={Math.random()} el={el} i={i} 
                  lastItem={pathArr.length}/>)
            }
        </div>
    )
}

export default Navigation
