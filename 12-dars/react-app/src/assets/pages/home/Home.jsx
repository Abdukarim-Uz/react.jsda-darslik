import { FaRegHeart } from 'react-icons/fa'
import './home.css'
import { FaBasketShopping } from 'react-icons/fa6'

function Home({ setSevimlilar, sevimlilar, products, basket, setBasket }) {

    const addShop = (id) => {
        const findItem = products.find(item => item.id === id)

        setBasket([...basket, findItem])



    }
    const addfavorite = (id) => {
        const findItem = products.find(item => item.id === id)

        setSevimlilar([...sevimlilar, findItem])


    }

    return (
        <div className='home' >

            {
                products.length === 0 ? <h2>ma'lumot topilmadi</h2> :

                    products.map(item => (

                        <div key={item.id} className="card">
                            <div onClick={() => addfavorite(item.id)} className="like">
                                <FaRegHeart className='like-icon' />
                            </div>
                            <img src={item.url} alt={item.nom} />
                            <h4> nomi:   {item.nom}</h4>
                            <h4>miqdor:    {item.son}</h4>
                            <h4>narxi:    {item.narx}</h4>
                            <h4> description:   {item.about}</h4>
                            <button onClick={() => addShop(item.id)} ><FaBasketShopping className='shop' /></button>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home