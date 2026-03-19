import axios from 'axios'
import ProductsMap from '../../components/productMap/ProductsMap'
import './products.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
function Products({ likeProducts, setLikeProducts }) {

    const [copyProductsData, setCopyProductsData] = useState([])
    async function getProductsData() {
        try {
            const responce = await axios.get("https://fakestoreapi.com/products");
            setCopyProductsData(responce.data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getProductsData()
    }, [])


    const addItemsevimlilar = (item) => {
        const checkItem = likeProducts.some(element => element.id === item.id)
        if (checkItem) {
            toast.warn("siz bu mahsulotni qo'shdingiz !!")
        } else {
            toast.success("bu mahsulotni qo'shdingiz !!")
            setLikeProducts([...likeProducts, item])
            console.log(likeProducts)
        }
    }

    return (
        <div className='products' >
            {
                copyProductsData.map(item => (

                    <ProductsMap addItemsevimlilar={addItemsevimlilar} key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Products