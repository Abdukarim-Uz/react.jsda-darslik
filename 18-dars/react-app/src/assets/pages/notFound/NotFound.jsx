
import Lottie from "react-lottie"
import data from "../../lotties/Lonely 404(1).json"
import './notFound.css'
import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    const goTohome = () => {
        navigate('/')
    }
    return (
        <>

            <h1 className="h1" >sahifa topilmadi</h1>
            <button onClick={goTohome} className="go-btn" >bosh sahifa</button>
        </>
    )
}

export default NotFound