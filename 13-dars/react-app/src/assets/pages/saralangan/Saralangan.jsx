import Lottie from 'lottie-react'
import cat from '../../lottie/Cat feeling love emotionsexpression. Emojisticker animation.json'
import './saralangan.css'
import { useNavigate } from 'react-router-dom'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { useState } from 'react'

function Saralangan({ likeProducts, setCountershop, counterShop, setHiddenbtn, hiddenbtn, hiddenbutton, setHiddenbutton }) {
    const addShopp = () => {
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

    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }

    return (
        <>{
            likeProducts.length === 0 ? <div className='saralangan' >
                <Lottie
                    className='cat-animation'
                    animationData={cat}
                    loop={true}
                    autoPlay={true} />

                <h1>Bu yerda sevimli tovarlaringizni saqlab qoʻyamiz </h1>
                <p>Odatda buyurtma qiladigan yoki keyinroq sotib olishni istagan tovarlarda ♡ belgisini bosing</p>
                <button onClick={toHome} >bosh sahifa</button>
            </div> :
                <div className="saralangan-box">
                    {
                        likeProducts.map(item => (

                            <div key={item.id} className="card">
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

                                        hiddenbtn || hiddenbutton ? <div className="add">
                                            <button className='minus' onClick={removeProduct}  >-</button>
                                            <p>{counterShop}</p>
                                            <button className='minus' onClick={addProduct} >+</button>
                                        </div> : <button className="btn-add" onClick={addShopp} ><FaShoppingBag className='card-shop-icon' /> ertaga</button>
                                    }


                                </div>
                            </div>
                        ))
                    }
                </div>
        }
        </>

    )
}

export default Saralangan