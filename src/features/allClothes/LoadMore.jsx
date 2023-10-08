
'use client'

function LoadMore() {

    function loadMore(){
        console.log("okay")
    }
    
    return (
        <button className=" font-bold border-2 border-solid p-2 " onClick={loadMore}>
            Load more
        </button>
    )
}

export default LoadMore
