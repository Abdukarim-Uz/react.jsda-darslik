import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../../data/StateContextProvider"

function Navbar() {
    const { user, userNumber, shop, show } = useContext(Context)
    return (
        <div className="w-[95%] h-20  bg-blue-600 text-white justify-between flex items-center text-2xl p-10 rounded-2xl mx-auto" >
            <div className="flex items-center gap-3" >

                <NavLink to={'/'} >
                    home
                </NavLink>
                <NavLink to={'/basket'} >
                    Basket {shop}
                </NavLink>
            </div>
            <div className="flex items-center gap-3" >
                {
                    show ?
                        <>
                            <NavLink>{user}</NavLink>
                            <NavLink>Log Out</NavLink>
                        </>

                        :

                        <NavLink to={'/login'} >
                            login
                        </NavLink>
                }
            </div>
        </div>
    )
}

export default Navbar