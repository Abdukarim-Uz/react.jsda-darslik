import React from 'react'

import './card.css'
import { FaEdit, FaShoppingBag } from 'react-icons/fa'
import { productsdata } from '../../data/mahsulotlar/mahsulotlardata'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function Card({ bags, setBags }) {

    const navigate = useNavigate()

    const shopping = (item) => {
        const dataobj = {
            id: nanoid(5),
            title: item.title,
            price: item.price,
            category: item.category,
            description: item.description,
            image: item.image,
            rating: {
                rate: item.rating.rate,
                coutn: item.rating.count
            }
        }

        setBags([...bags, dataobj])

        navigate('/products')
    }



    return (
        <div className='card-box' >

            {
                productsdata.map((item) => (
                    <div className="card" key={item.id} >
                        <img src={item.image} alt={item.title} />
                        <h6>{item.title}</h6>
                        <div className="btns">
                            <button onClick={() => shopping(item)} ><FaShoppingBag className='bag' /></button>
                            <button><FaEdit className='edited' /></button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Card