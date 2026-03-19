import { FaRegHeart, FaTrashAlt } from 'react-icons/fa'
import './basket.css'
import { FaBasketShopping } from 'react-icons/fa6'

function Basket({ sevimlilar, setSevimlilar, basket, setBasket }) {

    const removeItem = (id) => {
        const filtered = basket.filter(item => item.id !== id)
        setBasket(filtered)
    }
    const addItemInBasket = (id) => {
        const findItem = basket.find(item => item.id === id)
        setSevimlilar([...sevimlilar, findItem])

    }

    return (
        <div className='basket'>
            {
                basket.length === 0 ? <h2>ma'lumot topilmadi</h2> :

                    basket.map(item => (

                        <div key={item.id} className="card">
                            <div onClick={() => addItemInBasket(item.id)} className="like">
                                <FaRegHeart className='like-icon' />
                            </div>
                            <img src={item.url} alt={item.nom} />
                            <h4> nomi:   {item.nom}</h4>
                            <h4>miqdor:    {item.son}</h4>
                            <h4>narxi:    {item.narx}</h4>
                            <h4> description:   {item.about}</h4>
                            <button className='remove-btn' ><FaTrashAlt className='trash' onClick={() => removeItem(item.id)} /></button>
                        </div>
                    ))
            }
        </div>
    )
}

export default Basket