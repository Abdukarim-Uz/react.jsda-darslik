import { CiCreditCard1, CiStar } from 'react-icons/ci'
import './home.css'
import { FaHeart, FaShoppingBag, FaStar } from 'react-icons/fa'
import { Mahsulotlar } from '../../data/mahsulotlar'
function Home({ basketPrducts, setBasketProducts, setLikeProducts, likeProducts, setHiddenbtn, counterShop, setCountershop, hiddenbutton, setHiddenbutton }) {

    const addShopp = (item) => {
        if (Mahsulotlar.id === item.id) {
            return
        }
        setHiddenbutton(true)


    }

    const addProduct = () => {
        setCountershop(counterShop + 1)
    }

    const removeProduct = () => {
        if (counterShop === 0) {
            setHiddenbutton(false)
            setHiddenbtn(false)
            return
        }
        setCountershop(counterShop - 1)

    }
    const addlikeProducts = (item) => {
        setLikeProducts([...likeProducts, item])
    }


    const addbasket = (item) => {

        setBasketProducts([...basketPrducts, item])
    }
    return (
        <div className='home' >
            {
                Mahsulotlar.map(item => (
                    <div key={item.id} className="card">
                        <div className="like">
                            <FaHeart className='heart-icon' onClick={() => addlikeProducts(item)} />
                        </div>
                        <img src={item.rasmi} alt={item.nomi} />
                        <div className="product-about">
                            <span><h5 >{item.narxi} </h5><CiCreditCard1 className='card-icon' /></span>
                            <h6>{item.narxi}</h6>
                            <p>{item.nomi} </p>
                            <div className="card-footer">
                                <FaStar className='star' />
                                <h6>{item.rating}</h6>
                            </div>
                            {

                                hiddenbutton ? <div className="add">
                                    <button className='minus' onClick={removeProduct}  >-</button>
                                    <p>{counterShop}</p>
                                    <button className='minus' onClick={addProduct} >+</button>
                                </div> : <button className="btn-add" onClick={() => addShopp(item)} ><FaShoppingBag onClick={() => addbasket(item)} className='card-shop-icon' /> ertaga</button>
                            }


                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Home