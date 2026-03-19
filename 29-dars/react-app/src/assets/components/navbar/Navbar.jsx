import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Navbar() {

    const { ism } = useSelector(state => state.user)

    return (
        <div className="w-full p-4 h-17 px-12 text-[23px] rounded-sm bg-cyan-600 flex items-center justify-between gap-4" >
            <div className="flex items-center gap-3" >

                <NavLink to={'/'} >
                    home
                </NavLink>
                <NavLink to={'/products'} >
                    products
                </NavLink>
            </div>

            <div className="flex items-center gap-3"  >
                <h1>{ism}</h1>
                
                <NavLink to={'/login'} >
                    login
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar