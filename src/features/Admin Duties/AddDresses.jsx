function AddDresses() {
    return (
        <div >
            <h1 className="uppercase text-2xl font-light">add dresses to new arivals</h1>

            <form action="">

                <div>
                    <label htmlFor="name"></label>
                    <input type="text" className="outline-none border-2 border-solid border-black"/>
                </div>

                <div>
                    <label htmlFor="price"></label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>
                
                <div>
                    <label htmlFor="price"></label>
                    <input type="number" className="outline-none border-2 border-solid border-black"/>
                </div>

            </form>
        </div>
    )
}

export default AddDresses
