import { useEffect, useState } from "react"
import ItemMap from "../../map/ItemMap/ItemMap"
import axios from "axios"

function Home() {

    const [products, setProducts] = useState([])

    async function getItem() {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            setProducts(data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div className="container min-h-30 h-auto border mx-auto mt-9 text-white p-7 " >
            <div className="w-full h-auto sm:grid-cols-1 md:grid-cols-2 gapx-3 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  grid grid-cols-5 " >
                {
                    products.map((item) => (
                        <ItemMap key={item.id} item={item} />
                    ))
                }
                {/* <div className="w-80 flex bg-white1 items-center flex-col justify-around cursor-pointer rounded-2xl *:cursor-pointer h-100 pt-5" >
                    <img src="" className="w-[90%] rounded-xl h-40 " />
                    <h4 className=" w-[90%]" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, magnam?</h4>
                    <button className=" w-[90%] rounded-xl bg-green-700 text-[20px] h-15">savatga</button>
                </div> */}
            </div>

        </div>
    )
}

export default Home