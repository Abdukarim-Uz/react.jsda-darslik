import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar' >
            <NavLink to={'/'} >
                home
            </NavLink>
            <NavLink to={'/products'} >
                products
            </NavLink>
            <NavLink to={'/basket'} >
                basket
            </NavLink>
            <NavLink to={'/sevimlilar'} >
                favorites
            </NavLink>
        </div>
    )
}

export default Navbar