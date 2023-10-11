function Filters({show}) {
    return (
        <div className= {` ${show === true ? ' ' :'hidden'}
        absolute
         bg-white md:relative md:block border-solid border-red-600 border-4 h-[100%] w-full md:w-[30%] lg:w-[20%] z-10 p-4`}>
            <div >
                <h1 className="capitalize font-bold text-2xl ">filters</h1>

                <hr className="w-[100%] bg-stone-700 mt-2   mb-2 "/>

                <h2 className="capitalize font-bold ">dress style</h2>

                <ul >
                    <li className="capitalize">casual</li>
                    <li  className="capitalize">Formal</li>
                    <li className="capitalize">Party</li>
                    <li className="capitalize">Gym</li>
                </ul>

                <div className="mt-2">
                    <label htmlFor="sort price">sort by price</label>

                    <select name="sort" id="sort">
                        <option value="Highest">from highest</option>
                        <option value="Lowest">from lowest</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Filters
