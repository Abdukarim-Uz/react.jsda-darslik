
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar' >
            <NavLink to={'/'} >home</NavLink>
            <NavLink to={'/kinolar'} > kinolar</NavLink>
            <NavLink to={'/login'} >login</NavLink>


        </div>
    )
}

export default Navbar