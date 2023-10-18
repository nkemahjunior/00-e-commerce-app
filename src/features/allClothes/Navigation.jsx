'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

function Navigation() {

    const currentPath = usePathname()
    const router = useRouter()
    
    const pathInsertHome = currentPath.replace("/","home/")
    const path = pathInsertHome.replaceAll("/"," > ").replaceAll("%20","_").replaceAll('209',"")

    const testArray = path.split(" > ")

    let arr = []
   for(let i = 0;i < testArray.length; i++){
    arr.push({ arr:testArray[i] + "/" + testArray[i+1]  })
   }

   console.log(arr)


    function handleTest(){
        router.replace("/test")
    }


    return (
        <div className="border-solid border-teal-500 border-4 p-2">
            {path
            }


            <div className="space-x-4 flex">
                            <button>test next</button>
                        <button onClick={handleTest}>test backward</button>
            </div>

        </div>
    )
}

export default Navigation
