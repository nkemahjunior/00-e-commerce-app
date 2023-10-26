function AddDresses() {
    return (
        <div className="px-2 md:pl-4 md:flex justify-center">
           

            <form action="" className="space-y-3">


            <h1 className="uppercase text-2xl font-light">add a new dress</h1>

                <div className="flex flex-col ">
                    <label htmlFor="name">cloth name </label>
                    <input type="text" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="price">price </label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>
                

                
                <div className="flex flex-col ">
                    <label htmlFor="qty">total QTY </label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>
                
                <div className="flex flex-col ">
                    <label htmlFor="type">dress type </label>
                   <select name="type" id="" className="outline-none border-2 border-solid border-black">
                        <option value="casual">casual</option>
                        <option value="formal">formal</option>
                        <option value="gym">gym</option>
                        <option value="party">party</option>
                   </select>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="image">Image of dress </label>
                    <input type="file" className="outline-none border-2 border-solid border-black" />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="xs">Qty of xs available </label>
                    <input type="xs" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="s">Qty of s available </label>
                    <input type="s" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="m">Qty of m available </label>
                    <input type="m" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="l">Qty of l available </label>
                    <input type="l" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div className="flex flex-col ">
                    <label htmlFor="xl">Qty of xl available </label>
                    <input type="xl" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div className="flex flex-col ">
                    <label htmlFor="2xl">Qty of 2xl available </label>
                    <input type="2xl" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div className="flex flex-col ">
                    <label htmlFor="3xl">Qty of 3xl available </label>
                    <input type="3xl" className="outline-none border-2 border-solid border-black"/>
                </div>

                <button className="p-2 border-2 border-solid border-black w-full text center text-white bg-black font-bold lg:hover:scale-95">
                    add dress
                </button>

            </form>
        </div>
    )
}

export default AddDresses
