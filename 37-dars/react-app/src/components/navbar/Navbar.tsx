import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav
            className="w-[90%] flex mb-8 items-center gap-10 text-2xl bg-green-800 cursor-pointer *:cursor-pointer mx-auto rounded p-5" >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
    )
}

export default Navbar