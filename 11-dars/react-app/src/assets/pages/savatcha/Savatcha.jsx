import React from 'react'

import './savatcha.css'
import { FaTrashCan } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import { GoSignIn } from 'react-icons/go'
import Trashedmap from '../../components/trashedmaps/Trashedmap'
import { useNavigate } from 'react-router-dom'

function Savatcha({ trasheds,setTrasheds }) {

    const navigate = useNavigate(-1)

    const gotoSignIn = () => {
        navigate(-1)
    }


    return (
        <div className='savatcha' >

            <Trashedmap trasheds={trasheds} setTrasheds={setTrasheds} />

            <button className='btn' onClick={gotoSignIn} > <GoSignIn fill='white' /> <h6>ortga</h6></button>

        </div >
    )
}

export default Savatcha