





import { NavLink } from "react-router-dom"
import "./products.css"
import UserMap from "../../comnponents/userMap/UserMap"
import axios from "axios"
import { useEffect, useState } from "react"
import 'react-loading-skeleton/dist/skeleton.css'


function Products() {
    const [userdata, setUserdata] = useState([])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    async function getUser() {
        try {
            setLoading(true)
            const { data } = await axios.get("http://localhost:8000/talabalar");
            setUserdata(data)
        } catch (err) {
            setError("nimadir xato ketdi")
            console.log(error)
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getUser()
    }, [])

    const removeItem = (item) => {

    }
    return (
        <div className="products" >
            {
                userdata.map((item) => (

                    <UserMap removeItem={removeItem} loading={loading} key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Products