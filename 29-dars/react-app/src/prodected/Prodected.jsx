import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../assets/components/navbar/Navbar"
import { useSelector } from "react-redux"

function Prodected() {
    const { token } = useSelector(state => state.auth)

    console.log(token)
    if (true) {
        return (
            <>
                <div className="container mx-auto" >
                    <Navbar />
                </div>
                <Outlet />
            </>
        )
    }

    return <Navigate to={'/login'} />
}

export default Prodected