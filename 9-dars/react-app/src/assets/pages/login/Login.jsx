import React from 'react'

import './login.css'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className='container' >

        


            <form >
                <label htmlFor="user_name">
                    <h4>Login</h4>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder='iltimos loginni kiriting'
                        required
                    />
                </label>

                <label htmlFor="parol">
                    <h4>password</h4>
                    <input
                        type="text"
                        name='parol'
                        id='parol'
                        placeholder='parolni kiriting'
                        required
                    />
                </label>

                <p>Agar siz login parol bo'lmasa,     <NavLink to="/register" >   Register   </NavLink>      sahifasiga o'ting!</p>

                <button>kirish</button>
            </form>
        </div>
    )
}

export default Login