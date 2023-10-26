function AddDresses() {
    return (
        <div className="md:pl-4">
            <h1 className="uppercase text-2xl font-light">add a new dress</h1>

            <form action="" className="space-y-3">

                <div>
                    <label htmlFor="name">cloth name </label>
                    <input type="text" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div>
                    <label htmlFor="price">price </label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>
                

                
                <div>
                    <label htmlFor="qty">total QTY </label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>
                
                <div>
                    <label htmlFor="type">dress type </label>
                   <select name="type" id="" className="outline-none border-2 border-solid border-black">
                        <option value="casual">casual</option>
                        <option value="formal">formal</option>
                        <option value="gym">gym</option>
                        <option value="party">party</option>
                   </select>
                </div>

                <div>
                    <label htmlFor="image">Image of dress </label>
                    <input type="file" className="outline-none border-2 border-solid border-black" />
                </div>

                <div>
                    <label htmlFor="xs">Qty of xs available </label>
                    <input type="xs" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div>
                    <label htmlFor="s">Qty of s available </label>
                    <input type="s" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div>
                    <label htmlFor="m">Qty of m available </label>
                    <input type="m" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div>
                    <label htmlFor="l">Qty of l available </label>
                    <input type="l" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div>
                    <label htmlFor="xl">Qty of xl available </label>
                    <input type="xl" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div>
                    <label htmlFor="2xl">Qty of 2xl available </label>
                    <input type="2xl" className="outline-none border-2 border-solid border-black"/>
                </div>

                
                <div>
                    <label htmlFor="3xl">Qty of 3xl available </label>
                    <input type="3xl" className="outline-none border-2 border-solid border-black"/>
                </div>

            </form>
        </div>
    )
}

export default AddDresses
