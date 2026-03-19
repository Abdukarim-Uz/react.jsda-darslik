import React from 'react'
import "./navbar.css"
import icon from "../../assets/icons/icon.svg"
import user from "../../assets/icons/user.png"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="icons">

                <img style={{ width: "35px", height: "35px" }} src={icon} alt="" />
                <h1>Blog</h1>
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Blog Tutorial</a>
                <a href="#">About Me</a>
                <a href="#">Contact Me</a>
            </div>
            <div className="login-sign">
                <a href="#">Sign in</a>
                <a href="#">Login</a>
                <img src={user}  />

            </div>
        </div>
    )
}

export default Navbar