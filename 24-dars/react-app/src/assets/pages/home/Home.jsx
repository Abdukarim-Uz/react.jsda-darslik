import { useContext, useEffect, useState } from "react"
import axios from "axios";
import ITemMap from "../../components/Maps/itemMap/ITemMap";

function Home() {


    const [products, setProducts] = useState([])

    async function getData() {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            setProducts(data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div className="w-[95%] flex-wrap text-white grid grid-cols-4 gap-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl p-10 rounded-2xl mx-auto" >
            {
                products.map((item) => (
                    <ITemMap key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Home