import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setIsm } from "../../../userSlice/userSlice"

function Navbar() {

    const { ism } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const salom = () => {
        dispatch(setIsm("sardor"))
    }
    return (
        <div className="bg-blue-600 flex items-center h-15 gap-4 text-xl mx-auto px-5 rounded-sm" >
            <NavLink to={'/'} >
                home
            </NavLink>
            <NavLink to={'/users'} >
                users
            </NavLink>
        </div>
    )
}

export default Navbar