import { FaStar, FaTrash } from "react-icons/fa"
import { FaShop } from "react-icons/fa6"
import { FcLike } from "react-icons/fc"
import { Link } from "react-router-dom"


function SevimlilarMap({ removeSevimlilarItem, item }) {
    return (
        <div>
            <div className="card">
                <div onClick={() => removeSevimlilarItem(item)} className="like">
                    <FaTrash fill="royalblue" />

                </div>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <h4>{item.price}$</h4>
                <h4>{item.rating.rate} <FaStar fill="rgb(180, 177, 2)" />
                    <FaStar fill="rgb(180, 177, 2)" />
                    <FaStar fill="rgb(180, 177, 2)" />
                    <FaStar fill="rgb(180, 177, 2)" /></h4>
                <Link to={`/detail/${item.id}`} >
                    <button  > <FaShop /> batafsil </button>
                </Link>
            </div>
        </div>
    )
}

export default SevimlilarMap