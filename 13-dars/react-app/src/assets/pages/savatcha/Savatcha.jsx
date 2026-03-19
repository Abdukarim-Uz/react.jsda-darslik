import Lottie from 'lottie-react'
import basket from '../../lottie/Shopping Cart Loader.json'
import './savatcha.css'
import { useNavigate } from 'react-router-dom'
import { FaCar, FaCreditCard, FaTrash, FaTruck } from 'react-icons/fa'
import { CiCircleQuestion } from 'react-icons/ci'

function Savatcha({ basketPrducts }) {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }

    return (
        <>{
            basketPrducts.length === 0 ? <div className='savatcha' >
                <Lottie
                    animationData={basket}
                    loop={true}
                    autoplay={true} className='shopping-animation' />
                <h1>Savatingiz hozircha bo‘sh</h1>
                <p>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
                <button onClick={toHome} >Bosh sahifa</button>
            </div> :

                <div className="savatcha-banner">
                    <div className="text">

                        <h2 className='h2' >Savatingiz,  </h2>
                        <h3 className='h3' >1 mahsulot</h3>
                    </div>
                    <div className="mahsulot-haqida">
                        <div className="mahsulot">
                            <div className="check">
                                <input className='check-input' type="checkbox" />
                                <h3>hammasini yechish</h3>
                            </div>
                            <div className="malumot">
                                <div className="title">
                                    <h4>Uzum Market yetkazib berish</h4>
                                    <h2>Ertaga yetkazib beramiz</h2>
                                </div>
                                {
                                    basketPrducts.map(item => (

                                        <div key={item.id} className="malumot-text">
                                            <div className="img">
                                                <input type="checkbox" />
                                                <img src={item.rasmi} alt={item.nomi} />
                                            </div>
                                            <div className="text-two">
                                                <div className="text-titel">
                                                    <h4>{item.qisqa_malumot}</h4>
                                                </div>
                                                <div className="text-main">
                                                    <div className="text-main-left">
                                                        <h4 className='xira' >Sotuvchi:</h4> <h5>{item.sotuvchi}</h5>
                                                        <h4 className='xira' >Rang: </h4> <h5>{item.rang}</h5>
                                                    </div>
                                                    <div className="text-main-right">
                                                        <button>-</button>
                                                        <h5>1</h5>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="malumot-text-right">
                                                <span className='malumot-text-right-title' > <FaTrash className='trash-icon' /> <button>yo'q qilish</button></span>
                                                <span className='summa' >{item.narxi - 1500000} so'm <FaCreditCard className='card-icon' /></span>
                                                <span className='info' > uzum kartasiz {item.narxi} so'm </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="kuryer">

                            <div className="punkt">
                                <FaTruck className='truck-icon' />
                                <div className="kuryer-title">
                                    <h4>Topshirish punktiga bepul</h4>
                                    {
                                        basketPrducts.reduce((sum, item) => {
                                            // item.narxi string bo'lsa, raqamga o'tkazamiz va bo'sh joylarni olib tashlaymiz
                                            return sum + Number(item.narxi);
                                        }, 0)
                                    }
                                </div>
                                <CiCircleQuestion className='qustion-icon' />
                            </div>
                            <div className="buyurtma">
                                <div className="buyurtma-left">
                                    <h3 className='buyurtma-soni' >Buyurtangiz</h3>
                                    <h4 className='son' >Mahsulotlar (1):</h4>
                                    <h3 className='buyurtma-soni' >Jami</h3>
                                    <h4 className='son' >Uzum karta bilan</h4>
                                    <h4 className='son' >Uzum kartasiz </h4>

                                </div>


                                <div className="buyurtma-right">
                                    {basketPrducts.map(item => (
                                        <>
                                            < h4 className='son' >{item.id}</h4>
                                        </>
                                    ))}
                                    <h4 className='narx' > {
                                        basketPrducts.reduce((sum, item) => { sum + Number(item.narxi) }, 0)
                                    } so'm</h4>
                                    {
                                        basketPrducts.reduce((sum, item) => (

                                            <h6 className='tejov' >Tejovingiz: {sum + Number(item.narxi) - 1500000} so'm</h6>
                                        ))
                                    }

                                    {
                                        basketPrducts.reduce((sum, item) => (

                                            <h4 className='son' >{sum + Number(item.narxi) - 1500000} so'm </h4>
                                        ))
                                    }


                                </div>

                                <button className='rasmiylashtirish' >Rasmiylashtirish</button>
                            </div>
                        </div>
                    </div>
                </div >
        }
        </>

    )
}

export default Savatcha