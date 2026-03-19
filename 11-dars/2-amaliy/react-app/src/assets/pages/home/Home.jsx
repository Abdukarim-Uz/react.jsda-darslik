import React from 'react'

import './home.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const exit = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>home page</h3>
            <button onClick={exit} className='btn-icon' >
                <BsBoxArrowInLeft className='exit-icon' />
                <h2>ortga</h2>
            </button>
        </div>
    )
}

export default Home