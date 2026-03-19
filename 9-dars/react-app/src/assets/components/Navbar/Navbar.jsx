import React from 'react'

import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink  to="/" >home</NavLink>
      <NavLink to="/product" >product</NavLink>
      <NavLink to="/kinolar">Kinolar</NavLink>
      <NavLink to="/login" >Login</NavLink>

    </div>
  )
}

export default Navbar