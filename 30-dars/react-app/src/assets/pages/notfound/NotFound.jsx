import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto pt-5 px-10 text-2xl text-center"  >
            sahifa topilmadi notfound
            <button onClick={() => navigate('/')} >home</button>
        </div>
    )
}

export default NotFound