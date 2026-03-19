import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar' >
            <NavLink to={'/'} >
                asosiy
            </NavLink>
            <div className="right_navbar">

                <NavLink to={'/basket'} >
                    basket
                </NavLink>
                <NavLink to={'/sevimlilar'} >
                    sevimlilar
                </NavLink>
                <NavLink to={'/admin'} >
                    admin
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar