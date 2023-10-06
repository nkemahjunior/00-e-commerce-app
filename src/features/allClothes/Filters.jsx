function Filters({show}) {
    return (
        <div className= {` ${show === true ? ' ' :'hidden'}
        absolute md:relative md:block border-solid border-red-600 border-4 h-[100vh] w-full md:w-[30%] lg:w-[20%]`}>
            <div >

            </div>
        </div>
    )
}

export default Filters
