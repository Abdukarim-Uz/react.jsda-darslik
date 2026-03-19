import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">My Blog</div>
            <ul className="nav-links">
                <li><NavLink to="/">Asosiy</NavLink></li>
                <li><NavLink to="/products">kinolar</NavLink></li>
            </ul>
            <button className="nav-btn">Kirish</button>
        </nav>
    )
}

export default Navbar