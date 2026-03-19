import React from 'react'

import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login' >
            <form>
                <input
                    type="text"
                    required
                    placeholder='ismingizni kiriting iltimos...'
                    name='ism' />
                <input
                    type="text"
                    required
                    placeholder='telingizni kiriting iltimos...'
                    name='tel' />


                <p>agar registerdan o'tmagan bo'lsangiz <Link to={'/register'} >register</Link> ro'yhatdan o'ting</p>

                <button>kirit</button>


            </form>
        </div>
    )
}

export default Login