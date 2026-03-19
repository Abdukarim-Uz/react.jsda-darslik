import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar' >
            <NavLink to={'/'} >
                home
            </NavLink>
            <NavLink to={'/saralangan'} >
                saralangan
            </NavLink>
        </div>
    )
}

export default Navbar