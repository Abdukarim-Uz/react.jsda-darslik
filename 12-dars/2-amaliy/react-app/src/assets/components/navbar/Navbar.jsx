import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar({ hiddenAdmin }) {
    return (
        <div className='navbar' >
            <NavLink to={'/'} >
                home
            </NavLink>
            <div className="right-navbar">
                <NavLink to={'/basket'} >
                    basket
                </NavLink>
                <NavLink to={'/sevimlilar'} >
                    sevimlilar
                </NavLink>
                {
                    hiddenAdmin ? <NavLink to={'/admin'} >
                        admin
                    </NavLink> : null
                }

                <NavLink to={'/login'} >
                    login
                </NavLink>

            </div>
        </div>
    )
}

export default Navbar