import React, { useState } from 'react'

import '../login/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid/non-secure'

function Login({ users, setUsers }) {

    const navigate = useNavigate()

    const [ism, setIsm] = useState("")
    const [tel, setTel] = useState("")


    const add = (event) => {
        event.preventDefault();

        const dataobj = {
            id: nanoid(5),
            ism: ism,
            tel: tel
        }
        setUsers([...users, dataobj])
        navigate('/userpage')
        setIsm("")
        setTel("")
        // console.log(users)


    }


    return (
        <div className='login' >
            <form onSubmit={add}  >
                <input
                    type="text"
                    required
                    placeholder='ismingizni kiriting iltimos...'
                    name='ism'
                    value={ism}
                    onChange={(e) => setIsm(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder='telingizni kiriting iltimos...'
                    name='tel'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />


                <p><input type="checkbox" required /> foydalanuvchi shartlarga rozi bo'lish</p>

                <button>kirit</button>


            </form>
        </div>
    )
}

export default Login