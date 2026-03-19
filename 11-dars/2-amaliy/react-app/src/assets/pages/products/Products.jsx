import React from 'react'

import './products.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import ProductsComponent from '../../components/productComponent/ProductsComponent'

function Products({ productsdata, basket, setBasket }) {


    const navigate = useNavigate()

    const exit = () => {
        navigate(-1)
    }

    return (
        <div className='product-box' >
            {
                productsdata.map(item => (

                    <ProductsComponent basket={basket} setBasket={setBasket} item={item} productsdata={productsdata} key={item.id} />
                ))
            }

            <button onClick={exit} className='btn-icon' >
                <BsBoxArrowInLeft className='exit-icon' />
                <h2>ortga</h2>
            </button>
        </div>
    )
}

export default Products