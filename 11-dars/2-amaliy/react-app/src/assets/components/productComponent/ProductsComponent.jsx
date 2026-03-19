import React from 'react'

import './productComponent.css'
import { FaBasketShopping } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import { nanoid } from 'nanoid'

function ProductsComponent({ productsdata, item, basket, setBasket }) {

    const shopdata = (id) => {
        const shopItem = productsdata.find(item => item.id === id)

        const newdataobj = {
            id: nanoid(5),
            title: shopItem.title,
            image: shopItem.image
        }

        setBasket([...basket, newdataobj])
    }

    return (
        <div className='card'  >
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <div className="buttons">

                <button><FaBasketShopping className='shop' onClick={() => shopdata(item.id)} /></button>
                <button><FaEdit className='edit-shop' /></button>
            </div>
        </div>
    )
}

export default ProductsComponent