import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full h-17 text-white text-2xl gap-20 flex items-center mx-auto rounded bg-blue-500 px-10 " >
            <NavLink to={'/'} >
                Home
            </NavLink>
            <NavLink to={'/login'} >
                login
            </NavLink>
            <NavLink to={'/basket'} >
                login
            </NavLink>
        </div>
    )
}

export default Navbar