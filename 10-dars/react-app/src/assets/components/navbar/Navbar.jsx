
import { NavLink } from 'react-router-dom'
import './navbar.css'


function Navbar() {
    return (
        <div className='navbar' >

            <NavLink to={'/'} >
                Home
            </NavLink>

            <NavLink to={'/kinolar'}  >
                kinolar
            </NavLink>

            <NavLink to={'/login'} >
                login
            </NavLink>

            {/* <h1>home</h1>
        <h1>kinolar</h1>
        <h1>login</h1> */}
        </div>
    )
}

export default Navbar