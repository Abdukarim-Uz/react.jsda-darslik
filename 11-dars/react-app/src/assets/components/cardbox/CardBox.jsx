import React from 'react'

import './cardBox.css'
import { FaEdit, FaShoppingBag, FaTrashAlt } from 'react-icons/fa'


function CardBox({ bags, setBags }) {

    const rempoved = (id) => {
        const filtered = bags.filter(item => item.id !== id)
        setBags(filtered)
    }

    return (
        <div className='card-box' >

            {
                bags.map((item) => (
                    <div className="card-boxed" key={item.id} >
                        <img src={item.image} alt={item.title} />
                        <h6>{item.title}</h6>
                        <div className="btnsed">
                            <button onClick={() => rempoved(item.id)} ><FaTrashAlt className='baged' /></button>

                        </div>
                    </div>

                ))
            }

        </div>

    )
}

export default CardBox