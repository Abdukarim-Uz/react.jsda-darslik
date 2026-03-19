import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar({ numberArray }) {


    return (
        <div className='navbar' >
            <NavLink to={'/'} >
                home
            </NavLink>
            <NavLink to={'/users'} >
                users
            </NavLink>
            <NavLink to={'/products'} >
                products
            </NavLink>
            
            <NavLink to={'/basket'} >
                basket {numberArray.length === 0 ? " " : numberArray.reduce((a, b) => a + b, 0)}
            </NavLink>
            <NavLink to={'/sevimlilar'} >
                sevimlilar
            </NavLink>
        </div>
    )
}

export default Navbar