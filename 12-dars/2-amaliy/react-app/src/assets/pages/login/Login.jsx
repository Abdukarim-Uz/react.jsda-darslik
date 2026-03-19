import { useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

function Login({ login, password, setHiddenAdmin }) {
    const navigate = useNavigate()

    const [formLogin, setFormLogin] = useState()

    const [formPassword, setFormPassword] = useState()


    const toHome = (event) => {
        event.preventDefault();

        if (formLogin === login && formPassword === password) {
            setHiddenAdmin(true)
            navigate('/admin')
        } else {

            navigate('/')
        }



    }
    return (
        <div className='login' >
            <form onSubmit={toHome} >
                <input
                    type="text"
                    required
                    placeholder='login....'
                    name='login'
                    onChange={(e) => setFormLogin(e.target.value)} />
                <input
                    type="text"
                    required
                    placeholder='password....'
                    name='password'
                    onChange={(e) => setFormPassword(e.target.value)} />
                <button>kirit</button>
            </form>
        </div>
    )
}

export default Login