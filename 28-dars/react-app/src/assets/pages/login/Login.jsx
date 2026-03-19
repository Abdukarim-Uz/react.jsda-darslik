import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Login() {

    const data  = useSelector(state => state.user)


    return (
        <div className='container mx-auto p-6 px-15 text-[20px]' >
            <form className="mx-auto mt-70 min-h-20 h-auto p-10 flex items-center flex-col gap-7  w-[30%] rounded-2xl cursor-pointer  *:cursor-pointer bg-white2 "  >
                <input
                    type="text"
                    placeholder="usernameni kiriting.."
                    className="border outline-0 p-2 rounded-xs"
                />

                <input
                    type="text"
                    className="border outline-0 p-2 rounded-xs"
                    placeholder="telefon raqamingizni kiriting..." />

                <p className="text-[15px]" >agar siz ro'yhatdan o'tmagan bo'lsez <NavLink className={'text-blue-200'} to={'/register'} >Register</NavLink> </p>

                <button className="rounded-[5px] bg-green-500 p-3 " >tizimga kirish</button>
            </form>
        </div>
    )
}

export default Login