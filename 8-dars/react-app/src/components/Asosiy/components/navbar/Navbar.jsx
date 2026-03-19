import React from 'react'

import { NavLink } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <NavLink to="/"> Asosiy</NavLink>
            <NavLink to="/Kinolar">Kinolar</NavLink>
            <NavLink to="/Login">Login</NavLink>
        </nav>
    )
}

export default Navbar