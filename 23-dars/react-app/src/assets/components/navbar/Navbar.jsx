import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { StateContext } from "../../../App"


function Navbar() {
    const { ish,ism } = useContext(StateContext)
    return (
        <div className="container mx-auto" >
            <nav className="w-full h-full mx-auto p-5 mb-5 rounded-[5px] flex items-center gap-3 text-white bg-slate-700 " >
                <NavLink to={'/'} >
                    Home
                </NavLink>
                <NavLink to={'/page'} >
                    products
                </NavLink>

            </nav>

        </div>
    )
}

export default Navbar