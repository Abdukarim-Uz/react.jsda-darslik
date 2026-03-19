import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full h-20 p-2 mb-3 text-[20px] bg-blue-500 mx-auto rounded-xl gap-7 flex items-center flex-wrap" >
            <NavLink to={'/'} >
                home
            </NavLink>
            <NavLink to={'/products'} >
                products
            </NavLink>

            <NavLink to={'/basket'} >
                basket
            </NavLink>
        </div>
    )
}

export default Navbar