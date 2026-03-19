import React from 'react'

import './basketmap.css'
import { FaBasketShopping } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function Basketmap({ basket, setBasket, item }) {

    const shopdel = (id) => {
        const findDelItem = basket.filter(item => item.id !== id)
        setBasket( findDelItem)
    }

    return (
        <div className='card'  >
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <div className="buttons">
                <button><MdDelete className='shop-del' onClick={() => shopdel(item.id)} /></button>
                <button><FaEdit className='edit-shop' /></button>
            </div>
        </div>
    )
}

export default Basketmap