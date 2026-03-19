import { FaHeart, FaTrash } from 'react-icons/fa6'
import './basket.css'
import { useNavigate } from 'react-router-dom'

function Basket({ sevimlilar, setSevimlilar, basket, setBasket }) {
    const navigate = useNavigate()
    const removeItem = (id) => {
        const filterdItem = basket.filter(item => item.id !== id)
        setBasket(filterdItem)
    }
    const addsevimlilar = (id) => {
        const FindItem = basket.find(item => item.id === id)
        setSevimlilar([...sevimlilar, FindItem])
        navigate('/sevimlilar')
    }
    return (
        <div className='basket' >
            {
                basket.map(item => (

                    <div key={item.id} className="basket-card">
                        <div className="like" onClick={() => addsevimlilar(item.id)} >
                            <FaHeart className='like-icon' />
                        </div>
                        <img src={item.rasmLink} alt={item.nom} />
                        <h4> nomi: {item.nom}</h4>
                        <h4>miqdor: {item.miqdor}</h4>
                        <h4> narx: {item.narx}</h4>
                        <div className="info">

                            <h5>{item.info}</h5>
                        </div>
                        <button onClick={() => removeItem(item.id)} ><FaTrash className='trash-card' /></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Basket