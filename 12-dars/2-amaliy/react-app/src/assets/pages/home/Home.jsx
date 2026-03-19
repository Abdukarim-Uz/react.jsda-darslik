import { FaBasketShopping, FaHeart } from 'react-icons/fa6'
import './home.css'
import { useNavigate } from 'react-router-dom'

function Home({ sevimlilar, setSevimlilar, basket, setBasket, newProducts, setNewProducts }) {
    const navigate = useNavigate()
    const addBasket = (id) => {
        const FindItem = newProducts.find(item => item.id === id)
        setBasket([...basket, FindItem])
        navigate('/basket')
    }
    const addsevimlilar = (id) => {
        const FindItem = newProducts.find(item => item.id === id)
        setSevimlilar([...sevimlilar, FindItem])
        navigate('/sevimlilar')
        console.log(sevimlilar)
    }
    return (
        <div className='home' >
            {
                newProducts.map((item, index) => (

                    <div key={item.id} className="card">
                        <div className="like" onClick={() => addsevimlilar(item.id)} >
                            <FaHeart className='like-icon' />
                        </div>
                        <img src={item.rasmLink} alt="tabiat" />
                        <h4> nomi: {item.nom}</h4>
                        <h4>miqdor: {item.miqdor}</h4>
                        <h4> narx: {item.narx}</h4>
                        <div className="info">

                            <h5>{item.info}</h5>
                        </div>
                        <button onClick={() => addBasket(item.id)}  ><FaBasketShopping className='shopping' /></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home