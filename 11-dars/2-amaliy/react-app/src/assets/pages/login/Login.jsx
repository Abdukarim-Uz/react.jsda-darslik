import React, { use } from 'react'

import './login.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const exit = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className="login-form">
        <form >
          <input
            type="text"
            placeholder='ismni kiriting...'
            required
            name='ism'
          />
          <input
            type="text"
            required
            placeholder='telefon raqamingizni kiriting...'
            name='tel' />
            <p>agar ro'yxatdan o'tmagan bo'lsangiz unda ro'yxatdan o'ting              
              <NavLink to={'/register'} >
                  register
            </NavLink></p>
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

export default Login