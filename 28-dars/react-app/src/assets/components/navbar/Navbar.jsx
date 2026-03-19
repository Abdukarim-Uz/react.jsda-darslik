import { NavLink } from "react-router-dom"

function Navbar() {


    return (
        <div className="w-full p-6 rounded-xl px-15 bg-blue-900 text-[20px] flex items-center justify-between gap-5 "  >
            <div className="flex items-center gap-5" >
                <NavLink to={'/'} >
                    home
                </NavLink>
                <NavLink to={'/basket'} >
                    basket
                </NavLink>
            </div>

            <div>
                <NavLink to={'/login'} >
                    Login
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar