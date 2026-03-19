import { useEffect, useState } from 'react'
import ProductsMap from '../../components/productsMap/ProductsMap'
import './products.css'
import axios from 'axios'
import 'react-loading-skeleton/dist/skeleton.css';


function Products() {


    const [products, setProducts] = useState([])

    const [success, setSuccess] = useState(false)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState("")

    async function getdata() {
        setLoading(true)
        try {

            const responce = await axios.get("https://fakestoreapi.com/products")
            setProducts(responce.data)
            setSuccess(true)
        } catch (err) {
            console.log(err)
            setError("xatolik sodir bo'ldi !!")
        }
        finally {
            setLoading(false)

        }
    }


    useEffect(() => {
        getdata()
        console.log(products)
    }, [])

    // console.log("loading:", loading)
    // console.log("success:", success)
    // console.log("error:", error)


    return (
        <div className='products' >


            {
                products.map(item => (

                    <ProductsMap loading={loading} item={item} key={item.id} />
                ))
            }
        </div >
    )
}

export default Products