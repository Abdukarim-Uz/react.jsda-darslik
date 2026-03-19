import axios from "axios"
import { useEffect, useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Login() {
    const navigate = useNavigate()

    const ismRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataObj = {
            username: ismRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const res = await axios.post("https://api-service.fintechhub.uz/login/", dataObj)
            if (res.status === 200) {
                navigate('/')
                console.log(res)
                localStorage.setItem("userIsm", JSON.stringify(res?.data?.user?.username))
                sessionStorage.setItem("isToken",JSON.stringify(res?.data?.tokens?.access))

                toast.success("tizimga kirdingiz!")
                e.target.reset()
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => (
        ismRef.current.focus()
    ), [])

    return (
        <div className=" container mx-auto p-4  px-12 text-[23px] "  >
            <div className="max-w-md mx-auto mt-20 w-full bg-white rounded-xl shadow-lg p-8">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Xush kelibsiz</h2>
                    <p className="text-gray-500 mt-2">Iltimos, hisobingizga kiring</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                            placeholder="Username"
                            ref={ismRef}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Parol</label>
                        <input
                            type="password"
                            className="w-full px-4 text-black py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                            placeholder="••••••••"
                            ref={passwordRef}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                            <span className="ml-2 text-gray-600">Eslab qolish</span>
                        </label>
                        <NavLink to={"#"} className="text-blue-600 hover:underline">Parolni unutdingizmi?</NavLink>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform active:scale-[0.98]"
                    >
                        Tizimga kirish
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-8 text-sm">
                    Hisobingiz yo'qmi?
                    <NavLink to={'/register'} className="text-blue-600 font-bold ml-1 hover:underline">Ro'yxatdan o'ting</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login