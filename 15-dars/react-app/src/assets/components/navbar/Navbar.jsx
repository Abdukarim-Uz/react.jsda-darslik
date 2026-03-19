import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar' >
        <NavLink to={'/'} >
            home
        </NavLink>
        <NavLink to={'/Movies-Shows'} >
            Movies & Shows
        </NavLink>
        <NavLink to={'/support'} >
            Support
        </NavLink>
        <NavLink to={'/subscriptions'} >
            Subscriptions
        </NavLink>
    </div>
  )
}

export default Navbar