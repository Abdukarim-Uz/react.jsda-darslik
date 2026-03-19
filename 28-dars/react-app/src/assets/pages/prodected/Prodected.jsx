import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";

function Prodected() {

    const { hidden } = useSelector(state => state.token)

    if (hidden) {
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