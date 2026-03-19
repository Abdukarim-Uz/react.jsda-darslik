import React, { use, useState } from 'react'

import './register.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function Register({ users, setUsers }) {

    const navigate = useNavigate()

    const [userIsm, setUserIsm] = useState()
    const [userTel, setUserTel] = useState()

    const exit = () => {
        navigate(-1)
    }

    const createDataObj = (event) => {
        event.preventDefault();
        const dataobj = {
            id: nanoid(5),
            ism: userIsm,
            tel: userTel
        }
        setUsers([...users, dataobj])

    }

    console.log(users)

    return (
        <div>
            <div className="register-form">
                <form onSubmit={createDataObj}>
                    <input
                        type="text"
                        placeholder='ismni kiriting...'
                        required
                        name='ism'
                        onChange={(e) => setUserIsm(e.target.value)}
                    />
                    <input
                        type="text"
                        required
                        placeholder='telefon raqamingizni kiriting...'
                        name='tel'
                        onChange={(e) => setUserTel(e.target.value)} />

                    <div className="btns">

                        <input type="checkbox" required />
                        <p>
                            foydalanuvchi shartlariga rozi bo'lish
                        </p>
                    </div>
                    <button>kiriting</button>
                </form>
            </div>
            <button onClick={exit} className='btn-icon' >
                <BsBoxArrowInLeft className='exit-icon' />
                <h2>ortga</h2>
            </button>
        </div>
    )
}

export default Register