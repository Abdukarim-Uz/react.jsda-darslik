import { FaStar, FaTrash } from "react-icons/fa"
import { FcLike } from "react-icons/fc"

function BasketMap({ item, removeItem, addSevimlilarItem }) {
    return (
        <div className="card">
            <div onClick={() => addSevimlilarItem(item)} className="like">
                <FcLike className="like-icon" />
            </div>
            {/* Mahsulot rasmi */}
            <img src={item.image} alt={item.title} />

            {/* Mahsulot nomi */}
            <h4>{item.title}</h4>

            {/* Mahsulot narxi */}
            <h4>{item.price}$</h4>

            {/* Mahsulot reytingi */}
            <h4>
                {item.rating.rate}
                <FaStar fill="rgb(180, 177, 2)" />
                <FaStar fill="rgb(180, 177, 2)" />
                <FaStar fill="rgb(180, 177, 2)" />
                <FaStar fill="rgb(180, 177, 2)" />
            </h4>

            {/* Savatchadan o‘chirish tugmasi */}
            <button onClick={() => removeItem(item.id)} >
                <FaTrash />
            </button>
        </div>
    )
}

export default BasketMap
