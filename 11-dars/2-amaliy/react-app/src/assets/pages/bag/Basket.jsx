import React from 'react'

import './Basket.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Basketmap from '../../components/basketMap/Basketmap'

function Basket({ basket, setBasket }) {

    const navigate = useNavigate()

    const exit = () => {
        navigate(-1)
    }

    return (
        <div className='basket-box' >


            {
                basket.map(item => (
                    <Basketmap key={item.id} basket={basket} setBasket={setBasket} item={item}  />
                ))
            }

            <button onClick={exit} className='btn-icon' >
                <BsBoxArrowInLeft className='exit-icon' />
                <h2>ortga</h2>
            </button>
        </div>
    )
}

export default Basket