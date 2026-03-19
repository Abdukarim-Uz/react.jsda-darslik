import { NavLink, useSearchParams } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
import Loader from '../loader/Loader'

function Navbar() {
    const [hidden, setHidden] = useState(false)

    const show = () => {
        setHidden(true)
        setTimeout(() => {
            setHidden(false)
        })
    }

    return (
        <>
            {hidden ? <Loader /> : null}
            <div className='navbar' >
                <NavLink onClick={show} to={'/'} >

                    Asosiy
                </NavLink>
                <NavLink onClick={show} to={'/kinolar'} >
                    Kinolar
                </NavLink>
            </div>
        </>
    )
}

export default Navbar