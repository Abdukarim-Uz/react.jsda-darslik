import React from 'react'

import './products.css'
import CardBox from '../../components/cardbox/CardBox'
import { GoSignIn } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function Products({ bags, setBags }) {
    const navigate = useNavigate(-1)

    const gotoback = ()=>{
        navigate(-1)
    }
    return (
        <div className='producst' >
            <CardBox bags={bags} setBags={setBags} />
            <button className='button'  onClick={gotoback} > <GoSignIn fill='white' /> <h6>ortga</h6></button>
        </div>
    )
}

export default Products